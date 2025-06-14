import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0f0d] border-t border-green-800 py-6 mt-12 text-center text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          &copy; {new Date().getFullYear()} EquityElite. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href="#"
            className="hover:text-green-400 transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="/policy"
            className="hover:text-green-400 transition-colors duration-300"
          >
            Terms of Service
          </Link>
          <Link
            href="/about"
            className="hover:text-green-400 transition-colors duration-300"
          >
            About us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
