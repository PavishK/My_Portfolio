"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

function TextReveal({
  text,
  as: Tag = "p",
  classText = "",
  overlayColor = "bg-primary",
  stagger = 0.15,
  duration = 0.4,
  delay = 0.01,
}) {
  const textRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Desktop only
    mm.add("(min-width: 769px)", () => {
      const split = new SplitText(textRef.current, {
        type: "lines",
        linesClass: "reveal-line",
      });

      split.lines.forEach((line) => {
        line.style.position = "relative";
        line.style.display = "inline-block";
        line.style.overflow = "hidden";

        const overlay = document.createElement("span");
        overlay.className = `
          absolute top-0 right-0 h-full w-full ${overlayColor}
        `;

        gsap.set(overlay, { xPercent: 0 });
        line.appendChild(overlay);
      });

      gsap.to(".reveal-line span", {
        xPercent: 105,
        duration,
        ease: "power2.inOut",
        stagger,
        delay,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom",
          once: true,      
        },
      });

      return () => split.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <Tag ref={textRef} className={classText}>
      {text}
    </Tag>
  );
}

export default TextReveal;