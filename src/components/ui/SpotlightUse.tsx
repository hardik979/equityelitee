/* eslint-disable */
"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { ShieldCheck, TrendingUp, Zap } from "lucide-react";

export function SpotlightNewDemo() {
  return (
    <div className="h-screen w-full relative z-0">
      {" "}
      {/* ensure z-0 */}
      <div className="h-screen w-full rounded-md bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden z-0">
        <Spotlight />

        <div className="h-screen w-full bg-[#0a0f0d] relative overflow-hidden z-0">
          {/* Grid glow */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="bg-grid-glow w-full h-full" />
          </div>

          {/* Hero Content */}
          <div className="relative z-20 flex mt-10 flex-col items-center justify-center h-screen text-center px-4 pointer-events-auto">
            <h1 className="text-5xl md:text-7xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-green-400 bg-opacity-50">
              Equity Elite <br /> Start Booking Your Profit Today
            </h1>

            <p className="mt-6 font-normal text-sm  text-green-100 max-w-lg text-center mx-auto">
              Stock Market are subjected to market risk. Please read all terms
              and conditions carefully and proceed at your own will.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row sm:gap-4 gap-3 sm:justify-start justify-center">
              <button className="relative inline-flex sm:inline-flex w-full sm:w-auto max-w-xs sm:max-w-none h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-green-400/40 focus:ring-offset-2 focus:ring-offset-black group">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00ffcc_0%,#007a5e_50%,#00ffcc_100%)] opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0a0f0d] px-6 py-2 text-xl font-semibold text-green-200 backdrop-blur-xl group-hover:text-white transition-colors duration-300">
                  Don't Wait
                </span>
              </button>

              <button className="relative inline-flex sm:inline-flex w-full sm:w-auto max-w-xs sm:max-w-none h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black group">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00ffcc_0%,#007a5e_50%,#00ffcc_100%)] opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0a0f0d] px-6 py-2 text-xl font-semibold text-green-200 backdrop-blur-xl group-hover:text-white transition-colors duration-300">
                  Let's Get Started
                </span>
              </button>
            </div>

            <div className="mt-8 text-lg text-green-200 flex flex-col md:flex-row items-center gap-6 opacity-90">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <p>10k+ Active Investors</p>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <p>₹50Cr+ in Booked Profits</p>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-green-400" />
                <p>90% Signal Accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
