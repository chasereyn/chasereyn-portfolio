import type { Metadata } from "next"
import Link from "next/link"
import { formatDate, getAllPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Blog | Chase Reynolds",
  description: "Notes on working with AI agents.",
  alternates: { types: { "application/rss+xml": "/blog/rss.xml" } },
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <section className="py-24">
      <div className="container max-w-[900px]">
        <h2 className="text-2xl font-bold mb-12 text-zinc-200">Blog</h2>

        {posts.length === 0 ? (
          <p className="text-sm text-zinc-400">No posts yet.</p>
        ) : (
          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-xl border border-purple-400/40 hover:border-purple-300/60 transition-colors backdrop-blur-sm p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-6">
                    <h3 className="text-base font-semibold text-zinc-100 group-hover:text-purple-300 transition-colors">
                      {post.title}
                      {post.draft && (
                        <span className="ml-2 align-middle px-2 py-0.5 text-xs rounded-full bg-purple-900/30 text-purple-300 border border-purple-400/40">
                          draft
                        </span>
                      )}
                    </h3>
                    <time dateTime={post.date} className="shrink-0 text-sm text-zinc-400">
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <p className="mt-3 text-sm text-zinc-300">{post.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-12 text-sm text-zinc-500">
          <a href="/blog/rss.xml" className="text-purple-400 hover:text-purple-300 transition-colors">
            RSS feed
          </a>
        </p>
      </div>
    </section>
  )
}
