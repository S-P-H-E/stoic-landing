"use client"

import React, {useState, useEffect, useTransition, useMemo, useRef} from 'react';
import {MdLock} from "react-icons/md";
import patternImage from '@/public/pattern.png'
import Image from "next/image";
import CountdownButton from "@/components/CountdownButton";
import CountdownTimer from "@/components/CountdownTimer";

export default function Countdown() {

    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <div className="fixed top-0 left-0 w-screen h-[100svh] overflow-hidden z-[-1]">
                {/* <video
        src="10.mp4"
        autoPlay
        loop
        muted
        className="absolute min-w-full min-h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover grayscale blur-sm opacity-50"
    ></video> */}
                <Image src={patternImage} alt="Pattern Background" fill placeholder="blur"
                       className='absolute min-w-full min-h-full blur-sm'/>
            </div>

            {/* <h1 className='text-3xl font-semibold pb-5'>February 5, 2024</h1> */}
            <CountdownTimer/>

            <CountdownButton/>
            <div className='text-[#ffffff] flex items-center gap-2'>
                <MdLock/>
                <p className='text-[14px]'>INCLUDES ACCESS TO ALL COURSES</p>
            </div>
        </div>

    );
}
