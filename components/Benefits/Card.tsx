"use client"
import { useRef } from "react"
import Image from "next/image";
import { motion } from "framer-motion"
import clsx from 'clsx';
import Spline from '@splinetool/react-spline';

export default function Card(){
    const copy = [
        {
            image: <Image src='/images/book.png' alt='book' width={300} height={0}/>,
            icon: "/icon/edu.png",
            title: "Up-to-date Courses",
            description: "Get the best and up to date courses on social media from people who are active in the space."
        },
        {
            image: <Image src='/images/hand.png' alt='hand' width={300} height={0}/>,
            icon: "/icon/handshake.png",
            title: "The Best Community",
            description: "You'll have access to an amazing supportive community who you can network with and further."
        },
        {
            image: <Image src='/images/money.png' alt='money' width={300} height={0}/>,
            icon: "/icon/moneybag.png",
            title: "Huge Monetary Opportunities",
            description: "The Social Media space is a billion dollar industry and we'll be showing you how to get paid a fraction of that."
        },
        {
            image: <Spline scene="https://prod.spline.design/VZDR2R47yNAlFJd4/scene.splinecode" />,
            icon: "/icon/clock.png",
            title: "24/7 Support",
            description: "You'll have access to Stoic AI that will answer any of your social media questions even when we are offline."
        },
        {
            image: <Image src='/images/laptop.png' alt='laptop' width={200} height={0}/>,
            icon: "/icon/clock.png",
            title: "Innovative Platfrom",
            description: "We've built a platform like none other on the market it contains our courses, AI, resources and tools built to assist your journey"
        },
    ]

    const fadeInAnimationVariants = { 
        initial: {
            opacity: 0,
            y: 200,
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 5.05 * index,
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
                    
                    key={index} className={"border shadow-xl text-black p-10 rounded-3xl flex items-center gap-10 w-[80vw] mx-auto"}>
                        
                    <div className="w-[300px] h-[300px] flex items-center justify-center">
                        {info.image}
                    </div>
                    {/* <Image src={info.image} alt='edu' width={300} height={0} className="rounded-xl"/> */}
                    <div className={"w-full flex flex-col gap-4"}>
                    {/* <Image src={info.image} alt='edu' width={90} height={0} className="bg-[#181818] p-2 rounded-2xl"/> */}
                        <h1 className="text-4xl font-semibold">{info.title}</h1>
                        <p>{info.description}</p>
                    </div>
                </motion.div>
            ))}
        </>
    )
}