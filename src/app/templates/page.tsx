'use client'

import Link from 'next/link'
import { Zap, ArrowLeft } from 'lucide-react'

export default function TemplatesPage() {
  const templates = [
    { name: 'Creator Portfolio', desc: 'Showcase your work', icon: '🎨', color: 'from-pink-500 to-rose-500' },
    { name: 'Course & Learning', desc: 'Sell online courses', icon: '📚', color: 'from-blue-500 to-cyan-500' },
    { name: 'Service Business', desc: 'Consultants & agencies', icon: '💼', color: 'from-purple-500 to-violet-500' },
    { name: 'Product Launch', desc: 'New product pages', icon: '🚀', color: 'from-orange-500 to-amber-500' },
    { name: 'Newsletter', desc: 'Email list building', icon: '📧', color: 'from-green-500 to-emerald-500' },
    { name: 'Consulting', desc: 'Expert positioning', icon: '🎯', color: 'from-indigo-500 to-blue-500' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="border-b border-slate-700/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">TweetForge</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/signin" className="text-slate-300 hover:text-white transition">Sign In</Link>
            <Link href="/pricing" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-medium transition">
              Upgrade to Pro
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Template</span>
          </h1>
          <p className="text-xl text-slate-400">Select a template and customize it with AI</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, i) => (
            <div key={i} className="group bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 rounded-2xl p-6 transition cursor-pointer hover:scale-[1.02]">
              <div className={`w-14 h-14 bg-gradient-to-br ${template.color} rounded-2xl flex items-center justify-center text-3xl mb-4`}>
                {template.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{template.name}</h3>
              <p className="text-slate-400 mb-4">{template.desc}</p>
              <Link href="/builder" className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition">
                Use Template
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-4">Want all templates unlimited?</p>
          <Link href="/pricing" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-full font-semibold transition">
            Upgrade to Pro - $9/mo
          </Link>
        </div>
      </main>
    </div>
  )
}
