"use client"

import clsx from 'clsx'
import Platform1 from '@/public/Platform/new/1.png'
import Platform2 from '@/public/Platform/new/2.jpg'
import Platform3 from '@/public/Platform/new/3.jpg'
import Platform4 from '@/public/Platform/new/4.jpg'
import Platform5 from '@/public/Platform/new/5.jpg'
import Image from "next/image";
import {motion} from 'framer-motion'
import React from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {FiArrowRight} from "react-icons/fi";

export default function Slideshow() {
    // TODO: ADD GLOW EFFECT

/*    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        let currentTarget = event.currentTarget as HTMLDivElement;
        let {left, top} = currentTarget.getBoundingClientRect();

        mouseX.set(event.clientX - left);
        mouseY.set(event.clientY - top);
    }*/

    const cards = [
        {
            url: Platform1,
            title: 'Courses',
            description:
                "Here you'll find detailed courses on after effects edits and short form content to increase your chances of success.",
            id: 0,
            reverse: true,
            link: true
        },
        {
            url: Platform2,
            title: 'Community',
            description:
                'Get access to guidance and personal feedback from professionals, and build connections with like-minded individuals',
            id: 1,
            reverse: false
        },
        {
            url: Platform3,
            title: 'Resources',
            description:
                'Get access to a massive library with over 200+ audios, clips, presets and much more.',
            id: 2,
            reverse: true
        },
        {
            url: Platform4,
            title: 'Video and Text Lessons',
            description:
                'Benefit from both video and text lessons packed with valuable content.',
            id: 3,
            reverse: false
        },
        {
            url: Platform5,
            title: 'Converters',
            description:
                'Just to make things easier for you we also have video converters for all the major social media platforms',
            id: 4,
            reverse: true
        },
    ];


    return (
        <div id="features" className="scroll-my-20 flex flex-col pt-20 pb-8 w-[80vw] max-w-8xl mx-auto">
            <motion.div viewport={{ once: true }} initial={{opacity: 0 }} whileInView={{opacity: 1}}
                        className='flex flex-col lg:flex-row gap-8 justify-center items-center w-full'>
                <div>
                    <p className='text-description text-center tracking-widest'>GET FULL ACCESS TO</p>
                    <h1 className="text-5xl md:text-7xl text-center font-medium lg:text-[5.5rem] lg:leading-[5rem]">
                        The power of <mark className='bg-transparent font-semibold text-white'><br className="sm:hidden md:block xl:hidden"/>Stoic 2.0</mark>
                    </h1>
                    <div className='bg-gradient-to-l from-white h-[1px] w-full mt-5'/>
                </div>
     {/*           <div className='h-fit my-auto'>
                    <CountdownButton />
                </div>*/}
            </motion.div>
            <div className='overflow-hidden py-20 flex flex-col sm:gap-28 gap-20 mt-4'>
                {cards.map(card => (
                    <div key={card.id} className={clsx('flex md:w-[95%] lg:w-full mx-auto gap-2 lg:gap-16 relative flex-col lg:flex-row justify-between', card.id % 2 === 0 ? 'lg:flex-row-reverse px-8 py-4 xl:px-12' : 'px-8 py-4 xl:px-12')}>
                        <motion.div transition={{type: 'spring', damping: 20}} initial={card.reverse ? {x: 100, opacity: 0} : {x: -150, opacity: 0}} whileInView={{x: 0, opacity: 1}} viewport={{once: true}}
                                    className='z-10 shadow-[0_0px_30px_rgba(5,_5,_5,_0.3)] shadow-black rounded-xl w-full aspect-[180/121] relative'>
                            {/* <div className='bg-gradient-to-t from-background absolute z-10 w-full h-full'/> */}
                            <Image placeholder="blur" alt="Platform Image" fill quality={95} src={card.url} className='h-full object-cover rounded-xl'/>
                        </motion.div>
                        <motion.div transition={{type: 'spring', damping: 20, delay: .13}} initial={card.reverse ? {x: -100, opacity: 0} : {x: 150, opacity: 0}} viewport={{once: true}} whileInView={{x: 0, opacity: 1}}
                                    className={clsx('z-10 2xl:p-20 flex flex-col gap-2 justify-center lg:mt-0 mt-4', card.id % 2 === 0 && 'items-end text-end lg:text-start lg:items-baseline')}>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-[5.5rem] max-w-[600px] lg:leading-[5rem]">{card.title}</h1>
                            <p className='w-full lg:w-[300px] 2xl:w-[390px] text-description tracking-widest'>{card.description}</p>
                            {card.link &&
                            <Link href={`#${card.title.toLowerCase()}`}>
                                <Button variant="secondary" className="flex gap-2 group active:scale-95 transition">
                                    Check them out
                                    <FiArrowRight className="group-hover:-rotate-45 transition"/>
                                </Button>
                            </Link>
                            }
                        </motion.div>

                        <motion.div initial={{opacity: 0, scale: 0.75}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}}
                                    transition={{stiffness: 150, damping: 25, delay: .27, type: 'spring'}}
                                    className="border group border-border absolute h-[110%] -top-6 inset-0 bg-light-gray rounded-xl">
     {/*                       <motion.div
                                className="md:block hidden pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-500 group-hover:opacity-100"
                                style={{
                                    background: useMotionTemplate`
                                    radial-gradient(
                                    350px circle at ${mouseX}px ${mouseY}px,
                                    var(--glow),
                                    transparent 85%
                                    )
                                `,
                                }}
                            />*/}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}