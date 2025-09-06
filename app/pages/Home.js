"use client";

import React from 'react';
import TextType from '@/animations/TextType';
import './styledPages.css';
import Image from 'next/image';

function Home({ onClickMouse }) {

  const gmailId="kpavish136@gmail.com";

  return (
    <div className="relative background-image h-screen w-full px-6 flex flex-col sm:flex-row gap-y-6 sm:items-center sm:justify-center items-start">
      
      <div className="max-w-6xl w-full flex flex-col-reverse sm:flex-row gap-y-6 items-center justify-between">
        
        {/* Left Section - Text */}
        <div className="flex-1 text-center md:text-left space-y-4">
        <h1 className="sm:text-5xl text-3xl font-bold text-primary">{"Hi, It's"} <span className='text-accent'>{"Pavish"}</span></h1>
          <h1 className="sm:text-4xl text-2xl font-bold text-primary w-full text-center sm:text-start">
            {"I'm a "}
            <TextType
              text={[
                "Full Stack Developer",
                "Web Developer",
                "Code Samurai"
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_"
              textColors={["#C2381E"]}
            />
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            A Web Developer who enjoys building personal projects. Always exploring new ideas and turning them into real, functional web apps.
          </p>
          <a href={`mailto:${gmailId}`}
          className='bg-accent transition-colors hover:bg-red-800 cursor-pointer px-5 p-3 rounded-xl text-white font-medium border-none'>
          Contact Me</a>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 flex items-center justify-center">
          <Image 
            src="/images/placeholder.png" 
            alt="Pavish Portfolio" 
            width={400}
            height={400}
            className="w-8/12 rounded-2xl shadow-lg"
          />
        </div>
      </div>
      
      <div className="absolute bottom-0 group text-sm left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer">
        <span className='group-hover:block hidden'>Scroll Down</span>
        <Image 
          src="/images/mouse-cursor.png" 
          alt="Scroll Down" 
          width={20}
          height={20}
          className="sm:w-8 w-7 mt-1"
          onClick={onClickMouse}
        />
      </div>
    </div>
  );
}

export default Home;
