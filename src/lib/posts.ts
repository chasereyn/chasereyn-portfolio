import fs from "node:fs"
import path from "node:path"
import { marked } from "marked"

const POSTS_DIR = path.join(process.cwd(), "content", "blog")

export type PostMeta = {
  slug: string
  title: string
  date: string
  description: string
  draft: boolean
}

export type Post = PostMeta & { html: string }

// Drafts show in `bun dev`, and in a production build only with SHOW_DRAFTS=1.
const showDrafts =
  process.env.NODE_ENV !== "production" || process.env.SHOW_DRAFTS === "1"

// Frontmatter is a flat `key: value` block between `---` lines. No YAML library needed.
function parseFrontmatter(raw: string, file: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) throw new Error(`${file}: missing frontmatter`)

  const data: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(":")
    if (i === -1) continue
    data[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, "")
  }

  for (const key of ["title", "date", "description"]) {
    if (!data[key]) throw new Error(`${file}: frontmatter is missing "${key}"`)
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data.date)) {
    throw new Error(`${file}: date must be YYYY-MM-DD, got "${data.date}"`)
  }

  return { data, body: match[2] }
}

function readPost(slug: string): Post {
  const file = path.join(POSTS_DIR, `${slug}.md`)
  const { data, body } = parseFrontmatter(fs.readFileSync(file, "utf8"), `${slug}.md`)
  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    draft: data.draft === "true",
    html: marked.parse(body, { async: false }),
  }
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => readPost(f.replace(/\.md$/, "")))
    .filter((p) => showDrafts || !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug)
}

// Dates are calendar days, so format in UTC to avoid shifting a day in western time zones.
export function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })
}
