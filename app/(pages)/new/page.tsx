"use client"
import Image from "next/image";
import Landing from '@/public/landing.png'
import { useState } from "react";
import { FaGlobeAmericas, FaUserCircle, FaYoutube } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Phone from '@/public/iphone.png'
import Stoic from '@/public/stoic.png'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useSpring, animated, config } from 'react-spring';

type Visibility = "visible" | "hidden";

export default function New(){
    const [muted, setMuted] = useState('&muted=true')
    const [controls, setControls] = useState('&controls=false')
    const [visibility, setVisibility] = useState<Visibility>('visible')

    const handlePlay = () => {
        setMuted('')
        setControls('&controls=true')
        setVisibility('hidden')
    }

    const fadeInBox = { 
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                delay: 3.05 * index,
            }
            
        })
    }

    // Navbar Animation
    const logoAnimation = { 
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 3.05 * index,
            }
            
        })
    }
    const navAnimation1 = useSpring({
        from: { opacity: 0, transform: 'translateY(130px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        delay: 200
    })

    const navAnimation2 = useSpring({
        from: { opacity: 0, transform: 'translateY(130px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        delay: 250
    })

    const navAnimation3 = useSpring({
        from: { opacity: 0, transform: 'translateY(130px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        delay: 300
    })

    const shopIconAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(130px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        delay: 550
    })

    const reviews = [
        {
          id: 1,
          text: "If anyone is thinking about upgrading, do it. Only been in there 15 minutes and it is awesome, so many guides and content to encorporate in your videos, great people to network with as well.",
        //   image: "https://cdn.discordapp.com/avatars/444898972046458880/0d57c117707379730e2ffff399fed496.webp?size=80",
          author: "Ozzy"
        },
        {
          id: 2,
          text: "exellent! Taking the guide with you guys, was the best idea and investment I made, really really really thanks so much",
          image: "https://cdn.discordapp.com/avatars/1121888745092812871/d36a6e750875da0ecd8799282fb9dcd9.webp?size=80",
          author: "The Last Rebel"
        },
        {
          id: 3,
          text: "If you are new to video editing and are looking for a place to receive 1-on-1 help and feedback, well, then you have found the right place. The staff members are welcoming and wonderful to chat with. Not only do they provide assistance, but they also offer creative ideas and supervised tutorials to expedite your learning. The coaching calls have proven quite helpful in receiving personalized feedback on each of my videos.",
          image: "https://cdn.discordapp.com/avatars/277460064531644416/be8c9f4771f325a4dd9c6025ea6887b7.webp?size=80",
          author: "Knowledge Kombat"
        },
    ]

    return(
        <div>
            <div className="image"/>
            {/*<img src='/wave.avif' className="absolute grayscale opacity-20 -z-10 w-[100vw]"/>*/}

            <div className="">
                <div className="flex w-[80vw] mx-auto p-10 justify-between items-center text-white">
                    <div className="flex items-center gap-3 w-[300px]">
                        <motion.h1 
                            initial='initial'
                            variants={logoAnimation}
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            className="font-medium text-[1.24rem]">STOIC</motion.h1>
                    </div>
                    <div className="flex gap-6 px-2 py-2 rounded-xl">
                        <button className="text-[#666666] py-3 px-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-black">Features</button>
                        <button className="text-[#666666] py-3 px-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-black">Pricing</button>
                        <button className="text-[#666666] py-3 px-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-black">About Us</button>
                    </div>
                    <div className="flex gap-4 w-[300px] justify-end">
                        <button className="bg-[#0d0d0d] border border-[#535353] px-4 py-2 font-semibold rounded-lg text-white flex items-center gap-2">
                            Login
                            <FaUserCircle />
                        </button>
                        <button className="bg-white px-4 py-2 font-semibold rounded-lg text-black flex items-center gap-2">
                            Join Premium
                            <FiArrowUpRight />
                        </button>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <div className="flex flex-col items-center px-10 relative dot">
                <div className="absolute w-full h-full bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d] via-20% to-80% to-transparent "/>
                <div className="absolute w-full h-full bg-gradient-to-b from-[#0d0d0d] to-5% to-transparent "/>

                <div className="z-10 mt-10">
                    {/* <div className="px-3 py-1 rounded-full border border-[#535353] text-[#535353] bg-[#0d0d0d] font-semibold w-fit mx-auto">
                        <h1>LEARN NOW</h1>
                    </div> */}
                    <h1 className="text-7xl font-semibold bg-gradient-to-r from-white to-[#8f8f8f] bg-clip-text text-transparent p-5">Conquer The Algorithm.</h1>
                    <p className="text-3xl mx-auto w-[800px] text-center mb-10 text-[#858585] font-medium">Learn how to get views, get paid and stop wasting time.</p>
                </div>
                {/* <div className="relative">
                    <div className="bg-gradient-to-t from-[#0140fd] to-transparent to-95% absolute w-full h-full z-10 opacity-20"/>
                    <Image src={Landing} className=" w-[90vw] border-[5px] border-b-0 rounded-b-none rounded-xl border-white/10 drop-shadow-md" alt='lanidng' placeholder="blur"/>
                </div> */}
                <div className="w-[50vw] -z-0 m-5 aspect-video mx-auto">
                    <div style={{visibility: visibility}} className="absolute w-[50vw] aspect-video bg-black/60 flex items-center justify-center cursor-pointer rounded-3xl" onClick={handlePlay}>
                        <Image src="/images/play.png" alt='play' width={50} height={0}/>
                    </div>
                    <iframe
                        className="rounded-3xl shadow-xl  w-full h-full"
                        src={`https://customer-hyo06dqr7c3pgrtr.cloudflarestream.com/a07c199380af93ce7c2744ca470972ad/iframe?${controls}${muted}&preload=true&autoplay=true&loop=true&poster=https%3A%2F%2Fcustomer-hyo06dqr7c3pgrtr.cloudflarestream.com%2Fa07c199380af93ce7c2744ca470972ad%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600`}
                        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                        allowFullScreen={true}
                    ></iframe>
                </div>
            </div>


            {/* Features - Bento Grid */}
            <div className="p-20 flex flex-col items-center gap-6">
                <h1 className="text-5xl font-semibold text-center">Custom Platform.<br />Innovative Features.</h1>
                {/* <p className="w-[50vw] text-center font-medium text-2xl text-[#898989]">Empower your creative journey with our state-of-the-art platform, offering a 24/7 AI support system to guide you at every step. Easily convert videos for major social media platforms with our specialized tools. Dive into a rich resources library, providing all the assets you need for seamless editing. Whether you're utilizing our AI support, video converters, or resource library, our platform ensures you have the powerful yet familiar tools to craft your ultimate content.</p> */}
                <p className="w-[50vw] text-center font-medium text-2xl text-[#898989]">Explore the features that make STOIC Premium Unique.</p>
            </div>
            <div className="flex w-[80vw] h-[650px] mx-auto gap-6 mb-20">
                <div className="h-full w-full flex flex-col gap-6">
                    <div className="w-full flex gap-6 h-full">
                        <motion.div 
                            initial='initial'
                            variants={fadeInBox}
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}

                            className="border-2 border-[#1b1b1b] dot h-full w-full rounded-3xl flex flex-col">
                            <div className="flex flex-col items-center p-10 gap-4">
                                <h1 className="text-5xl font-semibold text-center w-fit">Up-to-date Courses</h1>
                                {/* <button className="bg-white px-4 py-2 font-semibold rounded-lg text-black flex items-center gap-2 w-fit">
                                    Join Premium
                                    <FiArrowUpRight />
                                </button> */}
                            </div>

                            <div className="border border-b-0 border-[#1b1b1b] bg-[#0d0d0d] h-full transition-all w-3/4 mx-auto rounded-t-2xl group relative overflow-hidden flex-col items-center justify-center">
                                <div className="p-6 flex flex-col justify-center h-full gap-3 text-[#8d8d8d]">
                                    <div className="font-medium text-center w-4/5 h-1/5 mx-auto bg-[#222222] rounded-md animate-pulse"/>
                                    <div className="font-light text-center w-3/5 h-1/5 mx-auto bg-[#222222] rounded-md animate-pulse"/>
                                </div>
                                <div className='absolute w-[200px] right-0 bottom-[-300px] h-[200px] bg-white rounded-full opacity-100 blur-[120px] transition duration-500 z-20'/>
                            </div>
                        </motion.div>
                        <div className="w-full h-full flex flex-col gap-6">
                            <motion.div 
                                initial='initial'
                                variants={fadeInBox}
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}

                                className="border-2 border-[#1b1b1b] dot h-full w-full rounded-3xl flex flex-col items-center justify-center relative overflow-hidden">
                                <div className='absolute w-[200px] right-0 bottom-[-300px] h-[200px] bg-white rounded-full opacity-100 blur-[120px] transition duration-500 z-20'/>
                                <h1 className="text-5xl font-semibold text-center w-fit mx-auto">Community</h1>
                                <p className="w-[350px] text-center font-medium text-md text-[#a8a8a8]">Meet like-minded individuals and help each other along your social media journey</p>
                            </motion.div>
                            <motion.div 
                                initial='initial'
                                variants={fadeInBox}
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}

                                className="bg-gradient-to-tl from-[#213ffa] via-[#062fec] to-[#213ffa] border-t border-l border-[#7caef8] h-full w-full rounded-3xl flex flex-col items-center justify-center gap-3 relative">
                                <div className="flex gap-6 items-center justify-center">
                                    <Image src={Stoic} alt="phone" className="h-[40px] w-fit"/>
                                    <h1 className="text-4xl font-semibold">S T O I C</h1>
                                </div>
                                
                            </motion.div>
                        </div>
                    </div>
                    <div className="w-full h-3/5 flex gap-6">
                        <motion.div 
                            initial='initial'
                            variants={fadeInBox}
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}

                            className="border-2 border-[#1b1b1b] dot h-full w-4/5 rounded-3xl flex flex-col items-start justify-end p-8">
                            <h1 className="text-5xl font-semibold">Custom Platform</h1>
                            <p className="text-center font-medium text-md text-[#a8a8a8]">Having a custom platform allows you to have the best curated experience </p>
                        </motion.div>

                        <div
                            className="border-2 border-[#1b1b1b] bg-repeat h-full w-1/5 rounded-3xl flex flex-col justify-center items-center gap-2 relative">
                            <FaYoutube size={80}/>
                            <h1 className="text-xl font-semibold">Video Converters</h1>
                            {/* <p className="text-center font-medium text-md text-[#a8a8a8]">Having a custom platform allows you to have the best curated experience </p> */}
                        </div>

                    </div>
                </div>
                
                <div className="h-full w-2/5 flex flex-col gap-6">
                    <motion.div 
                        initial='initial'
                        variants={fadeInBox}
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        className="border-2 border-[#1b1b1b] dot h-2/5 w-full rounded-3xl flex flex-col items-center justify-center relative overflow-hidden">
                        <h1 className="text-4xl font-semibold text-center w-1/2">High Quality Resources</h1>
                        <p className="font-medium text-md text-[#a8a8a8] text-center w-3/5">We have endless high quality resources for editing</p>
                        <div className='absolute w-[200px] -left-20 bottom-[-300px] h-[200px] bg-white rounded-full opacity-100 blur-[120px] transition duration-500 z-20'/>
                    </motion.div>
                    <motion.div
                     initial='initial'
                     variants={fadeInBox}
                     whileInView="animate"
                     viewport={{
                         once: true,
                     }}
                     className="border-2 border-[#1b1b1b] dot h-4/5 w-full rounded-3xl flex flex-col items-center justify-center p-5 relative overflow-hidden">
                            <div className='absolute w-[200px] -left-20 top-[-260px] h-[200px] bg-white rounded-full opacity-100 blur-[120px] transition duration-500 z-20'/>
                            <h1 className="text-4xl font-semibold text-center">24/7 AI Support</h1>
                            <p className="text-center font-medium text-md text-[#a8a8a8]">We have built an AI system that will be there to help you at all times during your path to social media conquest</p>
                    </motion.div>
                </div>
            </div>

            {/* Reviews */}
            <div className="p-20 flex flex-col items-center gap-6">
                <h1 className="text-5xl font-semibold text-center">Hundreds of<br />users talk about us.</h1>
                {/* <p className="w-[50vw] text-center font-medium text-2xl text-[#898989]">Empower your creative journey with our state-of-the-art platform, offering a 24/7 AI support system to guide you at every step. Easily convert videos for major social media platforms with our specialized tools. Dive into a rich resources library, providing all the assets you need for seamless editing. Whether you're utilizing our AI support, video converters, or resource library, our platform ensures you have the powerful yet familiar tools to craft your ultimate content.</p> */}
                <p className="w-[50vw] text-center font-medium text-2xl text-[#898989]">Here is what a few had to say.</p>
            </div>
            <div className="flex flex-wrap gap-3 mx-auto w-fit">
                {reviews.map(review => (
                    <div key={review.id} className="bg-[#191919] w-[550px] rounded-3xl p-5 relative flex flex-col justify-between gap-4">
                        <h1 className="text-[#c6c6c6] font-medium">"{review.text}"</h1>
                        <div className="flex gap-3 items-center">
                            <img src={review.image ? review.image : 'https://yt3.googleusercontent.com/ytc/AIf8zZQ6Beteem4h6iwgtemlku2M0sJjq64BgZFculaewg=s900-c-k-c0x00ffffff-no-rj'} className="rounded-full w-[40px]"/>
                            <h1 className="font-semibold">{review.author}</h1>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pricing */}
            <div className="p-20 flex flex-col items-center gap-6">
                <h1 className="text-5xl font-semibold text-center">Lets get you started.</h1>
                {/* <p className="w-[50vw] text-center font-medium text-2xl text-[#898989]">Empower your creative journey with our state-of-the-art platform, offering a 24/7 AI support system to guide you at every step. Easily convert videos for major social media platforms with our specialized tools. Dive into a rich resources library, providing all the assets you need for seamless editing. Whether you're utilizing our AI support, video converters, or resource library, our platform ensures you have the powerful yet familiar tools to craft your ultimate content.</p> */}
                <p className="w-[50vw] text-center font-medium text-2xl text-[#898989]">Pick the plan that fits your needs.</p>
            </div>

            {/* CTA */}
            <div className="bg-[#0d0d0dff] shadow-xl border-2 border-[#1b1b1b] rounded-3xl m-20 mx-auto w-[80vw] text-white h-[400px] flex justify-between items-center dot relative overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.01]">
                <div className="flex flex-col gap-5 p-10">
                    <h1 className="text-6xl font-semibold w-[650px]">Begin using our cutting edge platform</h1>
                    <button className="bg-white text-black font-semibold px-5 py-3 flex items-center rounded-full gap-2 w-fit">
                        <FaGlobeAmericas />
                        Get Premium
                    </button>
                </div>
                <Image src={Phone} alt="phone" className="h-full w-fit"/>

                <div className='absolute w-[2000px] right-[200px] bottom-[-500px] h-[500px] bg-[#272727] rounded-full opacity-0 group-hover:opacity-90 blur-[120px] transition duration-500 z-20'/>
            </div>
        </div>
    )
}