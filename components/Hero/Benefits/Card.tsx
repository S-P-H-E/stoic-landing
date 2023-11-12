"use client"
import { useRef } from "react"
import Image from "next/image";
import { motion } from "framer-motion"

export default function Card(){
    const copy = [
        {
            image: "/images/library.jpg",
            icon: "/icon/edu.png",
            title: "Up-to-date Courses",
            description: "Get the best and up to date courses on social media from people who are active in the space."
        },
        {
            image: "/images/community.jpg",
            icon: "/icon/handshake.png",
            title: "The Best Community",
            description: "You'll have access to an amazing supportive community whom you can network with and further."
        },
        {
            image: "/images/counter.jpg",
            icon: "/icon/moneybag.png",
            title: "Huge Monetary Opportunities",
            description: "The Social Media space is a billion dollar industry and we'll be showing you how to get paid a fraction of that."
        },
        {
            image: "/images/robot.jpg",
            icon: "/icon/clock.png",
            title: "24/7 Support",
            description: "You'll have access to Stoic AI that will answer any of your social media questions even when we are offline"
        },
    ]

    const fadeInAnimationVariants = { 
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.010 * index,
            }
        })
      }

    return(
        <>
            {copy.map((info, index) => (
                <motion.div 
                    initial='initial'
                    variants={fadeInAnimationVariants}
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                    
                    key={index} className="border shadow-xl text-black p-10 rounded-3xl flex items-center gap-10 w-[80vw] mx-auto">
                    <Image src={info.image} alt='edu' width={300} height={0} className="rounded-xl"/>
                    <div className="w-[600px] flex flex-col gap-4">
                    {/* <Image src={info.image} alt='edu' width={90} height={0} className="bg-[#181818] p-2 rounded-2xl"/> */}
                        <h1 className="text-4xl font-semibold">{info.title}</h1>
                        <p>{info.description}</p>
                    </div>
                </motion.div>
            ))}
        </>
    )
}