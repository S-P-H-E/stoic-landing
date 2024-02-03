import Image from 'next/image';
import React from 'react';
import Phone from '@/public/iphone.png';
import JoinButton from './JoinButton';

export default function CallToAction() {

  return (
    <div className="bg-[#0d0d0dff] max-w-8xl mx-auto shadow-xl border-2 border-[#1b1b1b] rounded-2xl m-20 w-[80vw] text-white h-[400px] flex justify-between items-center dot relative overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.01]">
      <div className="flex flex-col gap-5 p-10">
        <h1 className="text-6xl font-semibold w-[650px]">
          Begin using our cutting edge platform
        </h1>
        <JoinButton noGroup/>
      </div>
      <Image src={Phone} alt="Phone" className="h-full w-fit" />

      <div className="absolute w-[2000px] right-[200px] bottom-[-500px] h-[500px] bg-[#272727] rounded-full opacity-0 group-hover:opacity-90 blur-[120px] transition duration-500 z-20" />
    </div>
  );
}
