"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Spinner() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      value += 1;
      setProgress(value);
      if (value >= 100) {
        clearInterval(interval);
        setCompleted(true); // mark as completed
        setTimeout(() => setLoading(false), 800); // give time to show "Completed"
      }
    }, 30); // smooth loading speed
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="spinner"
          className="flex flex-col items-center justify-center min-h-screen bg-[var(--color-homeBg)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Container for image and progress ring */}
          <div className="relative w-40 h-40 flex items-center justify-center">
            {/* Image (slightly larger) */}
            <motion.div
              className="relative w-28 h-28"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <Image
                priority
                src="/images/loading-icon.png"
                alt="Developer"
                fill
                className="object-contain drop-shadow-xl"
              />
            </motion.div>

            {/* Circular Progress Ring */}
            <svg
              className="absolute w-full h-full rotate-[-90deg]"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="5"
                fill="none"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                stroke="var(--color-accent)"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="283"
                strokeDashoffset={283 - (283 * progress) / 100}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              />
            </svg>
          </div>

          {/* Progress number or Completed text */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 flex flex-col items-center"
          >
            <motion.span
              className="loading-font text-[var(--color-primary)] font-semibold text-xl tracking-wide"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {completed ? "Completed!" : `Loading ${progress}%`}
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
