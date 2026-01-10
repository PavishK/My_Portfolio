"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function RevealText({
  text,
  direction = "left",
  bgColor = "bg-neutral-900",
  textColor = "text-white",
  duration = 0.9,
  stagger = 0.15,
}) {
  const wrapperRef = useRef(null);
  const measureRef = useRef(null);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    if (!measureRef.current || !wrapperRef.current) return;

    const el = measureRef.current;
    el.innerHTML = "";

    const words = text.split(" ");
    const spans = words.map((word) => {
      const span = document.createElement("span");
      span.textContent = word + " ";
      span.style.whiteSpace = "nowrap";
      el.appendChild(span);
      return span;
    });

    const detectedLines = [];
    let currentLine = [];
    let lastTop = null;

    spans.forEach((span) => {
      const top = span.offsetTop;
      if (lastTop === null || Math.abs(top - lastTop) < 4) {
        currentLine.push(span.textContent);
      } else {
        detectedLines.push(currentLine.join(""));
        currentLine = [span.textContent];
      }
      lastTop = top;
    });

    if (currentLine.length) {
      detectedLines.push(currentLine.join(""));
    }

    setLines(detectedLines);
  }, [text]);

  return (
    <div ref={wrapperRef} className="relative w-full">
      {/* Hidden measurement (inherits width correctly) */}
      <div
        ref={measureRef}
        className="absolute invisible pointer-events-none whitespace-normal"
      />

      {/* Visible animated lines */}
      <div className="space-y-1">
        {lines.map((line, i) => (
          <div key={i} className="relative overflow-hidden">
            {/* Text */}
            <div className={`relative z-10 ${textColor}`}>
              {line}
            </div>

            {/* Wipe overlay */}
            <motion.div
              className={`absolute inset-0 z-20 ${bgColor}`}
              initial={{ scaleX: 1 }}
              whileInView={{ scaleX: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                delay: i * stagger,
                duration,
                ease: [0.77, 0, 0.175, 1],
              }}
              style={{
                transformOrigin: direction === "left" ? "left" : "right",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
