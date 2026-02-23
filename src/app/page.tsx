import Link from 'next/link'
import { Zap, CreditCard, BarChart3, Rocket, Check, ArrowRight } from 'lucide-react'

export default function Home() {
  const templates = [
    { name: 'Creator Portfolio', desc: 'Showcase your work', icon: '🎨' },
    { name: 'Course & Learning', desc: 'Sell online courses', icon: '📚' },
    { name: 'Service Business', desc: 'Consultants & agencies', icon: '💼' },
    { name: 'Product Launch', desc: 'New product pages', icon: '🚀' },
    { name: 'Newsletter', desc: 'Email list building', icon: '📧' },
    { name: 'Consulting', desc: 'Expert positioning', icon: '🎯' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">LandingForge</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/templates" className="text-slate-300 hover:text-white transition">Templates</Link>
            <Link href="/pricing" className="text-slate-300 hover:text-white transition">Pricing</Link>
            <Link href="#features" className="text-slate-300 hover:text-white transition">Features</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/signin" className="text-slate-300 hover:text-white transition">Sign In</Link>
            <Link href="/dashboard" className="text-slate-300 hover:text-white transition">Sign In</Link>
            <Link href="/builder" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-medium transition">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-slate-300">Now with AI-powered generation</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Create stunning landing pages in{' '}
            <span className="gradient-text">seconds</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            No coding required. Just describe what you need and our AI builds it. 
            Perfect for creators, freelancers, and small businesses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/builder" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition flex items-center justify-center gap-2">
              Start Building Free <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/templates" className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition border border-slate-700">
              View Templates
            </Link>
          </div>
          <p className="text-slate-500 mt-4 text-sm">Free 2-page generation • No credit card required</p>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">6 Ready-Made Templates</h2>
            <p className="text-slate-400">Choose a template and customize it with AI</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, i) => (
              <Link key={i} href="/templates" className="group bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 rounded-2xl p-6 transition cursor-pointer hover:scale-[1.02]">
                <div className="text-4xl mb-4">{template.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{template.name}</h3>
                <p className="text-slate-400">{template.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI-Powered</h3>
              <p className="text-slate-400">Describe your needs and AI generates a complete landing page in seconds</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Built-in Payments</h3>
              <p className="text-slate-400">Stripe integration ready. Start accepting payments immediately</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Analytics</h3>
              <p className="text-slate-400">Track visits, conversions, and revenue with built-in analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple Pricing</h2>
            <p className="text-slate-400">Start free, upgrade when you're ready</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-2">Free</h3>
              <div className="text-4xl font-bold text-white mb-4">$0<span className="text-lg font-normal text-slate-400">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-300"><Check className="w-5 h-5 text-green-400" /> 2 page generations</li>
                <li className="flex items-center gap-2 text-slate-300"><Check className="w-5 h-5 text-green-400" /> Basic templates</li>
                <li className="flex items-center gap-2 text-slate-300"><Check className="w-5 h-5 text-green-400" /> Community support</li>
              </ul>
              <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-xl font-medium transition">Get Started</button>
            </div>
            {/* Pro */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 border border-transparent rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
              <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
              <div className="text-4xl font-bold text-white mb-4">$9<span className="text-lg font-normal text-white/70">/mo</span></div>
              <ul className="space-y-3 mb-8 text-white/90">
                <li className="flex items-center gap-2"><Check className="w-5 h-5" /> Unlimited generations</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5" /> All 6+ templates</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5" /> Custom domain</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5" /> Analytics dashboard</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5" /> Priority support</li>
              </ul>
              <button className="w-full bg-white text-blue-600 hover:bg-gray-100 py-3 rounded-xl font-medium transition">Start Free Trial</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to build your landing page?</h2>
          <p className="text-slate-400 mb-8 text-lg">Join thousands of creators building faster with LandingForge</p>
          <Link href="/builder" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-10 py-4 rounded-full font-semibold text-lg transition">
            <Rocket className="w-5 h-5" /> Start Building Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-semibold">LandingForge</span>
          </div>
          <p className="text-slate-500 text-sm">© 2026 LandingForge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
