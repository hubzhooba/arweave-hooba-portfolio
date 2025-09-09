"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { OptimizedImage } from "./OptimizedImage";
import { motion } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 transition-all duration-300 ${scrolled ? "glass backdrop-blur-lg shadow-lg" : ""}`}>
        <div className="w-full md:max-w-[1170px] md:mx-auto flex items-center justify-between">
          <Link href="/">
            <motion.div
              className="relative w-[120px] h-[40px] -ml-8"
              initial={{ scale: 3 }}
              whileHover={{ scale: 3.5, rotate: 360 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <OptimizedImage
                src="https://defi.ao/UeQDA8KLM_1HhvSuKkFdp636tBXi2rYLhxpg5fZfFIc"
                alt="hooba Logo"
                fill
                className="object-contain"
                priority
                sizes="120px"
              />
            </motion.div>
          </Link>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="/#about" className="hover:opacity-70">
                About
              </Link>
            </li>
            <li>
              <Link href="/#work" className="hover:opacity-70">
                Work
              </Link>
            </li>
            <li>
              <Link href="/art" className="hover:opacity-70">
                Art
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:opacity-70">
                Contact
              </Link>
            </li>
          </ul>
          <motion.div
            className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 z-50"
            style={{ width: `${scrollProgress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          />

          <button
            className="md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="p-4 flex justify-end">
            <button onClick={() => setIsOpen(false)} aria-label="Close menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-12 text-2xl">
            <Link
              href="/#about"
              onClick={() => setIsOpen(false)}
              className="hover:opacity-70"
            >
              About
            </Link>
            <Link
              href="/#work"
              onClick={() => setIsOpen(false)}
              className="hover:opacity-70"
            >
              Work
            </Link>
            <Link
              href="/art"
              onClick={() => setIsOpen(false)}
              className="hover:opacity-70"
            >
              Art
            </Link>
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="hover:opacity-70"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}