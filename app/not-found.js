"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HomeIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-center px-6 relative bg-[var(--color-bg)] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg-home.png')" }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-[var(--color-bg)]/70 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[var(--color-accent)] text-8xl md:text-9xl font-extrabold tracking-widest drop-shadow-lg"
        >
          404
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-2xl md:text-3xl font-semibold text-[var(--color-primary)]"
        >
          Page Not Found
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-2 text-[var(--color-primary)]/90 max-w-md mx-auto"
        >
          Sorry, we couldn’t find the page you’re looking for.  
          Let’s get you back on track.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-accent)] text-white font-medium hover:bg-red-600 transition-all shadow-lg"
          >
            <HomeIcon className="w-5 h-5" /> Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}