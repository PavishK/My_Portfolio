"use client";

import React from "react";
import { motion } from "framer-motion";
import skillsData from "../data/skills.json"; // adjust path
import Image from "next/image";
import RevealText from "@/animations/RevealText";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

export default function Skills() {
  return (
    <div className="w-full py-12 bg-homeBg flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-10">
        <RevealText
          text="Skills"
          direction="right"
          bgColor="bg-accent"
          textColor="text-accent"
        />
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-6">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="p-6 bg-bg border border-gray-200 rounded-lg shadow-sm flex flex-col items-start cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover="hover"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 relative">
                <Image
                  src={skill.imageSrc}
                  alt={skill.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-primary font-semibold text-lg">
                {skill.title}
              </span>
              <span className="ml-auto text-primary font-medium">
                {skill.level}%
              </span>
            </div>

            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}