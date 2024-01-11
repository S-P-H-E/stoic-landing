"use client"
import { useState, useEffect } from 'react';

export default function Countdown() {
    const targetDate = new Date('October 11, 2023'); // Set the year appropriately
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000); // Update every second

        return () => clearInterval(timer); // Clear the interval when the component unmounts
    }, []);

    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-[-1]">
    <video 
        src="video2.mp4" 
        autoPlay 
        loop 
        muted 
        className="absolute min-w-full min-h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover grayscale blur-sm opacity-50"
    ></video>
</div>

            <h1 className='text-3xl font-semibold pb-5'>October 11, 17:00 CET</h1>
            <div className='flex bg-[--text] p-4 rounded-2xl gap-4'>
                <div className='flex flex-col items-center bg-[--bg] p-4 rounded-md w-[100px]'>
                    <p className='text-5xl font-semibold'>{timeLeft.days}</p>
                    Days    
                </div> 
                <div className='flex flex-col items-center bg-[--bg] p-4 rounded-md w-[100px]'>
                    <p className='text-5xl font-semibold'>{timeLeft.hours} </p>Hours
                </div> 
                <div className='flex flex-col items-center bg-[--bg] p-4 rounded-md w-[100px]'>
                    <p className='text-5xl font-semibold'>{timeLeft.minutes}</p> Minutes
                </div> 
                <div className='flex flex-col items-center bg-[--bg] p-4 rounded-md w-[100px]'>
                    <p className='text-5xl font-semibold'>{timeLeft.seconds}</p> Seconds
                </div>
            </div>
            <button className='bg-[--text] m-5 px-4 py-2 rounded-full text-[--bg] font-semibold'>RESERVE YOUR SPOT</button>
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