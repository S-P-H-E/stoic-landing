import clsx from 'clsx';
import {Playfair} from 'next/font/google';
import {BsPeopleFill} from "react-icons/bs";
import {FaBook} from "react-icons/fa";
import {MdOutlineTaskAlt} from "react-icons/md";
import {MdSimCardDownload} from "react-icons/md";
import {RiBrainFill} from "react-icons/ri";
import Image from "next/image";
import IphoneDashboard from '@/public/iphone-dashboard.png'
import {motion} from 'framer-motion'

const font = Playfair({
    subsets: ['latin'],
    weight: ['500'],
})

export default function Features2() {
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.04 * index,
            },
        }),
    };

    const features = [
        {
            id: 1,
            icon: <FaBook size={30}/>,
            text: "Up-to-date Courses"
        },
        {
            id: 2,
            icon: <BsPeopleFill size={30}/>,
            text: "Like-minded Community"
        },
        {
            id: 3,
            icon: <MdSimCardDownload size={30}/>,
            text: "High Quality Resources"
        },
        {
            id: 4,
            icon: <MdOutlineTaskAlt size={30}/>,
            text: "Productivity Features"
        },
        {
            id: 5,
            icon: <RiBrainFill size={30}/>,
            text: "24/7 AI Support"
        },
    ]
    return (
        <div className="flex w-fit mx-auto py-24">
            <motion.div viewport={{once: true}} initial={{x: 100, opacity:0}} whileInView={{x: 0, opacity: 1}} transition={{type: 'spring', damping: 15}} className="relative w-fit h-[700px]">
                <div className="w-full h-full bg-gradient-to-t from-[--bg] z-10 absolute"/>
                <div className="relative w-[800px] h-full">
                    <Image alt="Iphone dashboard" fill src={IphoneDashboard} quality={95} className="h-full w-full object-cover"/>
                </div>
            </motion.div>

            <motion.div viewport={{once: true}} initial={{opacity: 0}} transition={{type: 'tween', duration: 1}} whileInView={{opacity: 1}}>
                <p className="text-[--description] tracking-widest">GET ACCESS TO</p>
                <h1 className={clsx("text-8xl font-medium", font.className)}>
                    <mark className="bg-transparent text-white italic">Innovative</mark>
                    <br/> Features
                </h1>
                <div className='py-5 flex flex-col gap-10'>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            className='flex items-center gap-3'>
                            <div className='text-[--bg] bg-[--text] p-2 rounded-lg'>
                                {feature.icon}
                            </div>
                            <h1 className='text-xl font-medium'>{feature.text}</h1>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}