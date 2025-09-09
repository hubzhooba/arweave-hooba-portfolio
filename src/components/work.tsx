"use client";
import React from "react";
import { OptimizedImage } from "./OptimizedImage";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const workProjects = [
  {
    title: "Autonomous Finance",
    period: "March 2025 - Present",
    image: "https://defi.ao/cOV90GN1NnxllAdKN951gY0oFOmdMbpSCRhlY_oESoA",
    description: "Technical Product Manager",
    link: "https://www.autonomous.finance/",
  },
  {
    title: "Tenup.io",
    period: "2025 - July 2025",
    image: "https://defi.ao/udzRhbzUUAp9afZ1dRAqdCDLOQNOzYK63rtTzyv-APw",
    description: "Technical Support Lead (Part-time)",
    link: "https://x.com/TenupNation",
  },
  {
    title: "Jpg.Store",
    period: "Sept 2022 - Sept 2024",
    image: "https://defi.ao/4UxzCdv_oRmg8Pb37xo-iabtjzFrlqtjhQYUf3Itg0Q",
    description:
      "Information Technical Support & Quality Assurance Engineer (Full-time)",
    link: "https://x.com/jpgstoreNFT",
  },
];

const personalProjects = [
  {
    title: "Club Creative",
    period: "",
    image: "https://defi.ao/xvFqc4RogNADej4eCTxcPwq6s2JjfJJo34-dSyd0cEQ",
    description:
      "Co-founded an independent social media marketing agency in 2024",
    link: "https://clubcreative.ph/",
    external: true,
  },
];

export default personalProjects;

export const Work = React.memo(function Work() {
  return (
    <>
      <motion.section
        id="work"
        className="py-20 px-4 md:px-8"
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
          className="text-lg uppercase tracking-wide gradient-text font-bold mb-8"
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
                className="group cursor-pointer transform-gpu"
              >
                <Card
                  className="relative w-full md:h-[120px] h-auto flex rounded-xl text-card-foreground glass border-0
                             hover-card group-hover:neon-purple transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-[80px] h-[80px] ml-4 my-auto overflow-hidden rounded-l-xl">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                      className="relative w-full h-full"
                    >
                      <OptimizedImage
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain"
                        loading="lazy"
                        sizes="80px"
                      />
                    </motion.div>
                  </div>
                  <div className="flex-1 h-full p-4 flex flex-col justify-start">
                    <CardHeader className="p-0">
                      <CardTitle className="text-2xl font-semibold">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardDescription className="absolute top-2 right-4 text-sm hidden md:block">
                      {project.period}
                    </CardDescription>
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
      <motion.section
        id="personal-projects"
        className="py-20 px-4 md:px-8"
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
          className="text-lg uppercase tracking-wide gradient-text font-bold mb-8"
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
                className="group cursor-pointer transform-gpu"
              >
                <Card
                  className="relative w-full md:h-[120px] h-auto flex rounded-xl text-card-foreground glass border-0
                             hover-card group-hover:neon-purple transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-[80px] h-[80px] ml-4 my-auto overflow-hidden rounded-l-xl">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                      className="relative w-full h-full"
                    >
                      <OptimizedImage
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain"
                        loading="lazy"
                        sizes="80px"
                      />
                    </motion.div>
                  </div>
                  <div className="flex-1 h-full p-4 flex flex-col justify-start">
                    <CardHeader className="p-0">
                      <CardTitle className="text-2xl font-semibold">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardDescription className="absolute top-2 right-4 text-sm hidden md:block">
                      {project.period}
                    </CardDescription>
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
})
