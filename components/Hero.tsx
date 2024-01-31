'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import CountdownButton from './CountdownButton';

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
    <div className="flex flex-col items-center px-10 relative dot mx-auto">
      <div className="absolute w-full h-full bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d] via-20% to-80% to-transparent " />
      <div className="absolute w-full h-full bg-gradient-to-b from-[#0d0d0d] to-5% to-transparent " />

      <div className="z-10 mt-10">
        {/* <div className="px-3 py-1 rounded-full border border-[#535353] text-[#535353] bg-[#0d0d0d] font-semibold w-fit mx-auto">
            <h1>LEARN NOW</h1>
        </div> */}
        <h1 className="text-7xl font-semibold bg-gradient-to-r from-white to-[#8f8f8f] bg-clip-text text-transparent p-5 ">
          Conquer The Algorithm.
        </h1>
        <p className="text-3xl mx-auto w-[800px] text-center mb-5 text-[#858585] font-medium">
          Learn how to get views, get paid and stop wasting time.
        </p>
        <div className='mx-auto w-fit flex items-center gap-6'>
          <div className='w-[12.5rem] h-[1px] bg-gradient-to-l from-[#ffffff]'/>
          <CountdownButton label={'JOIN NOW'} />
          <div className='w-[12.5rem] h-[1px] bg-gradient-to-r from-[#ffffff]'/>
        </div>
      </div>
      
      {/* <div className="relative">
        <div className="bg-gradient-to-t from-[#0140fd] to-transparent to-95% absolute w-full h-full z-10 opacity-20"/>
        <Image src={Landing} className=" w-[90vw] border-[5px] border-b-0 rounded-b-none rounded-xl border-white/10 drop-shadow-md" alt='lanidng' placeholder="blur"/>
    </div> */}

      <div className="w-[50vw] relative max-w-8xl z-20 m-5 aspect-video mx-auto">
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ stiffness: 85, type: 'spring' }}
        >
          <div
            style={{ visibility: visibility }}
            className="z-20 absolute w-full aspect-video bg-black/60 flex items-center justify-center cursor-pointer rounded-2xl"
            onClick={handlePlay}
          >
            <Image src="/images/play.png" alt="play" width={50} height={0} />
          </div>
          <iframe
            className="rounded-2xl shadow-xl w-full h-full"
            src={`https://customer-hyo06dqr7c3pgrtr.cloudflarestream.com/a07c199380af93ce7c2744ca470972ad/iframe?${controls}${muted}&preload=true&autoplay=true&loop=true&poster=https%3A%2F%2Fcustomer-hyo06dqr7c3pgrtr.cloudflarestream.com%2Fa07c199380af93ce7c2744ca470972ad%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600`}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen={true}
          ></iframe>
        </motion.div>
        <div className="absolute top-0 w-[50vw] max-w-7xl rounded-2xl aspect-video mx-auto bg-neutral-800 animate-pulse -z-10" />
      </div>
    </div>
  );
}
