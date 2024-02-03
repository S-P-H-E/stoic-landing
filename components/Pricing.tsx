import axios from 'axios';
import {motion} from 'framer-motion';
import {BsFillCheckCircleFill, BsPeopleFill, BsStars} from 'react-icons/bs';
import {FaBook, FaCheck, FaGraduationCap, FaStripe, FaTrophy} from 'react-icons/fa';
import JoinButton2 from './JoinButton2';
import React, {useTransition} from "react";
import {handleSubscription} from "@/app/lib/utils";
import {useRouter} from "next/navigation";
import {FiLoader} from "react-icons/fi";
import clsx from 'clsx'
import {Playfair} from 'next/font/google'
import CountdownButton from './CountdownButton';

const font = Playfair({
    subsets: ['latin'],
    weight: ['400'],
})

export default function Pricing() {

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

    const features = [
        {
            id: 1,
            icon: <FaBook size={25}/>,
            name: 'Courses',
        },
        {
            id: 2,
            icon: <BsStars size={25}/>,
            name: 'AI Tools',
        },
        {
            id: 3,
            icon: <FaGraduationCap size={25}/>,
            name: 'In-Depth Tutorials',
        },
        {
            id: 4,
            icon: <BsPeopleFill size={25}/>,
            name: 'Community',
        },
        {
            id: 5,
            icon: <FaTrophy size={25}/>,
            name: 'No Experience Required',
        },
    ];

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index,
            },
        }),
    };

    const fadeInAnimationVariants2 = {
        initial: {
            opacity: 0,
            x: -50,
        },
        animate: (index: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.05 * index,
            },
        }),
    };


    return (
        <motion.div initial={{opacity: 0, scale: 0.75}} whileInView={{opacity: 1, scale: 1}} transition={{type: 'spring', damping: 20}}>
            <div className="max-w-8xl mx-auto my-20 flex flex-col items-center gap-4">
                <div>
                    <p className='text-[--description] tracking-widest text-center'>JOIN THE 1%</p>
                    <h1 className={clsx("text-8xl", font.className)}>
                        The <mark className='bg-transparent text-white italic'>choice</mark> is yours
                    </h1>
                </div>
            </div>

            <div className='border border-[--border] h-[400px] w-[900px] mx-auto'>
                <div className='bg-[#141312] flex justify-between items-center p-10'>
                    <div>
                        <h1 className={clsx("text-5xl", font.className)}>Take Action</h1>
                        <p className='text-[--description] tracking-widest'>Let&apos;s begin your jounrey...</p>
                    </div>

                    <div className="flex flex-col items-end leading-2">
                        <h1 className={clsx("text-5xl leading-5", font.className)}>$29.99
                            <mark className='bg-transparent text-xl text-white italic'>/month</mark>
                        </h1>
                        <h2 className={clsx("text-3xl leading-tight line-through text-[--description]", font.className)}>$49.99</h2>
                    </div>
                </div>

                <div className='p-8 flex flex-col gap-4'>
                    {features.map((feature, index) => (
                        <motion.div
                             key={index}
                             custom={index}
                             variants={fadeInAnimationVariants2}
                             initial="initial"
                             whileInView="animate"
                             viewport={{
                                 once: true,
                             }} className='flex text-[--description] gap-2 items-center'>
                            <FaCheck size={14}/>
                            <h1>{feature.name}</h1>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className='w-fit mx-auto'>
                <CountdownButton glitch scanLines/>
            </div>
        </motion.div>
    );
}
