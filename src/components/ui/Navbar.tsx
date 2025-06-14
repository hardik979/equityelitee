import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden"; // Lock scroll
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-[900] w-[90%] max-w-6xl rounded-full px-6 py-3 bg-black/30 backdrop-blur-md border border-white/10 shadow-lg flex items-center justify-between overflow-x-hidden">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <img
            src="/logoo.png"
            alt="Equity Elite Logo"
            className="h-12 w-20 rounded-full object-cover shadow-md"
          />
          <span className="text-xl font-semibold text-green-100">
            Equity Elite
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-green-200 text-sm font-medium">
          <Link href="/pricing" className="hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About us
          </Link>
          <Link href="/policy" className="hover:text-white transition-colors">
            Policy
          </Link>
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden z-[1001]">
          <Menu
            className="w-6 h-6 text-green-100 cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </header>

      {/* Slide-in Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 z-[1000] w-[75%] max-w-sm h-full bg-black/90 backdrop-blur-lg border-r border-white/10 shadow-2xl p-6 flex flex-col gap-6"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-semibold text-green-100">Menu</span>
              <X
                className="w-6 h-6 text-green-100 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <Link
              href="/"
              className="text-green-200 text-lg hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="text-green-200 text-lg hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-green-200 text-lg hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/policy"
              className="text-green-200 text-lg hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Policy
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
