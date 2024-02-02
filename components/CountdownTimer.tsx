import React, {useEffect, useMemo, useRef, useState} from 'react';
import {AnimatePresence,motion} from "framer-motion";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;


const CountdownTimer = () => {
    const targetDate = useMemo(() => new Date('February 5, 2024'), []); // Memoize the targetDate initialization
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            const updatedTimeLeft = handleCountdown();
            setTimeLeft(updatedTimeLeft);
        }, 1000);

        return () => clearInterval(intervalRef.current || undefined);
    }, []);

    function handleCountdown() {

        const now = new Date();

        const distance = +targetDate - +now;

        const days = Math.floor(distance / DAY);
        const hours = Math.floor((distance % DAY) / HOUR);
        const minutes = Math.floor((distance % HOUR) / MINUTE);
        const seconds = Math.floor((distance % MINUTE) / SECOND);


        return {
            days,
            hours,
            minutes,
            seconds
        };
    };
    return (
        <div className='flex bg-black/50 backdrop-blur-sm p-2 md:py-6 md:px-4 rounded-2xl gap-4 border border-[#141414]'>
            <div className="w-full max-w-5xl mx-auto flex items-center py-6">
                <CountdownItem num={timeLeft.days} text="Days"/>
                <CountdownItem num={timeLeft.hours} text="Hours"/>
                <CountdownItem num={timeLeft.minutes} text="Minutes"/>
                <CountdownItem num={timeLeft.seconds} text="Seconds"/>
            </div>
        </div>
    );
};

const CountdownItem = ({num, text}: { num: number; text: string }) => {
    return (
        <div className="h-full flex flex-col gap-1 items-center justify-center w-[75px] mx-2 md:w-[115px]">
            <div className="w-full text-center relative overflow-hidden">
                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={num}
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "-100%" }}
                        transition={{ type: 'spring', ease: "backIn", duration: 0.75 }}
                        className="block text-6xl md:text-7xl font-semibold"
                    >
                        {num}
                    </motion.span>
                </AnimatePresence>
            </div>
            <span className="">
                {text}
            </span>
        </div>
    );
};

export default CountdownTimer;