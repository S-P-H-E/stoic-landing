"use client"
import Image from "next/image";
import { BsArrowDownShort } from "react-icons/bs";
import Landing from '@/public/landing.png'
import Logo from '@/public/stoic.svg'
import { useScroll, useTransform, motion } from 'framer-motion'

export default function New(){

    return(
        <div>
            <div className="image"/>
            <img src='/wave.avif' className="absolute grayscale opacity-20 -z-10 w-[100vw]"/>

            <div className="flex w-[80vw] mx-auto p-10 justify-between items-center text-white">
                <div className="flex items-center gap-3">
                    {/* <Image src={Logo} alt='Logo' className="w-[25px]"/> */}
                    <h1 className="font-medium text-[1.24rem]">STOIC</h1>
                </div>
                <div className="flex gap-6">
                    <button>Features</button>
                    <button>Pricing</button>
                    <button>About Us</button>
                </div>
                <div>
                    <button className="bg-white px-4 py-2 font-semibold rounded-lg text-black">
                        Login
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-center p-10 pb-0 bg-gradient-to-t from-[#0140fd] via-[#002fbd] via-20% to-70% to-transparent">
                <div className="px-4 py-1 rounded-full bg-gradient-to-l from-[#0140fd]/20 to-[#002fbd]/0 font-semibold">
                    <h1 className="bg-gradient-to-r from-[#0140fd] to-[#002fbd] bg-clip-text text-transparent">
                        LEARN NOW
                    </h1>
                </div>
                <h1 className="text-7xl font-semibold bg-gradient-to-r from-white to-[#8f8f8f] bg-clip-text text-transparent p-5">Conquer The Algorithm.</h1>
                <p className="text-3xl mx-auto w-[800px] text-center mb-10 text-[#858585] font-medium">Learn how to get views, get paid and stop wasting time.</p>
                <div className="relative">
                    <div className="bg-gradient-to-t from-[#0140fd] to-transparent to-95% absolute w-full h-full z-10 opacity-20"/>
                    <Image src={Landing} className=" w-[90vw] border-[5px] border-b-0 rounded-b-none rounded-xl border-white/10 drop-shadow-md" alt='lanidng' placeholder="blur"/>
                </div>
            </div>

            <div className="p-20 flex flex-col items-center gap-6">
                <h1 className="text-5xl font-semibold text-center">Custom Platform.<br />Innovative Features.</h1>
                <p className="w-[50vw] text-center font-medium text-2xl text-[#898989]">Empower your creative journey with our state-of-the-art platform, offering a 24/7 AI support system to guide you at every step. Easily convert videos for major social media platforms with our specialized tools. Dive into a rich resources library, providing all the assets you need for seamless editing. Whether you're utilizing our AI support, video converters, or resource library, our platform ensures you have the powerful yet familiar tools to craft your ultimate content.</p>
            </div>
        </div>
    )
}