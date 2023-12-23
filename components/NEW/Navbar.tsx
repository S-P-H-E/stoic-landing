'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';
import JoinButton from './JoinButton';


export default function Navbar() {
  const logoAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 3.05 * index,
      },
    }),
  };

  const renderButton = (text: string) => (
    <button
      className="text-[#7e7e7e] py-2 px-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-black"
    >
      {text}
    </button>
  );
  
  return (
      <div className="flex w-[80vw] max-w-8xl mx-auto p-10 justify-between items-center text-white">
        <div className="flex items-center gap-3 w-[300px]">
          <motion.h1
            initial="initial"
            variants={logoAnimation}
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="font-medium text-[1.24rem]"
          >
            STOIC
          </motion.h1>
        </div>
        <div className="flex gap-6 px-2 py-2 rounded-xl">
          {renderButton('Features')}
          {renderButton('Pricing')}
          {renderButton('About Us')}
        </div>
        <div className="flex gap-4 w-[300px] justify-end">
          <button className="bg-[#0d0d0d] border border-[#535353] px-4 py-2 font-semibold rounded-lg text-white flex items-center gap-2">
            <p>Login</p>
            <FaUserCircle />
          </button>

          <JoinButton />
        </div>
      </div>
  );
}
