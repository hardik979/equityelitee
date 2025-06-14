import React from "react";
import { Compare } from "./CompareCard";
import { ArrowDownRight } from "lucide-react";

export function CompareDemo() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0f0d] dark:bg-neutral-900 p-6">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-small-green opacity-10 pointer-events-none z-0" />

      {/* Heading */}
      <div className="relative z-10 text-center und mb-8">
        <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-green-400  bg-opacity-50 flex justify-center underline items-center gap-2">
          Your Portfolio <ArrowDownRight className="w-10 h-10 text-green-400" />
        </h1>
      </div>

      {/* Main Centered Section */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-8rem)] gap-10 md:gap-20">
        {/* Compare Card on Left */}
        <div className="flex-shrink-0">
          <Compare
            firstImage="/up.png"
            secondImage="/down.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[250px] w-[200px] md:h-[450px] md:w-[450px]"
            slideMode="hover"
            autoplay={true}
          />
        </div>

        {/* Text Content on Right */}
        <div className="max-w-lg text-white space-y-6 px-4 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-green-400  bg-opacity-50">
            Why we stand out?
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed">
            Navigate the market with confidence. With our advanced tools,
            predictive analysis, and expert insights, your portfolio won’t just
            survive — it will thrive.
          </p>
          <p className="text-gray-400 text-md italic">
            Compare the growth trajectory —{" "}
            <span className="text-green-500 font-medium">with us</span> vs{" "}
            <span className="text-red-500 font-medium">without us</span>.
          </p>
          <button className="mt-4 px-6 py-2 rounded-full bg-green-500 hover:bg-green-600 text-black font-semibold transition-all duration-300 shadow-lg shadow-green-500/20">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
