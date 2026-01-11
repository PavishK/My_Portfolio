"use client";

import React, { useRef } from "react";
import { DownloadCloud } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { cardsData } from "../data/about";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

export default function About() {
  const onClickResumeDownload = () => {
    toast.success("Resume downloaded — thank you for your interest!");
    const link = document.createElement("a");
    link.href = "/resume/PavishK_resume.pdf";
    link.download = "PavishK_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full py-12 bg-homeBg flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-accent">
      About <span className="text-primary">Me</span>
      </h2>
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
              <button
                className="cursor-pointer inline-flex font-medium items-center text-accent hover:text-red-600 gap-2"
                onClick={onClickResumeDownload}
              >
                <DownloadCloud className="w-4 h-4" /> Download
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}