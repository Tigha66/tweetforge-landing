'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function PublishedPage() {
  const [pageData, setPageData] = useState({
    title: 'Your Page Title',
    description: 'Your page description here',
    emoji: '📸'
  })

  useEffect(() => {
    // In demo mode, use default data
    // In real app, this would fetch from database
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">L</span>
              </div>
              <span className="text-xl font-bold text-white">LandingForge</span>
            </Link>
          </div>
          <Link href="/dashboard" className="text-slate-300 hover:text-white transition">
            Go to Dashboard
          </Link>
        </div>
      </header>

      {/* Published Page Content */}
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center py-20 bg-slate-800/50 border border-slate-700 rounded-3xl">
          <div className="text-8xl mb-8">{pageData.emoji}</div>
          <h1 className="text-5xl font-bold text-white mb-6">{pageData.title}</h1>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">{pageData.description}</p>
          
          <div className="flex justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold">
              Learn More
            </button>
            <button className="bg-slate-700 text-white px-8 py-3 rounded-full font-semibold">
              Contact Us
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 mb-4">This is your published landing page</p>
          <Link href="/builder" className="text-blue-400 hover:text-blue-300">
            Create another page →
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6 text-center">
        <p className="text-slate-500 text-sm">
          Powered by LandingForge
        </p>
      </footer>
    </div>
  )
}
