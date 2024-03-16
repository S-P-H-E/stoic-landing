import Image from 'next/image';
import React from 'react';
import Phone from '@/public/iphone.png';
import JoinButton from './JoinButton';

export default function CallToAction() {

    return (
        <div
            className="bg-background max-w-8xl mx-auto shadow-xl border-2 border-border rounded-2xl m-20 w-5/6 md:w-3/4 text-white h-[400px] flex lg:flex-row flex-col justify-between items-center dot relative overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.01]">
            <div className="flex relative flex-col gap-6 justify-center pb-8 items-center lg:justify-center lg:items-start pt-10 p-4 lg:p-10">
                <h1 className="text-3xl text-center lg:text-start lg:text-5xl font-medium max-w-[450px] lg:max-w-[600px] w-full">
                    Begin using our cutting edge platform
                </h1>
                <div className="z-10">
                    <JoinButton noGroup/>
                </div>
            </div>
            <Image src={Phone} placeholder='blur' alt="Phone" className="absolute object-cover -bottom-[25%] md:-bottom-[25%] lg:bottom-0 lg:relative h-full w-fit"/>

            <div className="absolute w-full lg:right-[200px] bottom-[-500px] h-[500px] bg-white/25 rounded-full opacity-0 group-hover:opacity-100 blur-[120px] transition duration-500 z-20"/>
        </div>
    );
}
