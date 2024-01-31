"use client"

import React, {useState, useEffect, useTransition, useMemo} from 'react';
import {MdLock} from "react-icons/md";
import patternImage from '@/public/pattern.png'
import Image from "next/image";
import CountdownButton from "@/components/CountdownButton";


export default function Countdown() {
    const targetDate = useMemo(() => new Date('February 5, 2024'), []); // Memoize the targetDate initialization
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        // Run this only on the client side
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-[-1]">
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
            <div className='flex bg-black/50 backdrop-blur-sm p-6 rounded-2xl gap-4 border border-[#141414]'>
                <div className='flex flex-col items-center p-6 rounded-md w-[100px]'>
                    <p className='text-7xl font-semibold'>{timeLeft.days}</p>
                    Days
                </div>
                <div className='flex flex-col items-center p-6 rounded-md w-[100px]'>
                    <p className='text-7xl font-semibold'>{timeLeft.hours} </p>Hours
                </div>
                <div className='flex flex-col items-center p-6 rounded-md w-[100px]'>
                    <p className='text-7xl font-semibold'>{timeLeft.minutes}</p> Minutes
                </div>
                <div className='flex flex-col items-center p-6 rounded-md w-[100px]'>
                    <p className='text-7xl font-semibold'>{timeLeft.seconds}</p> Seconds
                </div>

            </div>
            <CountdownButton/>
            <div className='text-[#ffffff] flex items-center gap-2'>
                <MdLock/>
                <p className='text-[14px]'>INCLUDES ACCESS TO ALL COURSES</p>
            </div>
        </div>

    );
}

function calculateTimeLeft(targetDate: Date) {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
        days,
        hours,
        minutes,
        seconds
    };
}