"use client";

import {
  BarChart3,
  LineChart,
  Wallet,
  ShieldCheck,
  TrendingUp,
  ArrowBigRight,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import CountUp from "./CountUp"; // Adjust path as needed

export function GlowingEffectDemo() {
  return (
    <section className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-center font-sans text-3xl font-semibold text-emerald-400 dark:text-emerald-300">
        {"Here's Why"} <ArrowBigRight className="inline-block" />
      </h2>

      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        <GridItem
          stat="98%"
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={
            <LineChart className="h-4 w-4 text-emerald-400 dark:text-emerald-300" />
          }
          title="Real-time Market Trends"
          description="Live chart updates and actionable analytics at your fingertips."
        />

        <GridItem
          stat="1,000+"
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={
            <Wallet className="h-4 w-4 text-emerald-400 dark:text-emerald-300" />
          }
          title="Portfolio Management"
          description="Monitor asset performance and optimize your investments."
        />

        <GridItem
          stat="100% Secure"
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={
            <ShieldCheck className="h-4 w-4 text-emerald-400 dark:text-emerald-300" />
          }
          title="Secure Transactions"
          description="End-to-end encrypted trades with military-grade security."
        />

        <GridItem
          stat="50+ Tools"
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={
            <BarChart3 className="h-4 w-4 text-emerald-400 dark:text-emerald-300" />
          }
          title="Advanced Charting Tools"
          description="Overlay indicators, candle patterns, and drawing tools."
        />

        <GridItem
          stat="24/7 AI Signals"
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={
            <TrendingUp className="h-4 w-4 text-emerald-400 dark:text-emerald-300" />
          }
          title="AI-Powered Signals"
          description="Get buy/sell suggestions based on smart technical models."
        />
      </ul>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  stat: string; // For the number/statistics text
}

const GridItem = ({ area, icon, title, description, stat }: GridItemProps) => {
  // We try to parse number from stat for CountUp animation if possible
  // If stat includes non-numeric chars (%, +, etc) we animate only the numeric part.
  const numericPart = parseFloat(stat.replace(/[^\d.]/g, "")); // extract numeric value
  const hasNumber = !isNaN(numericPart);

  // Determine suffix (like %, +, or " AI Signals" text)
  const suffix = stat.replace(/[\d.,]+/g, "").trim();

  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-emerald-950 p-2 md:rounded-3xl md:p-3 bg-black/10 backdrop-blur-sm dark:bg-neutral-900/70">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75  relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#0f5132]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            {/* Stat + Icon Container */}
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold  text-emerald-400 dark:text-emerald-300">
                {hasNumber ? (
                  <>
                    <CountUp to={numericPart} duration={1.5} />{" "}
                    <span className="text-xl font-semibold">{suffix}</span>
                  </>
                ) : (
                  <span>{stat}</span>
                )}
              </div>
              <div className="w-fit rounded-lg border border-emerald-700 bg-emerald-950/30 p-2">
                {icon}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-emerald-100 md:text-2xl/[1.875rem] dark:text-emerald-300">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-emerald-300 md:text-base/[1.375rem] dark:text-neutral-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
