"use client";

import { FaXTwitter, FaLinkedin, FaPaperclip } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import { handleEmailClick } from "@/lib/utils";

export function Footer() {
  return (
    <motion.footer
      className="py-16 px-6 sm:px-10 md:px-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center space-y-6 sm:space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">
            Let&apos;s create something amazing
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you&apos;re interested in learning about Blockchain, need help with IT Solutions, or want to collaborate on cool projects, I&apos;d love to connect.
          </p>

          <motion.div
            className="flex justify-center gap-6 sm:gap-8 pt-6 sm:pt-8"
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
              <FaXTwitter size={20} className="sm:size-24" />
            </a>
            <a
              href="https://www.linkedin.com/in/jordynwhay/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              <FaLinkedin size={20} className="sm:size-24" />
            </a>
            <a
              onClick={handleEmailClick}
              className="hover:opacity-70 cursor-pointer"
            >
              <SiGmail size={20} className="sm:size-24" />
            </a>
            <a 
              href="https://arweave.net/LCEuPlNUr2iX1NWp2HTIw9F9RssdHtQxAaWSJOa22uU"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              <FaPaperclip size={20} className="sm:size-24" />
            </a>
          </motion.div>

          <motion.div
            className="pt-12 text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>&copy; {new Date().getFullYear()} Jordyn. All rights reserved.</p>
            <p className="mt-2 text-center">
              This website is <strong>fully deployed on the blockchain</strong>, with all
              assets permanently stored on <strong>decentralized cloud storage</strong>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
