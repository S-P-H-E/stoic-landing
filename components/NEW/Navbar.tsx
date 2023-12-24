'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import JoinButton from './JoinButton';
import clsx from 'clsx';
import Link from 'next/link';

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
      className="text-[#7e7e7e] py-2 px-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95 hover:text-black"
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
      <motion.nav transition={{duration: 0.45, ease: "easeInOut"}} animate={hidden ? 'hidden' : 'visible'} variants={{visible: {y: 0}, hidden: {y: "-100%"}}} className={"z-50 sticky top-0 w-full p-8 text-white backdrop-blur-md"}>
        <div className='w-full flex items-center justify-between max-w-8xl mx-auto'>
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
            <Link rel="noopener noreferrer" target="_blank" href={'https://app.stoiccord.com'} className="bg-[#0d0d0d] hover:bg-[#2e2e2e] transition duration-200 border border-[#535353] px-4 py-2 font-semibold rounded-lg text-white flex items-center gap-2">
              <p>Login</p>
              <FaUserCircle />
            </Link>

            <JoinButton />
          </div>
        </div>
      </motion.nav>
  );
}
