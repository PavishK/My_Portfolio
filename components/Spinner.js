"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Spinner() {
  const [progress, setProgress] = React.useState(0);
  const [showText, setShowText] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 60 && !showText) setShowText(true);

        if (p < 40) return p + 2;

        if (p === 40) {
          setTimeout(() => setProgress(41), 80);
          return 40;
        }

        if (p < 80) return p + 1;

        if (p === 80) {
          setTimeout(() => setProgress(81), 50);
          return 80;
        }

        if (p < 100) return p + 0.5;

        return 100;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [showText]);

  return (
    <div
      className="
        fixed top-0 left-0 
        h-full w-screen 
        bg-homeBg
        flex items-center justify-center 
        overflow-hidden
      "
    >
      {/* Percentage */}
      <div className="absolute spinner-font bottom-2 right-2 text-accent text-3xl font-semibold tracking-wider">
        {Math.floor(progress)}
      </div>

      <div className="w-20 h-20 relative flex items-center justify-center overflow-visible">

        {/* Horizontal Bar */}
        <motion.div
          initial={{ width: 0, opacity: 0, y: 0, height: 40 }}
          animate={{
            width: "100%",
            opacity: 1,
            y: showText ? -6 : 0,
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute border-t-8 border-b-8 border-accent"
        />

        {/* Vertical Bar */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: "100%",
            opacity: 1,
            y: showText ? -6 : 0,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute w-10 border-l-8 border-r-8 border-accent"
        />

        {/* Text */}
        {showText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="absolute -bottom-10 text-accent font-bold text-sm tracking-widest text-center whitespace-nowrap"
          >
            Crafted by <span className="spinner-font font-bold">PC</span>
          </motion.div>
        )}
      </div>
    </div>
  );
}
