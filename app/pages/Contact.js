"use client";

import React from "react";
import { motion } from "framer-motion";
import { cards } from "../data/contact";

export default function Contact() {
  return (
    <div className="relative w-full py-12 bg-bg flex flex-col items-center text-primary px-6">

      <h2 className="text-4xl text-accent md:text-5xl font-bold mb-6">
        Get <span className="text-primary">in</span> Touch
     </h2>
      <p className="mb-10 text-gray-700 text-center max-w-2xl">
        Feel free to reach out via GitHub, LinkedIn, Gmail, or phone. I’m always open to
        collaboration and new opportunities.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {cards.map((item, index) => (
          <motion.div
            key={index}
            className="bg-homeBg p-6 rounded-lg shadow-lg group flex flex-col items-start gap-2 group hover:bg-accent transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, damping: 400}}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 120, damping: 10, delay: index * 0.1 }}
          >
            <h3 className="font-bold text-lg text-primary group-hover:text-white transition-colors">
              {item.title}
            </h3>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent group-hover:text-white hover:underline transition-colors"
            >
              {item.icon} {item.text}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
