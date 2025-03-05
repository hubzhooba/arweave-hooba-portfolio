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

// Separate arrays for Work projects and Personal projects
const workProjects = [
  {
    title: "Tenup.io",
    period: "2025 - Present",
    image: "http://arweave.net/udzRhbzUUAp9afZ1dRAqdCDLOQNOzYK63rtTzyv-APw",
    description: "Senior Technical Support Lead (Part-time)",
    link: "http://x.com/TenupNation",
  },
  {
    title: "Aquagen Technologies Inc.",
    period: "Jun 2024 - Aug 2024",
    image: "http://arweave.net/beBGV4Xjf5opo5GBVcivwIcllnV6itnudhjWP_hhxTg",
    description: "Computer Science Specialist",
    link: "http://aquagen.com.ph/",
  },
  {
    title: "Jpg.Store",
    period: "Sept 2022 - Sept 2024",
    image: "http://arweave.net/4UxzCdv_oRmg8Pb37xo-iabtjzFrlqtjhQYUf3Itg0Q",
    description:
      "Information Technical Support & Quality Assurance Engineer (Full-time)",
    link: "http://x.com/jpgstoreNFT",
  },
];

const personalProjects = [
  {
    title: "Club Creative",
    period: "",
    image: "http://arweave.net/xvFqc4RogNADej4eCTxcPwq6s2JjfJJo34-dSyd0cEQ",
    description:
      "Co-founded an independent social media marketing agency in 2024.",
    link: "http://clubcreative.ph/",
    external: true, // Mark as external link
  },
];

export default personalProjects;

export function Work() {
  return (
    <>
      {/* Work (Experience) Section */}
      <motion.section
        id="work"
        className="py-20 px-4 md:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Updated heading styling */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-lg uppercase tracking-wide text-gray-500 mb-8"
        >
          Experience
        </motion.h2>

        <div className="w-full flex flex-col gap-8">
          {workProjects.map((project, index) => {
            const cardContent = (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Card
                  // Only change: let card auto-expand on mobile
                  className="relative w-full md:h-[120px] h-auto flex rounded-xl text-card-foreground shadow border-0
                             group-hover:shadow-none transition-shadow duration-300"
                >
                  {/* Left Image Column (80x80) */}
                  <div className="flex items-center justify-center w-[80px] h-[80px] ml-4 my-auto overflow-hidden rounded-l-xl">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  </div>

                  {/* Right Text Column */}
                  {/* Only change: use `justify-start` so the date won't overlap */}
                  <div className="flex-1 h-full p-4 flex flex-col justify-start">
                    <CardHeader className="p-0">
                      <CardTitle className="text-2xl font-semibold">
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    {/* Absolutely position the period at the top-right for desktop */}
                    <CardDescription className="absolute top-2 right-4 text-sm hidden md:block">
                      {project.period}
                    </CardDescription>

                    {/* Show date in normal flow on mobile to avoid overlap */}
                    <CardDescription className="text-sm md:hidden">
                      {project.period}
                    </CardDescription>

                    <CardContent className="p-0 mt-2">
                      <CardDescription className="text-sm">
                        {project.description}
                      </CardDescription>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            );

            return project.link ? (
              <a
                href={project.link}
                key={project.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cardContent}
              </a>
            ) : (
              cardContent
            );
          })}
        </div>
      </motion.section>

      {/* Personal Projects Section */}
      <motion.section
        id="personal-projects"
        className="py-20 px-4 md:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Updated heading styling */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-lg uppercase tracking-wide text-gray-500 mb-8"
        >
          Personal Projects
        </motion.h2>

        <div className="w-full flex flex-col gap-8">
          {personalProjects.map((project, index) => {
            const cardContent = (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Card
                  // Same small fix for auto-height on mobile
                  className="relative w-full md:h-[120px] h-auto flex rounded-xl text-card-foreground shadow border-0
                             group-hover:shadow-none transition-shadow duration-300"
                >
                  {/* Left Image Column (80x80) */}
                  <div className="flex items-center justify-center w-[80px] h-[80px] ml-4 my-auto overflow-hidden rounded-l-xl">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  </div>

                  {/* Right Text Column */}
                  <div className="flex-1 h-full p-4 flex flex-col justify-start">
                    <CardHeader className="p-0">
                      <CardTitle className="text-2xl font-semibold">
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    {/* Absolutely position the period at the top-right for desktop */}
                    <CardDescription className="absolute top-2 right-4 text-sm hidden md:block">
                      {project.period}
                    </CardDescription>

                    {/* Show date in normal flow on mobile */}
                    <CardDescription className="text-sm md:hidden">
                      {project.period}
                    </CardDescription>

                    <CardContent className="p-0 mt-2">
                      <CardDescription className="text-sm">
                        {project.description}
                      </CardDescription>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            );

            return project.link ? (
              <a
                href={project.link}
                key={project.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cardContent}
              </a>
            ) : (
              cardContent
            );
          })}
        </div>
      </motion.section>
    </>
  );
}
