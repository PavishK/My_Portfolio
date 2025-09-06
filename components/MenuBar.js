"use client";

import React, { useState } from "react";
import { HouseIcon, User, Settings, Briefcase, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HamburgerMenu from "@/animations/HamburgerMenu";

function MenuBar({ onClickMenu, activeSection }) {
  const [toggleMenuBar, setToggleMenuBar] = useState(false);

  const menuHandleChange = () => {
    setToggleMenuBar((prev) => !prev);
  };

  const menuItems = [
    { name: "home", icon: <HouseIcon /> },
    { name: "about", icon: <User /> },
    { name: "skills", icon: <Settings /> },
    { name: "projects", icon: <Briefcase /> },
    { name: "contact", icon: <Mail /> },
  ];

  return (
    <div className="relative w-full flex justify-end items-center px-6 py-4">
      {/* Hamburger Icon */}
      <HamburgerMenu toggleMenu={toggleMenuBar} handler={menuHandleChange} />

      {/* Floating Menu */}
      <AnimatePresence>
        {toggleMenuBar && (
          <motion.div
            className="absolute right-6 top-16 rounded-xl p-4 flex flex-col gap-4 min-w-[180px]"
            style={{
              backgroundColor: "var(--color-homeBg)",
              border: "1px solid var(--color-bg)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <ul className="flex flex-col gap-3 font-medium">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => {
                    onClickMenu(item.name);
                    setToggleMenuBar(false);
                  }}
                  className="flex items-center gap-3 cursor-pointer rounded-md px-2 py-1 transition-all duration-300"
                  style={{
                    color:
                      activeSection === item.name
                        ? "var(--color-homeBg)"
                        : "var(--color-primary)",
                    background:
                      activeSection === item.name
                        ? "var(--color-accent)"
                        : "transparent",
                  }}
                >
                  {item.icon}{" "}
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MenuBar;
