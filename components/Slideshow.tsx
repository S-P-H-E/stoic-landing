import clsx from 'clsx'
import { Playfair } from 'next/font/google'
import CountdownButton from './CountdownButton'
import Platform1 from '@/public/Platform/01.png'
import Platform2 from '@/public/Platform/02.png'
import Platform3 from '@/public/Platform/03.png'
import Platform4 from '@/public/Platform/04.png'
import Image from "next/image";
import {motion} from 'framer-motion'

const font = Playfair({
    subsets: ['latin'],
    weight: ['400'],
})

export default function Slideshow() {
    const cards = [
        {
            url: Platform1,
            title: 'Courses',
            description:
            "Here you'll find detailed courses on after effects edits and short form content to increase your chances of success.",
            id: 0,
            reverse: true
        },
        {
            url: Platform2,
            title: 'Community',
            description:
            'Ask questions and get help from us and network with other individuals who are on the same journey.',
            id: 1,
            reverse: false
        },
        {
            url: Platform3,
            title: 'Resources',
            description:
            'We make and collect very high quality resources that we use ourselves then give to you.',
            id: 2,
            reverse: true
        },
        {
            url: Platform4,
            title: 'Converters',
            description:
            'Just to make things easier for you we also have video converters for all the major video social media platforms',
            id: 3,
            reverse: false
        },
    ];

    return (
        <div className="flex flex-col py-20 w-[80vw] max-w-8xl mx-auto">
            <motion.div viewport={{ once: true }} initial={{opacity: 0 }} whileInView={{opacity: 1}} className='flex justify-between w-full'>
                <div>
                    <p className='text-[--description] tracking-widest'>GET FULL ACCESS TO</p>
                    <h1 className={clsx("text-[5.5rem] leading-[5rem]", font.className)}>
                        The power of<br/> <mark className='bg-transparent text-white italic'>Stoic University</mark>
                    </h1>
                    <div className='bg-gradient-to-l from-white h-[1px] w-full mt-5'/>
                </div>
                <div className='flex flex-col justify-center'>
                    <CountdownButton />
                </div>
            </motion.div>
            <div className='py-20 flex flex-col gap-32'>
                {cards.map(card => (
                    <div key={card.id} className={clsx('flex justify-between', card.id % 2 === 0 && 'flex-row-reverse')}>
                        <motion.div transition={{type: 'spring', damping: 20}} initial={card.reverse ? {x: 100, opacity: 0} : {x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} viewport={{once: true}} className='w-[600px] h-[400px] relative bg-red-500'>
                            {/* <div className='bg-gradient-to-t from-[--bg] absolute z-10 w-full h-full'/> */}
                            <Image alt="Platform Image" fill quality={90} src={card.url} className='w-full h-full object-cover'/>
                        </motion.div>
                        <motion.div transition={{type: 'spring', damping: 20}} initial={card.reverse ? {x: -100, opacity: 0} : {x: 100, opacity: 0}} viewport={{once: true}} whileInView={{x: 0, opacity: 1}} className='p-20 flex flex-col justify-center'>
                            <h1 className={clsx("text-[5.5rem] leading-[5rem]", font.className)}>{card.title}</h1>
                            <p className='w-[400px] text-[--description] tracking-widest'>{card.description}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}