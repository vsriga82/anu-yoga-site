import { notFound } from 'next/navigation'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import { getAllPosts, getPost, formatDate } from '@/lib/posts'
import { ArrowLeft } from 'lucide-react'
import { marked } from 'marked'

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export const dynamicParams = false

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const html = await marked(post.content)

  return (
    <main className="min-h-screen bg-[#fbf9f6]">
      <NavBar />

      <div className="pt-36 pb-24">
        <article className="max-w-2xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-sage-600 hover:text-sage-700 mb-12 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All notes
          </Link>

          <header className="mb-12">
            <time className="text-sm text-sage-600 font-medium block mb-3">
              {formatDate(post.date)}
            </time>
            <h1 className="text-4xl lg:text-5xl font-serif text-slate-800 leading-tight mb-4">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-xl text-slate-500 italic leading-relaxed border-l-2 border-sage-200 pl-5">
                {post.excerpt}
              </p>
            )}
          </header>

          <div className="prose-content" dangerouslySetInnerHTML={{ __html: html }} />

          <div className="mt-16 pt-8 border-t border-sage-100">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-sage-600 hover:text-sage-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all notes
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}
