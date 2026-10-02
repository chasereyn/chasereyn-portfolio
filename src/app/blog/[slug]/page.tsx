import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { formatDate, getAllPosts, getPost } from "@/lib/posts"

// Only slugs that exist at build time; anything else is a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug)
  if (!post) return {}
  return {
    title: `${post.title} | Chase Reynolds`,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const post = getPost((await params).slug)
  if (!post) notFound()

  return (
    <article className="py-24">
      <div className="container max-w-[900px]">
        <Link href="/blog" className="text-sm text-zinc-400 hover:text-purple-300 transition-colors">
          ← All posts
        </Link>

        <header className="mt-8 mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-zinc-100 leading-tight">{post.title}</h2>
          <time dateTime={post.date} className="mt-3 block text-sm text-zinc-400">
            {formatDate(post.date)}
            {post.draft && <span className="ml-2 text-purple-300">· draft</span>}
          </time>
        </header>

        <div
          className="prose prose-invert prose-zinc max-w-none prose-headings:text-zinc-200 prose-p:text-zinc-300 prose-li:text-zinc-300 prose-strong:text-zinc-100 prose-a:text-purple-400 hover:prose-a:text-purple-300 prose-code:text-purple-300 prose-code:before:content-none prose-code:after:content-none"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </article>
  )
}
