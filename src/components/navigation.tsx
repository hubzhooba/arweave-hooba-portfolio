"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Keep your existing nav padding so the menu stays in place */}
      <nav className="py-4 px-4 md:px-8">
        <div className="w-full md:max-w-[1170px] md:mx-auto flex items-center justify-between">
          {/* Logo Section with negative left margin */}
          <Link href="/">
            <motion.div
              // -ml-4 moves the logo 16px further left than the container padding
              className="relative w-[120px] h-[40px] -ml-8"
              initial={{ scale: 3 }}
              whileHover={{ scale: 3.33 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="http://arweave.net/UeQDA8KLM_1HhvSuKkFdp636tBXi2rYLhxpg5fZfFIc"
                alt="hooba Logo"
                fill
                className="object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="p-4 flex justify-end">
            <button onClick={() => setIsOpen(false)} aria-label="Close menu">
              <X size={24} />
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
