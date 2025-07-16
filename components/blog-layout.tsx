import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"
import Link from "next/link"

interface BlogLayoutProps {
  title: string
  children: React.ReactNode
}

export default function BlogLayout({ title, children }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
          </div>
        </nav>

        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600">by Jhon Santamaria</p>
        </header>

        {/* Content */}
        <main className="max-w-4xl mx-auto">{children}</main>

        {/* Footer */}
        <footer className="text-center py-8 mt-12 border-t border-gray-200">
          <Link href="/">
            <Button variant="outline">
              <Home className="h-4 w-4 mr-2" />
              Return to Blog Home
            </Button>
          </Link>
        </footer>
      </div>
    </div>
  )
}
