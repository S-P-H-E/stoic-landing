"use client"
import { BsFillPersonFill } from "react-icons/bs"
import { useScroll, useSpring, motion } from 'framer-motion'

export default function Hero(){
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress)

    const scrollInvert = 1 - Number(scrollYProgress);

    return(
        <motion.div style={{ scaleY: scrollInvert}} className="w-[1500px] mx-auto text-center h-[100dvh] flex flex-col justify-center gap-2"> 
            <motion.div style={{ scaleX: scaleX }} className="h-[10px] bg-red-500"/>

            <h1 className="text-4xl md:text-9xl font-semibold p-2">Conquer The Social Media Algorithm</h1>
            <p className="text-sm px-10 md:text-lg md:w-[700px] text-center mx-auto">Unleash your viral potential with our comprehensive coaching program, equipping you with proven strategies and expert guidance for social media fame and influence.</p>
            <button className="get-started">
                Get Started
            </button>
        </motion.div>
    )
}