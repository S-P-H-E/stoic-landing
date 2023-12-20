"use client"
import Image from "next/image";
import Landing from '@/public/landing.png'
import { useState } from "react";
import { FaGlobeAmericas, FaUserCircle } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Phone from '@/public/iphone.png'
import Stoic from '@/public/stoic.png'


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

    return(
        <div>
            <div className="image"/>
            {/*<img src='/wave.avif' className="absolute grayscale opacity-20 -z-10 w-[100vw]"/>*/}

            <div className="">
                <div className="flex w-[80vw] mx-auto p-10 justify-between items-center text-white">
                    <div className="flex items-center gap-3 w-[300px]">
                        <h1 className="font-medium text-[1.24rem]">STOIC</h1>
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

            <div className="p-20 flex flex-col items-center gap-6">
                <h1 className="text-5xl font-semibold text-center">Custom Platform.<br />Innovative Features.</h1>
                {/* <p className="w-[50vw] text-center font-medium text-2xl text-[#898989]">Empower your creative journey with our state-of-the-art platform, offering a 24/7 AI support system to guide you at every step. Easily convert videos for major social media platforms with our specialized tools. Dive into a rich resources library, providing all the assets you need for seamless editing. Whether you're utilizing our AI support, video converters, or resource library, our platform ensures you have the powerful yet familiar tools to craft your ultimate content.</p> */}
                <p className="w-[50vw] text-center font-medium text-2xl text-[#898989]">Explore the features that make STOIC Premium Unique.</p>
            </div>

            {/* Bento Grid */}
            <div className="flex w-[80vw] h-[650px] mx-auto gap-6">
                {/* <div className="border-2 border-[#1b1b1b] dot h-full w-full rounded-3xl flex flex-col">
                    <div className="flex flex-col items-center p-10 gap-4">
                        <h1 className="text-5xl font-semibold text-center w-fit">Up-to-date Courses</h1>
                        <button className="bg-white px-4 py-2 font-semibold rounded-lg text-black flex items-center gap-2 w-fit">
                            Join Premium
                            <FiArrowUpRight />
                        </button>
                    </div>

                    <div className="border border-b-0 border-[#1b1b1b] bg-[#0d0d0d] h-full transition-all cursor-pointer w-3/4 mx-auto rounded-t-2xl group relative overflow-hidden flex-col items-center justify-center">
                        <div className="p-6 flex flex-col justify-end h-full gap-3">
                            <h1 className="text-4xl font-medium text-center">After Effects</h1>
                            <p className="font-light text-center">Learn everything you need to know about After Effects</p>
                        </div>
                        <div className='absolute w-[200px] right-0 bottom-[-300px] h-[200px] bg-white rounded-full opacity-100 blur-[120px] transition duration-500 z-20'/>
                    </div>
                </div>

                <div className="w-full h-full flex flex-col gap-4">
                    <div className="bg-gradient-to-tl from-[#213ffa] via-[#062fec] to-[#213ffa] border-t border-l border-[#7caef8] h-1/2 w-full rounded-3xl flex flex-col items-center justify-center gap-3 relative">
                        <div className="flex gap-3 items-center justify-center">
                            <Image src={Stoic} alt="phone" className="h-[40px] w-fit"/>
                            <h1 className="text-4xl font-semibold">AI Support</h1>
                        </div>
                    </div>
                    <div className="border-2 border-[#1b1b1b] dot h-1/2 w-full rounded-3xl">

                    </div>
                </div> */}
                <div className="h-full w-full flex flex-col gap-6">
                    <div className="w-full flex gap-6 h-full">
                        <div className="border-2 border-[#1b1b1b] dot h-full w-full rounded-3xl flex flex-col">
                            <div className="flex flex-col items-center p-10 gap-4">
                                <h1 className="text-5xl font-semibold text-center w-fit">Up-to-date Courses</h1>
                                <button className="bg-white px-4 py-2 font-semibold rounded-lg text-black flex items-center gap-2 w-fit">
                                    Join Premium
                                    <FiArrowUpRight />
                                </button>
                            </div>

                            <div className="border border-b-0 border-[#1b1b1b] bg-[#0d0d0d] h-full transition-all cursor-pointer w-3/4 mx-auto rounded-t-2xl group relative overflow-hidden flex-col items-center justify-center">
                                <div className="p-6 flex flex-col justify-center h-full gap-3 text-[#8d8d8d]">
                                    <div className="font-medium text-center w-4/5 h-1/5 mx-auto bg-[#222222] rounded-md"/>
                                    <div className="font-light text-center w-3/5 h-1/5 mx-auto bg-[#222222] rounded-md"/>
                                </div>
                                <div className='absolute w-[200px] right-0 bottom-[-300px] h-[200px] bg-white rounded-full opacity-100 blur-[120px] transition duration-500 z-20'/>
                            </div>
                        </div>
                        <div className="w-full h-full flex flex-col gap-6">
                            <div className="bg-gradient-to-tl from-[#213ffa] via-[#062fec] to-[#213ffa] border-t border-l border-[#7caef8] h-full w-full rounded-3xl flex flex-col items-center justify-center gap-3 relative">
                                <div className="flex gap-6 items-center justify-center">
                                    {/* <Image src={Stoic} alt="phone" className="h-[40px] w-fit"/> */}
                                    <h1 className="text-4xl font-semibold">AI Support</h1>
                                </div>
                            </div>
                            <div className="border-2 border-[#1b1b1b] dot h-full w-full rounded-3xl flex flex-col items-center justify-center relative overflow-hidden">
                                <div className="rounded-xl bg-[#0d0d0dff] border-2 border-[#1b1b1b] p-4">
                                    <h1 className="text-5xl font-semibold text-center w-fit mx-auto">Community</h1>
                                    <p className="w-[350px] text-center font-medium text-md text-[#a8a8a8]">Meet like-minded individuals and help each other along your social media journey</p>
                                </div>
                                <div className='absolute w-[200px] right-0 bottom-[-300px] h-[200px] bg-white rounded-full opacity-100 blur-[120px] transition duration-500 z-20'/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-3/5 flex gap-6">
                        <div className="bg-gradient-to-tl from-[#213ffa] via-[#062fec] to-[#213ffa] border-t border-l border-[#7caef8] h-full w-4/5 rounded-3xl flex flex-col items-start justify-end gap-3 relative p-5">
                            <h1 className="text-4xl font-semibold">Custom Platform</h1>
                            <p className="text-center font-medium text-md text-[#a8a8a8]">Having a custom platform allows you to have the best curated experience </p>
                        </div>

                        <div className="border-2 border-[#1b1b1b] dot h-full w-1/5 rounded-3xl flex flex-col">

                        </div>

                    </div>
                </div>
                
                <div className="h-full w-2/5 flex flex-col gap-6">
                    <div className="border-2 border-[#1b1b1b] dot h-2/5 w-full rounded-3xl flex flex-col">

                    </div>
                    <div className="border-2 border-[#1b1b1b] dot h-4/5 w-full rounded-3xl flex flex-col">

                    </div>
                </div>

            </div>

            prices will be here

            <div className="bg-[#0d0d0dff] shadow-xl border-2 border-[#1b1b1b] rounded-3xl m-20 mx-auto w-[80vw] text-white h-[400px] flex justify-between items-center dot">
                <div className="flex flex-col gap-5 p-10">
                    <h1 className="text-6xl font-semibold w-[650px]">Begin using our cutting edge platform</h1>
                    <button className="bg-white text-black font-semibold px-5 py-3 flex items-center rounded-full gap-2 w-fit">
                        <FaGlobeAmericas />
                        Get Premium
                    </button>
                </div>
                <Image src={Phone} alt="phone" className="h-full w-fit"/>
            </div>
        </div>
    )
}