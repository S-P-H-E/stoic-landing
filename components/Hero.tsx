'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import CountdownButton from './CountdownButton';
import clsx from 'clsx'
import { Playfair } from 'next/font/google'

const font = Playfair({
    subsets: ['latin'],
    weight: ['500'],
})


type Visibility = 'visible' | 'hidden';

export default function Hero() {
  const [muted, setMuted] = useState('&muted=true');
  const [controls, setControls] = useState('&controls=false');
  const [visibility, setVisibility] = useState<Visibility>('visible');
  const handlePlay = () => {
    setMuted('');
    setControls('&controls=true');
    setVisibility('hidden');
  };
  return (
    <div className="flex flex-col min-w-[20rem] items-center px-6 relative dot mx-auto">
      <div className="absolute w-full h-full bg-gradient-to-t from-background via-background via-20% to-80% to-transparent " />
      <div className="absolute w-full h-full bg-gradient-to-b from-background to-5% to-transparent " />

      <div className="z-10 mt-8">
          <motion.h1 initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} className={clsx("text-6xl md:text-8xl my-4 text-center p-1", font.className)}>
          Conquer The Algorithm.
        </motion.h1>
        <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{delay: 0.08}} className="text-xl break-words md:text-2xl mx-auto text-center mb-5 text-858585] font-medium">
          Learn how to make high quality videos that get engagement.
        </motion.p>
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{delay: 0.16}} className='mx-auto w-full justify-center flex items-center gap-6'>
          <div className='hidden md:flex w-[8.5rem] lg:w-[12.5rem] h-[1px] bg-gradient-to-l from-white'/>
          <div className='flex flex-col items-center w-full md:w-[400px]'>
            <CountdownButton glitch scanLines/>
          </div>
          <div className='hidden md:flex w-[8.5rem] lg:w-[12.5rem] h-[1px] bg-gradient-to-r from-white'/>
        </motion.div>
      </div>

      <div className="w-[min(100%,45rem)] lg:w-[min(100%,50vw)] overflow-hidden rounded-lg relative max-w-8xl z-20 m-5 aspect-video mx-auto">
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ stiffness: 85, type: 'spring', delay: 0.24 }}
          viewport={{once: true}}
        >
          <div
            style={{ visibility: visibility }}
            className="z-20 absolute w-full aspect-video bg-black/60 flex items-center justify-center cursor-pointer bg-gradient-to-t from-background"
            onClick={handlePlay}
          >
            <Image src="/images/play.png" alt="play" width={50} height={0}/>
          </div>
          <iframe
            className="w-full h-full"
            src={`https://customer-hyo06dqr7c3pgrtr.cloudflarestream.com/a07c199380af93ce7c2744ca470972ad/iframe?${controls}${muted}&preload=true&autoplay=true&loop=true&poster=https%3A%2F%2Fcustomer-hyo06dqr7c3pgrtr.cloudflarestream.com%2Fa07c199380af93ce7c2744ca470972ad%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600`}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen={true}
          ></iframe>
        </motion.div>
        {/* <div className="absolute top-0 w-[50vw] max-w-7xl rounded-2xl aspect-video mx-auto bg-neutral-800 animate-pulse -z-10" /> */}
      </div>
    </div>
  );
}
