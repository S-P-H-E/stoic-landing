'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import JoinButton from './JoinButton';
import Link from 'next/link';
import Image from "next/image";

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
      className="text-gray py-2 px-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95 hover:text-black"
    >
      {text}
    </button>
  );
    
  const [hidden, setHidden] = useState(false)
    const {scrollY} = useScroll()

    useMotionValueEvent(scrollY, 'change', (latest) => {
      const previous = scrollY.getPrevious()
      if (latest > previous && latest > 49) {
        setHidden(true)
      } else {
        setHidden(false)
      }
    })

  return (
      <motion.nav transition={{duration: 0.45, ease: "easeInOut"}} animate={hidden ? 'hidden' : 'visible'} variants={{visible: {y: 0}, hidden: {y: "-100%"}}} className={"z-50 sticky top-0 w-full px-8 py-6 text-white backdrop-blur-lg bg-gradient-to-b from-background via-background to-transparent bg-opacity-70"}>
        <div className='w-full flex items-center justify-between max-w-8xl mx-auto'>
          <div className="flex items-center gap-3 w-[300px]">
            <h1
              className="font-medium text-[1.24rem]"
            >
              STOIC
            </h1>
            <Image alt="Stoic Logo" src='/stoic.png' width={15} height={15}/>
          </div>
          <div className="hidden md:flex gap-6 px-2 py-2 rounded-xl">
            {renderButton('Features')}
            {renderButton('Pricing')}
            {renderButton('About Us')}
          </div>
          <div className="flex gap-4 w-[300px] justify-end">
            <Link rel="noopener noreferrer" target="_blank" href={'https://app.stoiccord.com'} className="bg-background hover:bg-border/50 transition duration-200 border border-border px-4 py-2 font-semibold text-white flex items-center gap-2">
              <p>Login</p>
              <FaUserCircle />
            </Link>

            {/* <JoinButton /> */}
          </div>
        </div>
      </motion.nav>
  );
}
