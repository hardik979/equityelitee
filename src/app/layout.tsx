"use client";
import Navbar from "@/components/ui/Navbar";
import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${raleway.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
