/* eslint-disable */

"use client";
import React, { useEffect, useRef } from "react";
import {
  createChart,
  CrosshairMode,
  CandlestickData,
} from "lightweight-charts";
import { ArrowDownRight } from "lucide-react";

const data: CandlestickData[] = [
  {
    time: "2025-05-02",
    open: 24311.9,
    high: 24589.15,
    low: 24238.5,
    close: 24346.7,
  },
  {
    time: "2025-05-05",
    open: 24419.5,
    high: 24526.4,
    low: 24400.65,
    close: 24461.15,
  },
  {
    time: "2025-05-06",
    open: 24500.75,
    high: 24509.65,
    low: 24331.8,
    close: 24379.6,
  },
  {
    time: "2025-05-07",
    open: 24233.3,
    high: 24449.6,
    low: 24220.0,
    close: 24414.4,
  },
  {
    time: "2025-05-08",
    open: 24431.5,
    high: 24447.25,
    low: 24150.2,
    close: 24273.8,
  },
  {
    time: "2025-05-09",
    open: 23935.75,
    high: 24164.25,
    low: 23935.75,
    close: 24008.0,
  },
  {
    time: "2025-05-12",
    open: 24420.1,
    high: 24944.8,
    low: 24378.85,
    close: 24924.7,
  },
  {
    time: "2025-05-13",
    open: 24864.05,
    high: 24973.8,
    low: 24547.5,
    close: 24578.35,
  },
  {
    time: "2025-05-14",
    open: 24613.8,
    high: 24767.55,
    low: 24535.55,
    close: 24666.9,
  },
  {
    time: "2025-05-15",
    open: 24694.45,
    high: 25116.25,
    low: 24494.45,
    close: 25062.1,
  },
  {
    time: "2025-05-16",
    open: 25064.65,
    high: 25070.0,
    low: 24953.05,
    close: 25019.8,
  },
  {
    time: "2025-05-19",
    open: 25005.35,
    high: 25062.95,
    low: 24916.65,
    close: 24945.45,
  },
  {
    time: "2025-05-20",
    open: 24996.2,
    high: 25010.35,
    low: 24669.7,
    close: 24683.9,
  },
  {
    time: "2025-05-21",
    open: 24744.25,
    high: 24946.2,
    low: 24685.35,
    close: 24813.45,
  },
  {
    time: "2025-05-22",
    open: 24733.95,
    high: 24737.5,
    low: 24462.4,
    close: 24609.7,
  },
  {
    time: "2025-05-23",
    open: 24639.5,
    high: 24909.05,
    low: 24614.05,
    close: 24853.15,
  },
  {
    time: "2025-05-26",
    open: 24919.35,
    high: 25079.2,
    low: 24900.5,
    close: 25001.15,
  },
  {
    time: "2025-05-27",
    open: 24956.65,
    high: 25062.9,
    low: 24704.1,
    close: 24826.2,
  },
  {
    time: "2025-05-28",
    open: 24832.5,
    high: 24864.25,
    low: 24737.05,
    close: 24752.45,
  },
  {
    time: "2025-05-29",
    open: 24825.1,
    high: 24892.6,
    low: 24677.3,
    close: 24833.6,
  },
  {
    time: "2025-05-30",
    open: 24812.6,
    high: 24863.95,
    low: 24717.4,
    close: 24750.7,
  },
];
const NiftyChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = createChart(chartRef.current, {
      width: chartRef.current.clientWidth,
      height: 500,
      layout: {
        background: { color: "#0a0f0d" }, // Dark charcoal background
        textColor: "#d1d5db", // Soft gray text
      },
      grid: {
        vertLines: { color: "#1f2a2e" }, // Subtle grid
        horzLines: { color: "#1f2a2e" },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#00e676", // Soft green (Tailwind’s green-400)
      downColor: "#ff5252", // Soft red (Tailwind’s red-400)
      borderVisible: false,
      wickUpColor: "#4ade80",
      wickDownColor: "#f87171",
    });

    candlestickSeries.setData(data);
    chart.timeScale().fitContent();

    const handleResize = () => {
      chart.applyOptions({ width: chartRef.current!.clientWidth });
      chart.timeScale().fitContent();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#0a0f0d",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2
        className="text-4xl font-bold gap-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-green-400  bg-opacity-50"
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        Accurate NIFTY Predictions of Last Month{" "}
        <ArrowDownRight className="w-10 h-10 text-green-400 inline-block" />
      </h2>
      <div ref={chartRef} style={{ width: "100%" }} />
    </div>
  );
};

export default NiftyChart;
