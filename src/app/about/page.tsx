/* eslint-disable */

"use client";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#0a0f0d] text-white px-4 py-12 relative">
      {/* Grid background overlay */}
      <div className="absolute inset-0 bg-grid-small-green opacity-10 pointer-events-none z-0" />

      {/* About Box */}
      <div className="max-w-6xl w-full mx-auto space-y-8 bg-gray-900/80 mt-12 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-2xl border border-green-700/30 text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-green-400 bg-opacity-50">
          Welcome to Equity Elite
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed">
          At <span className="font-semibold text-white">Equity Elite</span>, we
          specialize in providing advanced market insights and trading analysis
          for a wide range of segments including:
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-green-400 font-semibold text-lg">
          <span className="px-4 py-2 bg-green-900/30 rounded-full border border-green-600/40">
            Nifty
          </span>
          <span className="px-4 py-2 bg-green-900/30 rounded-full border border-green-600/40">
            Bank Nifty
          </span>
          <span className="px-4 py-2 bg-green-900/30 rounded-full border border-green-600/40">
            Commodities
          </span>
          <span className="px-4 py-2 bg-green-900/30 rounded-full border border-green-600/40">
            Forex
          </span>
          <span className="px-4 py-2 bg-green-900/30 rounded-full border border-green-600/40">
            Crypto
          </span>
        </div>

        <p className="text-lg text-gray-300 leading-relaxed">
          Whether <span className="italic">you're</span> a beginner or an
          experienced trader, our goal is to empower you with strategies, market
          structures, and trade setups that can help you navigate the financial
          world with more confidence.
        </p>

        <p className="text-sm text-gray-500 italic">
          Note: We are not SEBI registered. All trades and strategies are for
          educational purposes only.
        </p>

        <div className="pt-6 border-t border-green-800/30">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Equity Elite. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
