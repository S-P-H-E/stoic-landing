"use client"

import CountdownButton from './CountdownButton'
import {motion, useMotionTemplate, useMotionValue} from 'framer-motion'
import Results from '@/public/results_undedited.png'
import Image from "next/image";
import React from "react";

export default function About() {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        let currentTarget = event.currentTarget as HTMLDivElement;
        let {left, top} = currentTarget.getBoundingClientRect();

        mouseX.set(event.clientX - left);
        mouseY.set(event.clientY - top);
    }
    return (
        <div id="about us" className='scroll-my-24 overflow-x-hidden flex flex-col gap-10 py-20'>
            <motion.div className="flex flex-col gap-4" initial={{opacity: 0, scale: 0.8}} whileInView={{opacity: 1, scale: 1}} transition={{type: 'spring', damping: 25}} viewport={{once:true}}>
                <div className="flex flex-col items-center justify-center px-4">
                    <p className="text-description text-center tracking-widest md:text-base text-sm">A FEW WEEKS IS ALL YOU NEED</p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl text-center font-medium">You don&apos;t need <br className="md:block hidden"/><mark className="bg-transparent text-white font-semibold">years</mark> to get good</h1>
                </div>
                <div className='flex lg:flex-row flex-col px-8 md:px-20 items-center justify-center mx-auto lg:w-fit gap-4 mt-6 xl:gap-10 lg:mt-10'>
                    <div className='flex flex-col lg:w-auto w-full text-center lg:text-start lg:items-start justify-center items-center gap-3 lg:gap-5'>
                        <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-light mt-2 lg:mt-0">A few weeks of focus <br/> will get you there</h1>
                        <div className='max-w-[500px] font-light text-gray text-sm md:text-base w-full lg:w-4/6 flex flex-col gap-2 lg:gap-5'>

{/*
                            <p>Unlock the precise guidance and tools essential for mastering social media</p>
*/}

                            <p className="lg:w-[400px] xl:w-[500px]">We will give you the exact guidance and information you need to learn social media. We offer the best assets to assist you in your social media journey.</p>
                        </div>
                        <CountdownButton glitch/>
                    </div>
                    <div className='order-first lg:order-last w-full max-w-[620px] aspect-[16/7] lg:aspect-auto lg:w-[500px] lg:h-[220px] xl:w-[620px] xl:h-[280px] relative rounded-xl overflow-hidden shadow-[0_0px_35px_rgba(5,_5,_5,_0.95)]'>
                        <div className='bg-gradient-to-t from-background h-full w-full absolute'/>
                        <Image alt="Results" src={Results} quality={99} placeholder="blur" fill className='w-full h-full object-cover' />
                    </div>
                </div>
            </motion.div>
            <div onMouseMove={handleMouseMove} className='relative group bg-light-gray text-gray tracking-widest md:p-10 p-6 text-2xl text-center'>
                <motion.div
                    className="pointer-events-none md:block hidden absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: useMotionTemplate`
                                    radial-gradient(
                                    650px circle at ${mouseX}px ${mouseY}px,
                                    var(--glow),
                                    transparent 75%
                                    )
                                `,
                    }}
                />
                <motion.div className="absolute -inset-px md:hidden duration-500"
                            style={{
                                background: useMotionTemplate`
                                    radial-gradient(
                                    250px circle at 50%,
                                    var(--glow),
                                    transparent 85%
                                    )
                                `,
                            }}
                />

                <motion.div className="absolute -inset-px hidden group-hover:opacity-0 opacity-80 md:block duration-500"
                            style={{
                                background: useMotionTemplate`
                                    radial-gradient(
                                    550px circle at 50%,
                                    var(--glow),
                                    transparent 75%
                                    )
                                `,
                            }}
                />
                <h1 className="text-xl md:text-2xl">ARE YOU READY TO PUT THE WORK IN?</h1>
            </div>
        </div>
    )
}