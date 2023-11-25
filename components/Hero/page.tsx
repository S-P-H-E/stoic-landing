"use client"
import { BsFillPersonFill } from "react-icons/bs"
import { useScroll, useTransform, motion } from 'framer-motion'
import { useState } from "react"
import Image from "next/image";

type Visibility = "visible" | "hidden";

export default function Hero(){
    const { scrollYProgress } = useScroll()
    const position = useTransform(scrollYProgress, [0, 1], [-100, 2500])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
    const scale2 = useTransform(scrollYProgress, [0, 1], [1, -10]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, -1])
    // const rotate = useTransform(scrollYProgress, [0, 1], [1, -100])

    const [muted, setMuted] = useState('&muted=true')
    const [controls, setControls] = useState('&controls=false')
    const [visibility, setVisibility] = useState<Visibility>('visible')

    const handlePlay = () => {
        setMuted('')
        setControls('&controls=true')
        setVisibility('hidden')
    }

    return(
        <>
            <div className="h-full w-full absolute gradient-01 -z-10 bottom-[500px]"/>
            <div className="w-[70vw] mx-auto text-center flex flex-col items-center justify-center gap-2 m-20">
                <motion.div style={{y: position, scale: scale, opacity: opacity}} className="flex flex-col justify-center items-center h-[100dvh]"> 
                    {/* <motion.div style={{ scaleX: scrollYProgress }} className="h-[10px] bg-red-500"/> */}

                    <h1 className="text-4xl md:text-[3vw] mt-[10vh] p-4 uppercase"><mark className="bg-transparent text-white font-semibold">Conquer</mark> The Social Media Algorithm</h1>
                    <p className="text-sm px-10 py-2 md:text-[1.4vw] text-center mx-auto">Learn how to get views, get paid and stop wasting time</p>
                    
                    <motion.div className="w-[50vw] -z-0 m-5 aspect-video mx-auto">
                        <div style={{visibility: visibility}} className="absolute w-[50vw] aspect-video bg-black/60 flex items-center justify-center cursor-pointer rounded-3xl" onClick={handlePlay}>
                            <Image src="/images/play.png" alt='play' width={50} height={0}/>
                        </div>
                        <iframe
                            className="rounded-3xl shadow-xl  w-full h-full"
                            src={`https://customer-hyo06dqr7c3pgrtr.cloudflarestream.com/a07c199380af93ce7c2744ca470972ad/iframe?${controls}${muted}&preload=true&autoplay=true&loop=true&poster=https%3A%2F%2Fcustomer-hyo06dqr7c3pgrtr.cloudflarestream.com%2Fa07c199380af93ce7c2744ca470972ad%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600`}
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                            allowFullScreen={true}
                        ></iframe>
                    </motion.div>

                    {/* <button className="get-started">
                        Get Started
                    </button> */}
                </motion.div>
            </div>
        </>
    )
}

// 21000
// 

// style={{ position: 'relative', scale: scale2}}