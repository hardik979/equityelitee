"use client";
import React from "react";
import { Meteors } from "./Meteors";
import { ArrowDownRight } from "lucide-react";

const services = [
  {
    title: "NSE & BSE Equity Signals",
    desc: "Accurate intraday and positional signals for top NSE and BSE stocks with expert analysis.",
  },
  {
    title: "Nifty & Bank Nifty Trades",
    desc: "Precision entry & exit strategies with 90%+ accuracy for Nifty and Bank Nifty futures & options.",
  },
  {
    title: "Crypto Trading Insights",
    desc: "Real-time alerts and trend analysis on major cryptocurrencies like BTC, ETH, and more.",
  },
  {
    title: "Market-Wide Scanning",
    desc: "Live technical and volume-based scanners across NSE, BSE, and Crypto to catch early breakouts.",
  },
  {
    title: "Risk Management Support",
    desc: "Proper SL/TP setup, portfolio allocation, and capital protection strategies for every trade.",
  },
  {
    title: "24/7 Premium Support",
    desc: "Instant assistance for any market query, signal explanation, or portfolio doubt via WhatsApp.",
  },
];

export function MeteorsDemo() {
  return (
    <section className="relative w-full px-4 py-24 min-h-screen bg-[#0a0f0d]">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-bold underline  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-green-400  bg-opacity-50">
          We Provide{" "}
          <ArrowDownRight className="w-6 h-6 inline-block text-green-400" />
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
        {services.map((item, idx) => (
          <div
            key={idx}
            className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl"
          >
            {/* Always-on Glow Behind Card */}
            <div className="absolute inset-0 z-0 scale-150 rounded-3xl bg-gradient-to-r from-green-400 to-teal-500 blur-[100px] opacity-15 pointer-events-none" />

            {/* Card */}
            <div className="relative z-10 overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-6 py-8 shadow-xl">
              {/* Top Corner Dot */}
              <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-2 w-2 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>

              {/* Content */}
              <h3 className="mb-4 text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="mb-6 text-sm text-slate-400">{item.desc}</p>
              <button className="rounded-lg border border-gray-600 px-4 py-1 text-gray-300 hover:bg-gray-800 transition">
                Explore
              </button>

              {/* Meteors */}
              <Meteors
                number={12}
                className="bg-green-400 before:from-green-400"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
