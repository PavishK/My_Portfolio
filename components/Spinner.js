"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Spinner() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Minimum 3s before finishing loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="flex flex-col items-center justify-center min-h-screen bg-[var(--color-homeBg)] relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Floating Flowers (start immediately) */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[var(--color-accent)]"
              style={{
                fontSize: `${16 + Math.random() * 20}px`, // random size
                left: `${Math.random() * 100}%`, // random X
              }}
              initial={{ y: "100vh", opacity: 0 }}
              animate={{ y: ["100vh", "-20vh"], opacity: [0, 1, 0] }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🌸
            </motion.div>
          ))}

          {/* Animated Icon */}
          <motion.div
            className="relative w-28 h-28 mb-6 rounded-xl"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 0px var(--color-accent)",
                "0 0 20px var(--color-accent)",
                "0 0 0px var(--color-accent)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              priority
              src="/images/favicon.ico"
              alt="Developer"
              fill
              className="object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* Loading Text */}
          <motion.p
            className="text-xl font-bold text-[var(--color-primary)] tracking-wide"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            Loading...
          </motion.p>

          {/* Progress Bar */}
          <div className="relative w-72 h-3 mt-6 bg-[var(--color-bg)] rounded-full overflow-hidden">
            <motion.div
              className="h-3 rounded-full bg-gradient-to-r from-[var(--color-accent)] via-red-400 to-[var(--color-accent)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 3,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}