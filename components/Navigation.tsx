'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">Content Agent</span>
          </Link>

          <div className="flex space-x-1">
            <Link
              href="/research"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/research')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Research
            </Link>
            <Link
              href="/topics"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/topics')
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Topics
            </Link>
            <Link
              href="/script-generator"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/script-generator')
                  ? 'bg-pink-100 text-pink-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Script Generator
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
