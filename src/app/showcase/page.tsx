'use client'

import Link from 'next/link'
import { Zap, ExternalLink, Star } from 'lucide-react'

export default function ShowcasePage() {
  const examples = [
    {
      title: 'Photographer Portfolio',
      description: 'Professional photography services with contact form',
      emoji: '📸',
      template: 'Creator Portfolio'
    },
    {
      title: 'Online Course Platform',
      description: 'Learn photography from beginner to advanced',
      emoji: '📚',
      template: 'Course & Learning'
    },
    {
      title: 'Marketing Agency',
      description: 'Digital marketing services for businesses',
      emoji: '💼',
      template: 'Service Business'
    },
    {
      title: 'Product Launch',
      description: 'New tech product announcement landing page',
      emoji: '🚀',
      template: 'Product Launch'
    },
    {
      title: 'Newsletter Subscription',
      description: 'Weekly tech news delivered to your inbox',
      emoji: '📧',
      template: 'Newsletter'
    },
    {
      title: 'Business Consultant',
      description: 'Expert business advice and strategy',
      emoji: '🎯',
      template: 'Consulting'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">LandingForge</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/templates" className="text-slate-300 hover:text-white transition">Templates</Link>
            <Link href="/pricing" className="text-slate-300 hover:text-white transition">Pricing</Link>
            <Link href="/showcase" className="text-slate-300 hover:text-white transition">Showcase</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/signin" className="text-slate-300 hover:text-white transition">Sign In</Link>
            <Link href="/builder" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-medium transition">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Landing Page <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Showcase</span>
          </h1>
          <p className="text-xl text-slate-400 mb-8">
            See examples of beautiful landing pages created with LandingForge
          </p>
          <Link href="/builder" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-full font-semibold transition">
            Create Your Own <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Examples */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examples.map((example, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 rounded-2xl p-6 transition cursor-pointer hover:scale-[1.02]">
                <div className="text-5xl mb-4">{example.emoji}</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full">{example.template}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{example.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{example.description}</p>
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1">
                  View Live <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to create your landing page?</h2>
          <p className="text-slate-400 mb-8">Join thousands of creators using LandingForge</p>
          <Link href="/builder" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-10 py-4 rounded-full font-semibold text-lg transition">
            Start Building Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-500">© 2026 LandingForge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
