"use client";
import CardDetail from "@/components/sections/CardDetails";
import CandlestickChart from "@/components/sections/Chart";
import WhyUs from "@/components/sections/WhyUs";
import { CompareDemo } from "@/components/ui/CompareDemo";
import Footer from "@/components/ui/Footer";

import Hero from "@/components/ui/NewHero";
import { PopupForm } from "@/components/ui/popupForm";
import { SpotlightNewDemo } from "@/components/ui/SpotlightUse";

const page = () => {
  return (
    <>
      <PopupForm />
      <div className="min-h-screen [font-family:var(--font-raleway)] bg-[#0a0f0d]">
        <SpotlightNewDemo />
        <WhyUs />
        <Hero />

        <CardDetail />
        <CandlestickChart />
        <CompareDemo />
        <Footer />
      </div>
    </>
  );
};

export default page;
