"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { OptimizedImage } from "./OptimizedImage";

export function Hero() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Building · Cool · Sh*t";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("jordynhay05@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[60vh] px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-6 max-w-5xl mx-auto relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="flex-1 space-y-6 text-center md:text-left"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg uppercase tracking-wide gradient-text font-bold"
        >
          HOOBA
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold tracking-tight h-[60px]"
        >
          <span className="gradient-text">{text}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block w-1 h-8 md:h-12 ml-1 bg-gradient-to-b from-purple-500 to-blue-500"
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-muted-foreground max-w-[600px] mx-auto md:mx-0 leading-relaxed"
        >
          Health, Family & Friends. And above all - Purpose…
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center md:justify-start gap-6 pt-4"
        >
          <button
            onClick={handleEmailCopy}
            className="hover:opacity-70 flex items-center gap-2 transition-all hover:scale-105 glass px-4 py-2 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
            <span>{emailCopied ? "Email Copied!" : "Email"}</span>
            {emailCopied && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M20 6 9 17l-5-5"/></svg>}
          </button>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 glass px-4 py-2 rounded-full cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>United States</span>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative w-56 md:w-72 aspect-square rounded-full overflow-hidden floating neon-purple"
      >
        <OptimizedImage
          src="https://defi.ao/Pl_SeL00Zs0WBVqCtjOiMjaLMqb1g8f-XckEalFp2g4"
          alt="Profile Image"
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="(max-width: 768px) 224px, 288px"
        />

      </motion.div>
    </motion.div>
  );
}