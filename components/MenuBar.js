"use client";

import React, { useState } from 'react';
import { HouseIcon, User, Settings, Briefcase, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import HamburgerMenu from '@/animations/HamburgerMenu';

function MenuBar({ onClickMenu, activeSection }) {
  const [toggleMenuBar, setToggleMenuBar] = useState(false);

  const menuHandleChange = () => {
    setToggleMenuBar((prev) => !prev);
  };

  const menuItems = [
    { name: 'home', icon: <HouseIcon /> },
    { name: 'about', icon: <User /> },
    { name: 'skills', icon: <Settings /> },
    { name: 'projects', icon: <Briefcase /> },
    { name: 'contact', icon: <Mail /> },
  ];

  return (
    <div className="relative w-full">
      <div className="z-[1000]">
        <HamburgerMenu toggleMenu={toggleMenuBar} handler={menuHandleChange} />
      </div>

      <AnimatePresence>
        {toggleMenuBar && (
          <motion.div
            className="absolute z-[999] right-0 top-10 bg-homeBg border w-52 rounded-lg p-3 shadow-lg"
            initial={{opacity:0,x:50}}
            animate={{opacity:1,x:0}}
            exit={{opacity:0,x:100}}
          >
            <ul className="flex flex-col gap-y-4 text-lg">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => {
                    onClickMenu(item.name);
                    setToggleMenuBar(false);
                  }}
                  className={`flex items-center gap-x-2 cursor-pointer transition-colors
                    ${activeSection === item.name ? 'bg-bg p-0.5 rounded-lg text-accent' : 'hover:text-accent'}`}
                >
                  {item.icon} {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
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