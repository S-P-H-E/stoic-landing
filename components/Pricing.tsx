"use client"

import {motion, useMotionTemplate, useMotionValue} from 'framer-motion';
import {BsPeopleFill, BsStars} from 'react-icons/bs';
import {FaBook, FaCheck, FaGraduationCap, FaTrophy} from 'react-icons/fa';
import React from "react";
import clsx from 'clsx'
import CountdownButton from './CountdownButton';

export default function Pricing() {

    const features = [
        {
            id: 1,
            icon: <FaBook size={25}/>,
            name: 'Courses',
        },
        {
            id: 2,
            icon: <BsStars size={25}/>,
            name: 'AI Tools',
        },
        {
            id: 3,
            icon: <FaGraduationCap size={25}/>,
            name: 'In-Depth Tutorials',
        },
        {
            id: 4,
            icon: <BsPeopleFill size={25}/>,
            name: 'Community',
        },
        {
            id: 5,
            icon: <FaTrophy size={25}/>,
            name: 'No Experience Required',
        },
    ];

    const fadeInAnimationVariants2 = {
        initial: {
            opacity: 0,
            x: -50,
        },
        animate: (index: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.05 * index,
            },
        }),
    };

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        let currentTarget = event.currentTarget as HTMLDivElement;
        let {left, top} = currentTarget.getBoundingClientRect();

        mouseX.set(event.clientX - left);
        mouseY.set(event.clientY - top);
    }

    return (
        <motion.div id='pricing' className="px-8 pb-8 scroll-my-24" viewport={{once: true}} initial={{opacity: 0, scale: 0.75}} whileInView={{opacity: 1, scale: 1}} transition={{type: 'spring', damping: 20}}>
            <div className="max-w-8xl mx-auto my-12 flex flex-col items-center gap-4 ">
                <div>
                    <p className='text-description tracking-widest text-center'>JOIN THE 1%</p>
                    <h1 className="text-5xl font-medium lg:text-7xl lg:text-start text-center lg:leading-[5rem]">
                        The <mark className='bg-transparent font-semibold text-white'>choice</mark> is yours
                    </h1>
                </div>
            </div>

            <div className='rounded overflow-hidden border border-border min-h-[400px] w-full max-w-[900px] mx-auto'>
                <div onMouseMove={handleMouseMove} className='relative group bg-light-gray flex flex-col sm:flex-row gap-4 sm:gap-8 justify-between items-center p-10'>
                    <motion.div
                        className="md:block hidden pointer-events-none absolute -inset-px transition duration-300 group-hover:opacity-100 opacity-0"
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

                    <div>
                        <h1 className="font-medium sm:text-start text-center sm:text-5xl text-4xl">Take Action</h1>
                        <p className='text-description sm:text-start sm:text-base text-sm text-center tracking-widest'>Let&apos;s begin your journey...</p>
                    </div>

                    <div className="flex flex-col items-center md:items-end leading-3">
                        <h1 className="font-medium text-4xl md:text-5xl leading-5">$29.<span className="text-4xl">99</span>
                            <mark className='bg-transparent text-xl text-white italic'>/month</mark>
                        </h1>
                        <h2 className="text-2xl order-first md:order-last leading-tight items-center flex line-through text-description">$49.99<span className="text-lg italic">/month</span></h2>
                    </div>
                </div>

                <div className='p-8 flex flex-col gap-4'>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={fadeInAnimationVariants2}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            className='flex text-white gap-2 items-center'>
                            <FaCheck size={14}/>
                            <h1>{feature.name}</h1>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className='w-fit mx-auto'>
                <CountdownButton glitch scanLines/>
            </div>
        </motion.div>
    );
}
