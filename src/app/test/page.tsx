'use client';

import { useState } from 'react';

export default function ComponentTest() {
  const [loading, setLoading] = useState(false);

  const testLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div className="space-y-8 p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Component Testing</h1>
      
      {/* Color Palette Test */}
      <section className="glass rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-emerald-500 p-4 rounded-lg text-center">
            <div className="text-white font-semibold">Primary</div>
            <div className="text-emerald-100 text-sm">emerald-500</div>
          </div>
          <div className="bg-cyan-500 p-4 rounded-lg text-center">
            <div className="text-white font-semibold">Secondary</div>
            <div className="text-cyan-100 text-sm">cyan-500</div>
          </div>
          <div className="bg-slate-700 p-4 rounded-lg text-center">
            <div className="text-white font-semibold">Neutral</div>
            <div className="text-slate-300 text-sm">slate-700</div>
          </div>
          <div className="bg-purple-600 p-4 rounded-lg text-center">
            <div className="text-white font-semibold">Accent</div>
            <div className="text-purple-200 text-sm">purple-600</div>
          </div>
        </div>
      </section>

      {/* Button Tests */}
      <section className="glass rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-smooth transform hover:scale-105">
            Primary Button
          </button>
          <button className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-smooth">
            Secondary Button
          </button>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-smooth">
            Success Button
          </button>
          <button 
            onClick={testLoading}
            className="bg-slate-600 hover:bg-slate-500 text-white font-semibold py-3 px-6 rounded-lg transition-smooth"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Loading...</span>
              </div>
            ) : (
              'Test Loading'
            )}
          </button>
        </div>
      </section>

      {/* Typography Test */}
      <section className="glass rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Typography</h2>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold gradient-text">Large Heading (Gradient)</h1>
          <h2 className="text-3xl font-bold text-white">Medium Heading (White)</h2>
          <h3 className="text-xl font-semibold text-slate-300">Small Heading (Slate-300)</h3>
          <p className="text-slate-300">Regular paragraph text in slate-300 for good readability</p>
          <p className="text-slate-400 text-sm">Secondary text in slate-400 for less important information</p>
          <div className="text-6xl font-bold text-emerald-400">$137,500</div>
          <div className="text-lg text-slate-300">Large financial numbers in emerald for trust</div>
        </div>
      </section>

      {/* Glass Morphism Test */}
      <section className="glass rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Glass Morphism Cards</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="glass rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">Asset Card Style</h3>
            <p className="text-slate-300 text-sm">This glass effect provides depth and premium feel</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <h3 className="text-white font-semibold mb-2">Subtle Variant</h3>
            <p className="text-slate-300 text-sm">Even more subtle glass effect for secondary content</p>
          </div>
        </div>
      </section>

      {/* Trust Indicators Test */}
      <section className="glass rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Trust Indicators</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300">Bank-Level Security</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">✓</span>
            </div>
            <span className="text-slate-300">Verified & Regulated</span>
          </div>
        </div>
      </section>
    </div>
  );
}