"use client";

import React from "react";
import { Code, Server, Database, FileText, DownloadCloud } from "lucide-react"; // Added DownloadCloud icon
import { motion } from "framer-motion";

const cardsData = [
   {
    title: "Frontend Developer",
    description:
      "I'm a frontend developer with experience in creating responsive and performance-optimized websites.",
    icon: <Code className="w-8 h-8 text-primary mb-3" />,
  },
  {
    title: "Backend Developer",
    description:
      "I build fast, efficient backend systems and APIs designed for performance and scalability.",
    icon: <Server className="w-8 h-8 text-primary mb-3" />,
  },
  {
    title: "Database Management",
    description:
      "I design and manage relational and non-relational databases efficiently.",
    icon: <Database className="w-8 h-8 text-primary mb-3" />,
  },
  {
    title: "Download My Resume",
    description: "Get a copy of my latest resume in PDF format.",
    icon: <FileText className="w-7 h-7 text-primary mb-3" />,
    link: "/resume.pdf",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

export default function About() {
  return (
    <div className="w-full py-12 bg-homeBg flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-primary">About Me</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl w-full px-6">
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            className="p-6 bg-bg border border-gray-200 rounded-lg shadow-sm flex flex-col items-start cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover="hover"
          >
            {card.icon}
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-primary">
              {card.title}
            </h5>
            <p className="mb-3 font-normal text-primary">{card.description}</p>
            {card.link && (
              <a
                href={card.link}
                download
                className="inline-flex font-medium items-center text-accent hover:text-primary gap-2"
              >
                <DownloadCloud className="w-4 h-4" /> Download
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}