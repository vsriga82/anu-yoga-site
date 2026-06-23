import Link from 'next/link'
import NavBar from '@/components/NavBar'
import { getAllPosts, formatDate } from '@/lib/posts'
import { PenLine } from 'lucide-react'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-[#fbf9f6]">
      <NavBar />

      <div className="pt-40 pb-24 max-w-3xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-6">
            <PenLine className="w-4 h-4" />
            <span>Reflections</span>
          </div>
          <h1 className="text-5xl font-serif text-slate-800 mb-4">Notes from the mat.</h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
            Gentle, anonymous reflections from the practice — not instruction, but the things this work keeps teaching me.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 border border-sage-100 text-center">
            <p className="text-slate-400 text-lg italic leading-relaxed">
              The first note is being written. Come back soon.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group bg-white rounded-3xl p-8 sm:p-10 border border-sage-100 hover:border-sage-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <time className="text-sm text-sage-600 font-medium">{formatDate(post.date)}</time>
                <h2 className="text-2xl font-serif text-slate-800 mt-2 mb-3 group-hover:text-sage-700 transition-colors">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-slate-600 leading-relaxed">{post.excerpt}</p>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
