"use client";

import React, { useEffect, useState } from "react";
import { HouseIcon, User, Settings, Briefcase, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HamburgerMenu from "@/animations/HamburgerMenu";

const menuItems = [ "home", "about", "skills", "projects", "contact" ];
const menuVariants = {
    hidden: {
      x: "100%", 
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      x: "100%", 
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
    },
  },
};

function MenuBar({ onClickMenu, activeSection }) {
  const [toggleMenuBar, setToggleMenuBar] = useState(false);

  const menuHandleChange = () => {
    setToggleMenuBar((prev) => !prev);
  };

  useEffect(()=> {
    document.body.style.overflow = toggleMenuBar ? 'hidden' : 'auto';
  },[toggleMenuBar])

  return (
    <div className="relative">
      {/* Open Button */}
      <HamburgerMenu toggleMenu={toggleMenuBar} handler={menuHandleChange}/>

      <AnimatePresence>
        {toggleMenuBar && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 mt-24"
              onClick={() => setOpen(false)}
            />

            {/* Side Menu */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-screen sm:w-[75%] w-full bg-bg border-t-2 border-t-homeBg shadow-xl p-6 z-[999] mt-[12vh]"
            >

              <ul className="flex flex-col gap-6 text-lg">
                { menuItems.map( (v,i)=> (
                  <li 
                    key={i} 
                    className={`text-4xl uppercase font-medium ${ activeSection === v ? "text-accent underline underline-offset-8" : "text-black" }`}
                    onClick={()=> { onClickMenu(v); menuHandleChange(); }}
                    >
                  {v}
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>

  );
}

export default MenuBar;