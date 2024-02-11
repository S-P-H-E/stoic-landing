"use client"

import clsx from 'clsx'
import BannerImage from '@/public/banner.png'
import CountdownButton from './CountdownButton'
import Image from "next/image";
import {motion} from 'framer-motion'

export default function BannerMessage() {
 return(
    <div className="h-[600px] flex flex-col items-center justify-center relative w-full my-4 px-5 mx-auto">
        <motion.div initial={{scale: 0.8, opacity: 0}} transition={{type: 'spring', damping: 20}} whileInView={{scale: 1, opacity: 1}} viewport={{once: true}}
                    className='flex flex-col justify-center items-center gap-6 max-w-6xl mx-auto'>
            <h1 className={clsx("text-4xl sm:text-5xl lg:text-[5.5rem] lg:max-w-[1000px] max-w-[600px] 2xl:text-8xl lg:leading-[5.5rem] text-center w-full")}>
                Over <mark className='bg-transparent font-semibold text-white'>5 Billion</mark> People are on social media <mark className='bg-transparent text-white font-semibold'>everyday</mark>
            </h1>
            <p className='text-description font-light lg:text-xl tracking-widest text-center'>It&apos;s never been easier to go viral.</p>

            <CountdownButton />
        </motion.div>
        <motion.div viewport={{once: true}} whileInView={{opacity: 1}} initial={{opacity: 0}} className='w-full h-[550px] top-0 left-0 absolute -z-10'>
            <div className='w-full h-full bg-gradient-to-t from-background via-transparent to-background z-10 absolute'/>
            <Image alt="Banner background" src={BannerImage} placeholder={"blur"} fill quality={95} className='w-full h-full object-cover'/>
        </motion.div>
    </div>
 )
}