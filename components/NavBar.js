"use client";

import React from 'react';
import MenuBar from './MenuBar';

function NavBar({ onClickMenu, changeBg, activeSection }) {
  const menuItems = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <div className={`relative font-bold flex flex-row items-center justify-between p-6 transition-colors delay-300 ${!changeBg ? 'bg-homeBg' : 'bg-bg'}`}>
      <h1 className='text-3xl font-bold'>Pavish K</h1>
      <ul className='sm:flex flex-row items-center justify-center gap-x-6 text-lg hidden'>
        {menuItems.map((item) => (
        <li
          key={item}
          onClick={() => onClickMenu(item)}
          className={`cursor-pointer capitalize transition-colors hover:text-accent hover:underline hover:underline-offset-4 
            ${activeSection == item 
              ? 'text-accent font-bold underline underline-offset-4 decoration-2' 
              : 'text-gray-700 font-medium'}`}
        >
          {item}
        </li>
        ))}
      </ul>

      <div className='sm:hidden block self-center'>
        <MenuBar onClickMenu={onClickMenu} activeSection={activeSection} />
      </div>
    </div>
  );
}

export default NavBar;