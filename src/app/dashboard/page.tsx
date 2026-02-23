'use client'

import Link from 'next/link'
import { Zap, Layout, CreditCard, BarChart3, Plus, ExternalLink } from 'lucide-react'

export default function DashboardPage() {
  const pages = [
    { name: 'My Portfolio', template: 'Creator Portfolio', status: 'Published', views: 124 },
    { name: 'Product Launch', template: 'Product Launch', status: 'Draft', views: 0 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="border-b border-slate-700/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">LandingForge</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/builder" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-medium transition">
              <Plus className="w-4 h-4 inline mr-2" /> New Page
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-slate-400">Manage your landing pages</p>
          </div>
          <Link href="/pricing" className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-full font-semibold text-sm">
            🔥 Pro Active
          </Link>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                <Layout className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Total Pages</p>
                <p className="text-2xl font-bold text-white">{pages.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Total Views</p>
                <p className="text-2xl font-bold text-white">124</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Subscription</p>
                <p className="text-2xl font-bold text-white">Pro</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pages */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Your Pages</h2>
            <Link href="/builder" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition flex items-center gap-2">
              <Plus className="w-4 h-4" /> Create New
            </Link>
          </div>

          <div className="space-y-4">
            {pages.map((page, i) => (
              <div key={i} className="flex items-center justify-between bg-slate-900/50 rounded-lg p-4">
                <div>
                  <h3 className="font-semibold text-white">{page.name}</h3>
                  <p className="text-slate-400 text-sm">{page.template}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    page.status === 'Published' 
                      ? 'bg-green-600/20 text-green-400' 
                      : 'bg-slate-600/20 text-slate-400'
                  }`}>
                    {page.status}
                  </span>
                  <span className="text-slate-400 text-sm">{page.views} views</span>
                  <button className="text-blue-400 hover:text-blue-300">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
