"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import React from "react";


export default function Header(){
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({target: ref, offset: ["start start", "end end"]})
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

    return(
        <div ref={ref}>
            <motion.div style={{y: backgroundY}} className="bg-white text-black p-10 rounded-b-[3rem] absolute">
                <div className="flex justify-between items-center font-semibold">
                    <div className="bg-[#F5F4F4] p-5 flex gap-7 rounded-xl w-fit">
                        <button>Benefits</button>
                        <button>About</button>
                        <button>Pricing</button>
                        <button>Contact</button>
                    </div>
                    <div className="flex gap-5">
                        <button>Login</button>
                        <button className="bg-[#F5F4F4] p-5 rounded-xl flex items-center gap-1">
                            Get Started
                            <BsArrowRightShort size={30}/>
                        </button>
                    </div>
                </div>
                <motion.h1 className="text-[11dvw] font-black w-fit mx-auto">STOIC PREMIUM</motion.h1>
                {/* <div className="absolute flex justify-center w-[97vw] top-[300px]">
                    <iframe className=" rounded-3xl aspect-video shadow1" width="1000" src="https://www.youtube-nocookie.com/embed/_Rye0lqTHOE?si=3w1jJsNUVgFNEan-&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div> */}
            </motion.div>
        </div>
    )
}