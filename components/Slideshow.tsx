"use client"

import clsx from 'clsx'
import CountdownButton from './CountdownButton'
import Platform1 from '@/public/Platform/01.png'
import Platform2 from '@/public/Platform/02.png'
import Platform3 from '@/public/Platform/03.png'
import Platform4 from '@/public/Platform/04.png'
import Image from "next/image";
import {motion} from 'framer-motion'

export default function Slideshow() {
    const cards = [
        {
            url: Platform1,
            title: 'Courses',
            description:
                "Here you'll find detailed courses on after effects edits and short form content to increase your chances of success.",
            id: 0,
            reverse: true
        },
        {
            url: Platform2,
            title: 'Community',
            description:
                'Ask questions and get help from us and network with other individuals who are on the same journey.',
            id: 1,
            reverse: false
        },
        {
            url: Platform3,
            title: 'Resources',
            description:
                'We make and collect very high quality resources that we use ourselves then give to you.',
            id: 2,
            reverse: true
        },
        {
            url: Platform4,
            title: 'Converters',
            description:
                'Just to make things easier for you we also have video converters for all the major video social media platforms',
            id: 3,
            reverse: false
        },
    ];

    return (
        <div className="flex flex-col pt-20 pb-8 w-[80vw] max-w-8xl mx-auto">
            <motion.div viewport={{ once: true }} initial={{opacity: 0 }} whileInView={{opacity: 1}}
                        className='flex flex-col lg:flex-row gap-8 justify-center items-center w-full'>
                <div>
                    <p className='text-description text-center tracking-widest'>GET FULL ACCESS TO</p>
                    <h1 className="text-5xl md:text-7xl font-medium lg:text-[5.5rem] lg:leading-[5rem]">
                        The power of <mark className='bg-transparent font-semibold text-white'>Stoic 2.0</mark>
                    </h1>
                    <div className='bg-gradient-to-l from-white h-[1px] w-full mt-5'/>
                </div>
     {/*           <div className='h-fit my-auto'>
                    <CountdownButton />
                </div>*/}
            </motion.div>
            <div className='overflow-x-hidden py-20 flex flex-col gap-24 mt-4'>
                {cards.map(card => (
                    <div key={card.id} className={clsx('flex relative flex-col xl:flex-row justify-between', card.id % 2 === 0 ? 'xl:flex-row-reverse pr-12' : 'pl-12')}>
                        <motion.div transition={{type: 'spring', damping: 20}} initial={card.reverse ? {x: 100, opacity: 0} : {x: -150, opacity: 0}} whileInView={{x: 0, opacity: 1}} viewport={{once: true}}
                                    className='z-10 shadow-[0_0px_40px_rgba(5,_5,_5,_0.3)] shadow-black rounded-xl w-full h-[50svw] xl:w-[600px] xl:h-[400px] relative'>
                            {/* <div className='bg-gradient-to-t from-background absolute z-10 w-full h-full'/> */}
                            <Image alt="Platform Image" fill quality={95} src={card.url} className='w-full h-full object-cover rounded-xl'/>
                        </motion.div>
                        <motion.div transition={{type: 'spring', damping: 20}} initial={card.reverse ? {x: -100, opacity: 0} : {x: 150, opacity: 0}} viewport={{once: true}} whileInView={{x: 0, opacity: 1}}
                                    className={clsx('z-10 xl:p-20 flex flex-col justify-center xl:mt-0 mt-4', card.id % 2 === 0 && 'items-end text-end xl:text-start xl:items-baseline')}>
                            <h1 className="text-5xl lg:text-6xl 2xl:text-[5.5rem] lg:leading-[5rem]">{card.title}</h1>
                            <p className='w-full xl:w-[300px] 2xl:w-[390px] text-description tracking-widest'>{card.description}</p>
                        </motion.div>

                        <motion.div initial={{opacity:0, scale: 0.75}} whileInView={{opacity: 1, scale: 1}} viewport={{once:true}} transition={{stiffness: 150, damping: 25,delay: .4, type: 'spring'}}
                                    className="absolute h-[115%] -top-8 inset-0 bg-light-gray rounded-xl"/>
                    </div>
                ))}
            </div>
        </div>
    )
}