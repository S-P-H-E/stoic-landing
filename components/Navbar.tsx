'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import JoinButton from './JoinButton';
import Link from 'next/link';
import Image from "next/image";
import {Menu} from "lucide-react";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";

export default function Navbar() {

  const renderButton = (text: string) => (
    <Link href={`#${text.toLowerCase()}`}
      className="text-gray py-2 px-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95 hover:text-black"
    >
      {text}
    </Link>
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
      <motion.nav transition={{duration: 0.45, ease: "easeInOut"}} animate={hidden ? 'hidden' : 'visible'} variants={{visible: {y: 0}, hidden: {y: "-100%"}}} className={"z-50 sticky top-0 w-full px-8 py-6 text-white backdrop-blur-lg bg-gradient-to-b from-background via-background/70 to-transparent"}>
        <div className='w-full flex items-center justify-between max-w-8xl mx-auto'>
          <div className="flex items-center gap-3 w-fit">
            <h1
              className="md:block hidden font-medium text-[1.24rem]"
            >
              STOIC
            </h1>
            <Image alt="Stoic Logo" src='/stoic.png' width={15} height={15} className="md:w-auto w-5"/>
          </div>
          <div className="hidden md:flex gap-6 px-2 py-2 rounded-xl">
            {renderButton('Features')}
            {renderButton('Pricing')}
            {renderButton('Courses')}
            {renderButton('About Us')}
          </div>
          <div className="flex gap-5 justify-end items-center">
            <Link rel="noopener noreferrer" target="_blank" href={'https://app.stoiccord.com'} className="active:scale-90 bg-background hover:bg-border/50 transition duration-200 border border-border px-4 py-2 font-semibold text-white flex items-center gap-2">
              <p>Login</p>
              <FaUserCircle />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden hover:bg-white hover:text-black transition hover:border-white active:scale-90 p-2 border border-border">
                  <Menu className=""/>
                </button>
              </SheetTrigger>
              <SheetContent side="top" className="bg-background border-border">
                <div className="flex flex-col gap-4 mx-auto w-full items-center justify-center text-center">
                  {renderButton('Features')}
                  {renderButton('Pricing')}
                  {renderButton('Courses')}
                  {renderButton('About Us')}
                  <JoinButton mobile/>
                </div>
              </SheetContent>
            </Sheet>
            {/* <JoinButton /> */}
          </div>
        </div>
      </motion.nav>
  );
}
