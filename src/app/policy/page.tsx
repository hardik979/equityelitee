"use client";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0f0d] text-white flex items-center justify-center px-6 py-12">
      <div className="absolute inset-0 bg-grid-small-green opacity-10 pointer-events-none z-0" />

      <div className="max-w-3xl text-center mt-12 space-y-6 bg-gray-900/80 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-green-700/30">
        <h1 className="text-4xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-green-400  bg-opacity-50">
          Disclaimer & About Us
        </h1>

        <p className="text-lg text-gray-300">
          We are{" "}
          <span className="font-semibold text-white">not SEBI registered</span>.
          All the information and trade setups we provide are solely for
          educational and informational purposes only.
        </p>

        <p className="text-lg text-gray-300">
          Trading and investing in the stock market involves risk. You should do
          your own analysis before making any trades. We do not guarantee
          profits or returns.
        </p>

        <p className="text-lg text-gray-300">
          By using our platform, you agree that you are doing so{" "}
          <span className="text-green-400 font-semibold">at your own risk</span>
          . We are not liable for any financial losses.
        </p>

        <div className="mt-8">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} TradeLens India. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
