"use client";

import { FaXTwitter, FaLinkedin, FaPaperclip } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import { handleEmailClick } from "@/lib/utils";

export function Footer() {
  return (
    <motion.footer
      className="py-20 px-4 md:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Let&apos;s create something amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you&apos;re interested in learning about Blockchain, need help with IT Solutions, or want to collaborate on cool projects, I&apos;d love to connect.
          </p>

          {/* Social media icons from Hero */}
          <motion.div
            className="flex justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="https://x.com/hoobatech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jordynwhay/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              onClick={handleEmailClick}
              className="hover:opacity-70 cursor-pointer"
            >
              <SiGmail size={24} />
            </a>
            {/* Resume link now opens in a new tab */}
            <a 
              href="https://arweave.net/LCEuPlNUr2iX1NWp2HTIw9F9RssdHtQxAaWSJOa22uU"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              <FaPaperclip size={24} />
            </a>
          </motion.div>

          <motion.div
            className="pt-16 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>&copy; {new Date().getFullYear()} Jordyn. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}