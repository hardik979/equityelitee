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
        <a
          href="https://wa.me/+919685906784" // Replace with your number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-colors duration-300"
        >
          <img src="/whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
        </a>

        {children}
      </body>
    </html>
  );
}
