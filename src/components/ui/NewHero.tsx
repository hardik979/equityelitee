import { useEffect, useRef } from "react";
import Image from "next/image";
import RotatingText from "./RotatingText";
import { ArrowDownRight } from "lucide-react";

interface Ticker {
  name: string;
  price: string;
  change: string;
  icon: string;
}

const tickers: Ticker[] = [
  {
    name: "Infosys",
    price: "₹4,000 INR",
    change: "+50 +1.25%",
    icon: "/infosys.png",
  },
  {
    name: "TATA",
    price: "₹1,200 INR",
    change: "+12 +1.01%",
    icon: "/tata.png",
  },
  {
    name: "Reliance Digital",
    price: "₹2,500 INR",
    change: "-30 -1.20%",
    icon: "/reliance.png",
  },
  {
    name: "TCS",
    price: "₹3,800 INR",
    change: "+40 +1.06%",
    icon: "/tata.png",
  },
  {
    name: "Bitcoin",
    price: "₹2,500,000 INR",
    change: "+35 +1.45%",
    icon: "/bitcoin.png",
  },
  {
    name: "Etherum",
    price: "₹180,000 INR",
    change: "+10 +1.20%",
    icon: "/etherum.png",
  },
  {
    name: "Infosys",
    price: "₹4,000 INR",
    change: "+50 +1.25%",
    icon: "/infosys.png",
  },
];

const Hero = () => {
  const tickerRef1 = useRef<HTMLDivElement>(null);
  const tickerRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker1 = tickerRef1.current;
    const ticker2 = tickerRef2.current;
    let animationId: number;

    const step = () => {
      if (ticker1) {
        ticker1.scrollLeft += 1;
        if (ticker1.scrollLeft >= ticker1.scrollWidth / 2) {
          ticker1.scrollLeft = 0;
        }
      }

      if (ticker2) {
        ticker2.scrollLeft -= 1;
        if (ticker2.scrollLeft <= 0) {
          ticker2.scrollLeft = ticker2.scrollWidth / 2;
        }
      }

      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#0a0f0d] text-white flex flex-col justify-center mt-12 items-center px-6 overflow-hidden">
      <div className="w-full bg-[#0a0f0d] relative overflow-hidden z-0">
        {/* Grid glow background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="bg-grid-glow w-full h-full" />
        </div>

        {/* 👇 What We Do heading inside the glowing section */}
        <div className="relative z-10 text-center mb-20">
          <h2 className="text-5xl md:text-7xl mt-10 underline font-bold flex items-center justify-center gap-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-green-400 bg-opacity-50">
            What We Do <ArrowDownRight className="w-6 h-6 text-green-400" />
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto h-full relative">
          {/* Left Section */}
          <div className="text-center md:text-left mb-10 md:mb-0 md:w-1/2 space-y-4 z-10">
            <h1 className="text-5xl md:text-6xl font-bold">
              We Provide <br />
              <span className="text-[#00ffaa]">
                Trades for{" "}
                <span className="inline-block">
                  <RotatingText
                    texts={["Forex", "Crypto", "Nifty", "Commodities"]}
                    mainClassName="text-white"
                    elementLevelClassName="text-[#00ffaa] font-semibold text-5xl md:text-6xl"
                    staggerDuration={0.05}
                    auto
                    loop
                  />
                </span>
              </span>
            </h1>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 space-y-4 text-sm md:text-base max-w-md z-10">
            <button className="bg-gray-800 text-xs px-3 py-1 rounded-full mb-2">
              What is FXology?
            </button>
            <h2 className="text-2xl font-semibold">
              Trade on Forex and other markets with capital up to 640,000 USD!
            </h2>
            <p className="text-gray-400">
              We provide unique trading programs for Forex traders, based upon
              which we search for the best options to work together with. We
              provide you with training accounts that you can use to trade and
              earn commission without the risk of losing your own funds!
            </p>
            <p className="text-gray-400">
              You are presented with a choice of the widest variety of training
              programs on the market – it is up to you to choose based on your
              experience and preference. Whether you are a rookie, advanced or
              experienced trader, we are certain that you will find the most
              perfectly suited program.
            </p>
          </div>
        </div>
      </div>

      {/* Ticker 1 */}
      <div className="relative w-full overflow-hidden pb-7 mt-20">
        <div
          ref={tickerRef1}
          className="flex overflow-x-scroll no-scrollbar whitespace-nowrap"
        >
          {[...tickers, ...tickers].map((ticker, i) => (
            <span
              key={i}
              className={`inline-flex items-center gap-2 px-4 py-1 mr-6 rounded-full text-sm font-medium min-w-max ${
                ticker.change.includes("+")
                  ? "bg-green-900 text-green-400"
                  : "bg-red-900 text-red-400"
              }`}
            >
              <Image
                src={ticker.icon}
                alt={ticker.name}
                width={20}
                height={20}
                className="rounded-full"
              />
              {ticker.name}: {ticker.price} ({ticker.change})
            </span>
          ))}
        </div>
      </div>

      {/* Ticker 2 (opposite direction) */}
      <div className="relative w-full overflow-hidden mb-10">
        <div
          ref={tickerRef2}
          className="flex overflow-x-scroll no-scrollbar whitespace-nowrap"
        >
          {[...tickers, ...tickers].map((ticker, i) => (
            <span
              key={i}
              className={`inline-flex items-center gap-2 px-4 py-1 mr-6 rounded-full text-sm font-medium min-w-max ${
                ticker.change.includes("+")
                  ? "bg-green-900 text-green-400"
                  : "bg-red-900 text-red-400"
              }`}
            >
              <Image
                src={ticker.icon}
                alt={ticker.name}
                width={20}
                height={20}
                className="rounded-full"
              />
              {ticker.name}: {ticker.price} ({ticker.change})
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
