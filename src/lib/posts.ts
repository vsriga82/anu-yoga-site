import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'src/content/posts')

export type PostMeta = {
  slug: string
  title: string
  date: string
  excerpt?: string
}

export type Post = PostMeta & { content: string }

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return []
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
  return files
    .map(filename => {
      const slug = filename.replace(/\.md$/, '')
      const { data } = matter.read(path.join(postsDir, filename))
      return {
        slug,
        title: String(data.title ?? 'Untitled'),
        date: String(data.date ?? ''),
        excerpt: data.excerpt ? String(data.excerpt) : undefined,
      }
    })
    .filter(p => p.date)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string): Post | null {
  const filepath = path.join(postsDir, `${slug}.md`)
  if (!fs.existsSync(filepath)) return null
  const { data, content } = matter.read(filepath)
  return {
    slug,
    title: String(data.title ?? 'Untitled'),
    date: String(data.date ?? ''),
    excerpt: data.excerpt ? String(data.excerpt) : undefined,
    content,
  }
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
