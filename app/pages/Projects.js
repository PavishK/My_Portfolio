"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../data/projects.json";
import Image from "next/image";
import { Github, ExternalLink, XIcon, Globe, Smartphone, FileDown, PointerIcon  } from "lucide-react";
import RevealText from "@/animations/RevealText";
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="w-full py-12 bg-homeBg flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-10">
        <RevealText
          text="Projects"
          direction="right"
          bgColor="bg-accent"
          textColor="text-accent"
        />
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-bg border border-gray-200 rounded-lg shadow-sm cursor-pointer overflow-hidden group"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover="hover"
            onClick={() => setSelectedProject(project)}
          >
            {/* Project Image */}
            <div className="relative w-full h-48">
              <Image
                src={project.imageSrc}
                alt={project.title}
                fill
                className="object-cover"
              />
              {/* Catagory */}
              <div className="absolute left-2 top-2 flex items-center gap-x-2 
                              bg-[var(--color-accent)] text-[var(--color-bg)] 
                              px-3 py-1 rounded-full shadow-md">
                {project.category === "web" ? (
                  <>
                    <Globe size={16} />
                    <span className="text-sm font-semibold">Web App</span>
                  </>
                ) : (
                  <>
                    <Smartphone size={16} />
                    <span className="text-sm font-semibold">Mobile App</span>
                  </>
                )}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 pointer-events-none">
                <span className="text-white text-lg font-semibold">
                  Click to see more
                </span>
              </div>

              <div className="sm:hidden absolute right-2 top-2 flex items-center gap-x-2 
                              bg-bg text-accent 
                              p-1 rounded-full shadow-md">
                  <PointerIcon size={21}/>
              </div>

            </div>

            {/* Card content */}
            <div className="px-6 py-4 flex flex-col gap-3">
              <h3 className="font-bold text-xl text-primary">
                {project.title}
              </h3>
              <div className="flex gap-3">
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-accent hover:text-primary font-medium"
                  >
                    <Github className="w-5 h-5" /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-accent hover:text-primary font-medium"
                  >
                    <ExternalLink className="w-5 h-5" /> Live
                  </a>
                )}
                {project.apk && (
                  <a
                    href={project.apk}
                    download={`${project.title}.apk`}
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-accent hover:text-primary font-medium"
                  >
                    <FileDown className="w-5 h-5" /> Install
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal / Popup */}
      <AnimatePresence>

      {selectedProject && (
        <div className="fixed z-[999] inset-0 bg-black/50 flex items-center justify-center p-4">
          <motion.div
            className="bg-[var(--color-bg)] rounded-lg max-w-3xl w-full p-6 overflow-y-auto max-h-[90vh]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-primary">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-accent hover:text-primary font-bold text-xl cursor-pointer"
              >
                <XIcon/>
              </button>
            </div>

            <div className="relative w-full h-64 mb-4">
              <Image
              priority
                src={selectedProject.imageSrc}
                alt={selectedProject.title}
                fill
                className="object-cover rounded"
              />
            </div>

            <p className="text-primary mb-4">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {selectedProject.skills.map((skill, i) => (
                <span
                  key={i}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      )}
      </AnimatePresence>
    </div>
  );
}