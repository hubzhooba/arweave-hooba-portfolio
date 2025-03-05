"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

// Work projects list
const workProjects = [
  {
    title: "Tenup.io",
    period: "2025 - Present",
    image: "http://arweave.net/udzRhbzUUAp9afZ1dRAqdCDLOQNOzYK63rtTzyv-APw",
    description: "Senior Technical Support Lead (Part-time)",
    link: "https://x.com/TenupNation",
  },
  {
    title: "Aquagen Technologies Inc.",
    period: "Jun 2024 - Aug 2024",
    image: "http://arweave.net/beBGV4Xjf5opo5GBVcivwIcllnV6itnudhjWP_hhxTg",
    description: "Computer Science Specialist",
    link: "https://aquagen.com.ph/",
  },
  {
    title: "Jpg.Store",
    period: "Sept 2022 - Sept 2024",
    image: "http://arweave.net/4UxzCdv_oRmg8Pb37xo-iabtjzFrlqtjhQYUf3Itg0Q",
    description:
      "Information Technical Support & Quality Assurance Engineer (Full-time)",
    link: "https://x.com/jpgstoreNFT",
  },
];

// Personal projects list
const personalProjects = [
  {
    title: "Club Creative",
    period: "-",
    image: "http://arweave.net/xvFqc4RogNADej4eCTxcPwq6s2JjfJJo34-dSyd0cEQ",
    description:
      "Co-founded an Independent Social Media Marketing Agency in 2024.",
    link: "https://clubcreative.ph/",
  },
  {
    title: "Creative Coding",
    period: "-",
    image: "http://arweave.net/rHSfSAHzmuY3hFxJ6czYeSoh7HQ1r_RjdunrebHyt6c",
    description: "In my free time, I like to code.",
    link: "/art",
  },
];

export function Work() {
  return (
    <>
      {/* Work Experience Section */}
      <motion.section
        id="work"
        className="py-16 px-6 sm:px-10 md:px-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl uppercase tracking-wide text-gray-500 mb-8"
        >
          Experience
        </motion.h2>

        <div className="w-full flex flex-col gap-6 sm:gap-8">
          {workProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Card className="relative w-full flex flex-col sm:flex-row rounded-xl shadow-lg border border-gray-200">
                {/* Left Image */}
                <div className="flex items-center justify-center w-full sm:w-[100px] h-[100px] sm:h-auto overflow-hidden rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Right Text Column */}
                <div className="flex-1 p-4 flex flex-col justify-center text-center sm:text-left">
                  <CardHeader className="p-0">
                    <CardTitle className="text-lg sm:text-xl font-semibold">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardDescription className="text-sm sm:text-base mt-1">
                    {project.description}
                  </CardDescription>

                  {/* Period at top-right for larger screens */}
                  <CardDescription className="sm:absolute sm:top-2 sm:right-4 text-xs sm:text-sm">
                    {project.period}
                  </CardDescription>
                </div>
              </Card>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Personal Projects Section */}
      <motion.section
        id="personal-projects"
        className="py-16 px-6 sm:px-10 md:px-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl uppercase tracking-wide text-gray-500 mb-8"
        >
          Personal Projects
        </motion.h2>

        <div className="w-full flex flex-col gap-6 sm:gap-8">
          {personalProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Card className="relative w-full flex flex-col sm:flex-row rounded-xl shadow-lg border border-gray-200">
                {/* Left Image */}
                <div className="flex items-center justify-center w-full sm:w-[100px] h-[100px] sm:h-auto overflow-hidden rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Right Text Column */}
                <div className="flex-1 p-4 flex flex-col justify-center text-center sm:text-left">
                  <CardHeader className="p-0">
                    <CardTitle className="text-lg sm:text-xl font-semibold">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardDescription className="text-sm sm:text-base mt-1">
                    {project.description}
                  </CardDescription>

                  {/* Period at top-right for larger screens */}
                  <CardDescription className="sm:absolute sm:top-2 sm:right-4 text-xs sm:text-sm">
                    {project.period}
                  </CardDescription>
                </div>
              </Card>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </>
  );
}
