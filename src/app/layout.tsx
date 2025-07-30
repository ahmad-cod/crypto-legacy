import type { Metadata } from 'next'
import { Shield } from 'lucide-react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SecureInherit - Digital Asset Recovery',
  description: 'Safely recover your loved ones digital assets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen`}>
        {/* Subtle background pattern for premium feel */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-900"></div>
        
        {/* Main content wrapper */}
        <div className="relative z-10">
          {/* Trust header - minimal but impactful */}
          <header className="border-b border-white/10 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-2xl flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-lg">CL</span>
                </div>
                <span className="text-white font-semibold text-xl">Crypto Legacy</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-300">
                <Shield className="text-green-400" /> 
                Bank-Level Security
                <div className="w-2 h-2 ml-1 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </header>
          
          {/* Main content area */}
          <main className="max-w-4xl mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}