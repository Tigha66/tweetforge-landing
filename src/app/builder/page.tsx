'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Zap, ArrowRight, Loader2, Check, ExternalLink } from 'lucide-react'

export default function BuilderPage() {
  const router = useRouter()
  const [prompt, setPrompt] = useState('')
  const [generating, setGenerating] = useState(false)
  const [generated, setGenerated] = useState(false)
  const [publishing, setPublishing] = useState(false)
  const [published, setPublished] = useState(false)

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    
    setGenerating(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setGenerating(false)
    setGenerated(true)
  }

  const handlePublish = async () => {
    setPublishing(true)
    // Simulate publishing
    await new Promise(resolve => setTimeout(resolve, 1500))
    setPublishing(false)
    setPublished(true)
    
    // Redirect to dashboard after 2 seconds
    setTimeout(() => {
      router.push('/dashboard')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">LandingForge</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/pricing" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-medium transition">
              Upgrade to Pro
            </Link>
          </div>
        </div>
      </header>

      {/* Builder */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">AI Landing Page Builder</h1>
          <p className="text-slate-400">Describe what you need and AI builds it in seconds</p>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
          <label className="block text-white font-medium mb-3">What kind of landing page do you need?</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., A landing page for a freelance photographer showcasing their portfolio with a contact form and pricing packages..."
            className="w-full bg-slate-900/50 border border-slate-600 rounded-xl p-4 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition resize-none"
            rows={5}
          />
          
          <div className="flex items-center justify-between mt-6">
            <p className="text-slate-500 text-sm">
              {!generated ? '2 free generations remaining' : '1 free generation remaining'}
            </p>
            <button
              onClick={handleGenerate}
              disabled={generating || !prompt.trim()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-full font-semibold transition flex items-center gap-2"
            >
              {generating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5" />
                  Generate Landing Page
                </>
              )}
            </button>
          </div>
        </div>

        {/* Generated Preview */}
        {generated && (
          <div className="mt-8 bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Your Landing Page</h3>
              <div className="flex gap-3">
                <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-medium transition">
                  Edit
                </button>
                <button 
                  onClick={handlePublish}
                  disabled={publishing || published}
                  className="bg-blue-600 hover:bg-blue-500 disabled:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition flex items-center gap-2"
                >
                  {publishing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Publishing...
                    </>
                  ) : published ? (
                    <>
                      <Check className="w-4 h-4" />
                      Published!
                    </>
                  ) : (
                    <>
                      <ExternalLink className="w-4 h-4" />
                      Publish
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600">
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📸</div>
                <h4 className="text-2xl font-bold text-white mb-2">Photographer Portfolio</h4>
                <p className="text-slate-400 mb-6">Professional photography services</p>
                <div className="flex justify-center gap-4">
                  <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-medium">View Portfolio</button>
                  <button className="bg-slate-700 text-white px-6 py-2 rounded-full font-medium">Contact</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Success Message */}
        {published && (
          <div className="mt-8 bg-green-500/20 border border-green-500/30 rounded-2xl p-6 text-center">
            <Check className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-400 mb-2">Page Published Successfully!</h3>
            <p className="text-slate-300">Redirecting to your dashboard...</p>
          </div>
        )}
      </main>
    </div>
  )
}
