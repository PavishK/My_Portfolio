"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function SplashScreen() {
  const hBar = useRef(null)
  const vBar = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true })

    // Horizontal bar: grow from center
    tl.fromTo(
      hBar.current,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 0.6, ease: "power3.out" }
    )
      // Vertical bar: grow from center
      .fromTo(
        vBar.current,
        { scaleY: 0, opacity: 0 },
        { scaleY: 1, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.3"
      )

    return () => tl.kill()
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-homeBg overflow-hidden">
      {/* Bars Symbol */}
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Horizontal bar */}
        <div
          ref={hBar}
          className="absolute h-10 w-full border-t-8 border-b-8 border-accent origin-center"
        />
        {/* Vertical bar */}
        <div
          ref={vBar}
          className="absolute w-10 h-full border-l-8 border-r-8 border-accent origin-center"
        />
      </div>

      {/* Signature text at bottom */}
      <div
        ref={textRef}
        className="absolute bottom-10 text-accent font-bold text-xs tracking-[0.35em] whitespace-nowrap"
      >
        Crafted by <span className="spinner-font">PC</span>
      </div>
    </div>
  )
}
