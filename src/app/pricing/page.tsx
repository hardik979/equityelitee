"use client";
import React from "react";

const pricingOptions = [
  {
    title: "1 Month",
    price: "₹4,999",
    message: "I want to buy the membership 1 Month",
  },
  {
    title: "3 Months",
    price: "₹12,999",
    message: "I want to buy the membership 3 Months",
  },
  {
    title: "6 Months",
    price: "₹10,999",
    message: "I want to buy the membership 6 Months",
  },
  {
    title: "1 Year",
    price: "₹9,999",
    message: "I want to buy the membership 1 Year",
    mostBought: true,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0a0f0d] [font-family:var(--font-raleway)]  text-green-100 py-20 px-6">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="bg-grid-glow w-full h-full" />
      </div>
      <div className="max-w-6xl mx-auto mt-20 sm:mt-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Our Pricing Plans
        </h2>
        <p className="text-md md:text-lg text-green-300 mb-12">
          Registration fees apply based on your plan. Choose what suits you
          best.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-black via-[#0f1a16] to-black border border-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md flex flex-col justify-between transition-transform duration-300 hover:scale-105 ${
                option.mostBought
                  ? "border-green-500 ring-2 ring-green-500 shadow-green-500/20"
                  : ""
              }`}
              style={{
                minHeight: "320px",
                width: "100%",
                maxWidth: "300px",
                margin: "0 auto",
              }}
            >
              {option.mostBought && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-black text-xs px-3 py-1 rounded-full font-bold shadow-md">
                  Most Bought
                </div>
              )}

              <div className="flex flex-col gap-3 items-center justify-center text-center flex-grow">
                <h3 className="text-2xl font-semibold">{option.title}</h3>
                <p className="text-3xl font-bold text-green-300">
                  {option.price}
                </p>
              </div>

              <a
                href={`https://wa.me/+919685906784?text=${encodeURIComponent(
                  option.message
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block w-full rounded-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 text-sm transition-colors text-center"
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
