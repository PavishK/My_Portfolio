"use client";

import React from "react";
import { GithubIcon, LinkedinIcon, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "GitHub",
    href: "https://github.com/PavishK",
    icon: <GithubIcon className="w-5 h-5" />,
    text: "github.com/PavishK",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/PavishK",
    icon: <LinkedinIcon className="w-5 h-5" />,
    text: "linkedin.com/in/PavishK",
  },
  {
    title: "Email",
    href: "mailto:kpavish136@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    text: "kpavish136@gmail.com",
  },
  {
    title: "Phone",
    href: "tel:+919080243942",
    icon: <Phone className="w-5 h-5" />,
    text: "+91 908 024 3942",
  },
];

export default function Contact() {
  return (
    <div className="relative w-full py-12 bg-bg flex flex-col items-center text-primary px-6">

      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-accent">Get in Touch</h2>
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
            animate={{ opacity: 1, y: 0 }}
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

      {/* Footer / Copyright */}
      <div className="mt-12 w-full bg-[#0D2920] rounded-lg py-4 text-center text-white text-sm">
        © {new Date().getFullYear()} Pavish K. All rights reserved.
      </div>
    </div>
  );
}
