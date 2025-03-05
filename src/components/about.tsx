"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-4 md:px-8 bg-muted/30 rounded-3xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-12 items-center"
        >
          <motion.div
            className="space-y-6 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
            hey, Jordyn here!
            </h2>
            <p className="text-xl text-muted-foreground">
            My curiosity for computers began at age 13, fueled by countless hours playing Counter-Strike and Warcraft, which naturally led me to pursue a career in tech. I&apos;ve been working as a software engineer, specializing in blockchain development and design, for over 3 years!
            </p>
            <p className="text-xl text-muted-foreground">
            Alongside my Web3 journey, I run a marketing agency built on the philosophy of Creative Strategies, Powerful Connections. We collaborate with local brands to craft compelling digital narratives. When I&apos;m not at my desk, you can find me outdoors soaking in nature&apos;s energy.
            </p>
            <p className="text-xl text-muted-foreground">
            Health, Family & Friends. And above all -  Purpose…
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full aspect-video"
          >
            <Image
              src="http://arweave.net/IWJ-7Bo3fqlRwPjke2JxcoU2ToExnqY9D1O2x6C1b-s"
              alt="About Image"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}