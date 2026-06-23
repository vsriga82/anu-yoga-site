import Link from 'next/link'
import { Leaf } from 'lucide-react'

export default function NavBar() {
  return (
    <nav className="fixed w-full z-50 bg-beige/80 backdrop-blur-md border-b border-sage-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 text-sage-700">
            <Leaf className="w-6 h-6" />
            <span className="font-serif font-semibold text-xl tracking-wide">Anu Mindfulness Yoga</span>
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-slate-500 hover:text-sage-700 transition-colors hidden sm:block"
          >
            Notes from the mat
          </Link>
        </div>
        <Link href="/#booking" className="text-sm font-medium text-sage-700 hover:text-sage-600 transition-colors">
          Book Consultation
        </Link>
      </div>
    </nav>
  )
}
