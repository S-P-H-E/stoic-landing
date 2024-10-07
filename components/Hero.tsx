'use client';

import {motion, useMotionTemplate, useMotionValue} from 'framer-motion';
import Image from 'next/image';
import React, {useEffect, useState} from 'react';
import CountdownButton from './CountdownButton';
import clsx from 'clsx'

export default function Hero() {
    const [muted, setMuted] = useState('&muted=true');
    const [controls, setControls] = useState('&controls=false');
    const [playing, setPlaying] = useState(false)

    const [hidden, setHidden] = useState(false)

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoaded(true);
        }, 50);

        return () => clearTimeout(timeout);
    }, []);


    const handlePlay = () => {
        setMuted('');
        setControls('&controls=true');
        setPlaying(!playing);
    };

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        let currentTarget = event.currentTarget as HTMLDivElement;
        let {left, top} = currentTarget.getBoundingClientRect();

        mouseX.set(event.clientX - left);
        mouseY.set(event.clientY - top);
    }

    function handleMouseOver() {
        setHidden(!hidden)
    }

    return (
        <div onMouseMove={handleMouseMove} className="group/header overflow-hidden flex flex-col min-w-[20rem] items-center relative dot mx-auto">
                <motion.div
                    className={clsx("md:block hidden pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover/header:opacity-100", (hidden || !loaded) && '!opacity-0')}
                    style={{
                        background: useMotionTemplate`
                                    radial-gradient(
                                    350px circle at ${mouseX}px ${mouseY}px,
                                    var(--glow),
                                    transparent 80%
                                    )
                                `,
                    }}
                />

            <div className="absolute w-full h-full bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d] via-20% to-80% to-transparent "/>
            <div className="absolute w-full h-full bg-gradient-to-b from-[#0d0d0d] to-5% to-transparent "/>

            <div className="z-10 lg:mt-8 px-8">
                {/* <div className="px-3 py-1 rounded-full border border-[#535353] text-[#535353] bg-[#0d0d0d] font-semibold w-fit mx-auto">
            <h1>LEARN NOW</h1>
        </div> */}
                <h1 className="max-w-5xl mx-auto text-6xl md:text-8xl mb-4 font-medium mt-8 text-center">
                Conquer The Algorithm.
                </h1>
                <p className="text-lg break-words md:text-2xl mx-auto text-center mb-5 text-[#858585] font-medium">
                    Uncover the secrets to going viral and boosting your online presence.
                </p>
                <div className='mx-auto w-full justify-center flex items-center gap-6'>
                    <div className='hidden md:flex w-[8.5rem] lg:w-[12.5rem] h-[1px] bg-gradient-to-l from-[#ffffff]'/>
                    <div className='flex flex-col items-center w-[75%] md:w-[400px]'>
                        <CountdownButton glitch scanLines/>
                    </div>
                    <div className='hidden md:flex w-[8.5rem] lg:w-[12.5rem] h-[1px] bg-gradient-to-r from-[#ffffff]'/>
                </div>
            </div>

            {/* <div className="relative">
        <div className="bg-gradient-to-t from-[#0140fd] to-transparent to-95% absolute w-full h-full z-10 opacity-20"/>
        <Image asdsrc={Landing} className=" w-[90vw] border-[5px] border-b-0 rounded-b-none rounded-xl border-white/10 drop-shadow-md" alt='lanidng' placeholder="blur"/>
    </div> */}

            <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver} className={clsx("order-first group md:order-last w-full md:w-[min(100%,75vw)] lg:w-[min(100%,50vw)] overflow-hidden md:rounded-t-lg relative max-w-8xl z-20 m-0 md:m-5 aspect-video mx-auto", playing && 'md:rounded-lg')}>
                <motion.div
                    className="w-full h-full"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{stiffness: 85, type: 'spring'}}
                >
                    <div
                        className={clsx("transition duration-300 z-20 absolute w-full aspect-video bg-black/30 flex items-center justify-center cursor-pointer bg-gradient-to-t from-background to-transparent", playing && 'opacity-0 pointer-events-none')}
                        onClick={handlePlay}
                    >
                        <Image src="/images/play.png" alt="play" width={50} height={0}/>
                    </div>
                    <iframe
                        className="w-full h-full"
                        src={`
                        https://customer-m0okwjgscx6jj5he.cloudflarestream.com/f78ca650dbbfad37d1a51711203cab49/iframe?${controls}${muted}&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-m0okwjgscx6jj5he.cloudflarestream.com%2Ff78ca650dbbfad37d1a51711203cab49%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600
                        `}
                        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                        allowFullScreen={true}
                    ></iframe>
                </motion.div>
                <div className="absolute top-0 w-full max-w-7xl md:rounded-lg aspect-video mx-auto bg-neutral-800 animate-pulse -z-10" />
            </div>
        </div>
    );
}