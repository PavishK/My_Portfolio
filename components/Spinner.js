"use client";

import Image from "next/image";
import React from "react";
import TextType from "@/animations/TextType";
import { motion } from "framer-motion";

function SamuraiSpinner() {
  return (
    <div className="w-screen h-screen bg-bg flex flex-col items-center justify-center gap-8 relative overflow-hidden">
      
      {/* Spinner area */}
      <div className="relative flex items-center justify-center">
        {/* Outer katana-style ring with pulse */}
        <motion.div
          className="absolute w-36 h-36 border-[3px] border-t-accent border-gray-300 rounded-full shadow-[0_0_15px_rgba(194,56,30,0.6)]"
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />

        {/* Inner secondary ring */}
        <motion.div
          className="absolute w-28 h-28 border-[2px] border-b-accent border-gray-200 rounded-full shadow-[0_0_10px_rgba(194,56,30,0.4)]"
          animate={{ rotate: -360, scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
        />

        {/* Center developer icon with subtle bounce */}
        <motion.div
          className="relative w-20 h-20"
          animate={{ scale: [1, 1.08, 1], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            priority
            src="/images/favicon.ico"
            alt="Developer"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Samurai-style typing description with extra space */}
      <motion.div
        className="mt-6" // Added margin-top to create more space
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 120 }}
      >
        <TextType
          text={["Code with the spirit of a Samurai"]}
          typingSpeed={40}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="⍀"
          textColors={["#C2381E"]}
        />
      </motion.div>
    </div>
  );
}

export default SamuraiSpinner;
