"use client"

import React, {useTransition} from 'react';
import {useRouter} from "next/navigation";
import {handleSubscription} from "@/app/lib/utils";
import {FaRegClock} from "react-icons/fa6";

const LaunchSale = () => {
    const [isPending, startTransition] = useTransition()

    const router = useRouter()

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        startTransition(async () => {
            try {
                e.preventDefault();

                const data = await handleSubscription(e);
                router.push(data);
            } catch (error: any) {
                console.error('Error during subscription:', error.message);
            }
        });
    };

    return (
        <div className="w-full text-sm bg-white/20 text-white/85 text-center mx-auto flex items-center uppercase justify-center px-4 py-2 gap-x-1 md:gap-x-1.5">
            <FaRegClock />
            <div className="flex flex-wrap gap-x-1 md:gap-x-1.5 items-center justify-center text-center">
            <h1>Limited time before price increase</h1>
                <button className="font-bold text-white underline underline-offset-4 active:scale-90 hover:text-white/80 transition" onClick={handleButtonClick}>JOIN NOW</button>
            </div>
        </div>
    );
};

export default LaunchSale;
