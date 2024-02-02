"use client"
import axios from 'axios';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { MdLock } from "react-icons/md";

export default function Countdown() {
    const targetDate = new Date('February 5, 2024'); // Set the year appropriately
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000); // Update every second

        return () => clearInterval(timer); // Clear the interval when the component unmounts
    }, []);

    const handleSubscription = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const { data } = await axios.post(
          '/api/payment',
          // {
          //     priceId: 'price_1OQDteJVAR9FxLkw3SLA8UZv',
          //     promoId: 'promo_1OQDw8JVAR9FxLkwrpCHI1xO'
          // },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (typeof window !== 'undefined') {
          window.location.assign(data);
        }
      };

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
    <img src='pattern.png' className='absolute min-w-full min-h-full blur-sm' />
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
            <button
                className={clsx('bg-[#181818] transition-all border-b px-7 py-4 my-5 text-white text-xl flex items-center gap-2 w-fit duration-300 work-sans')}
                onClick={handleSubscription}
                >
                RESERVE YOUR SPOT
                <FiArrowUpRight className="rotate-45" />
            </button>
            <div className='text-[#ffffff] flex items-center gap-2'>
                <MdLock />
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