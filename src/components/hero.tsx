"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, MapPin, Check } from "lucide-react";

export function Hero() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("jordynhay05@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[60vh] px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-6 max-w-5xl mx-auto"
    >
      {/* Left Side - Text */}
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
          className="text-lg uppercase tracking-wide text-gray-500"
        >
          HOOBA
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold tracking-tight"
        >
          Building · Cool · Sh*t
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
          {/* Email Copy Functionality */}
          <button
            onClick={handleEmailCopy}
            className="hover:opacity-70 flex items-center gap-2"
          >
            <Mail size={20} />
            <span>{emailCopied ? "Email Copied!" : "Email"}</span>
            {emailCopied && <Check size={16} className="text-green-500" />}
          </button>

          {/* Location */}
          <div className="flex items-center gap-2">
            <MapPin size={20} />
            <span>Philippines</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Side - Profile Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative w-56 md:w-72 aspect-square rounded-full overflow-hidden border-4 border-gray-300 shadow-lg"
      >
        <Image
          src="http://arweave.net/Pl_SeL00Zs0WBVqCtjOiMjaLMqb1g8f-XckEalFp2g4"
          alt="Profile Image"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
    </motion.div>
  );
}
