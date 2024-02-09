import clsx from 'clsx'
import { Playfair } from 'next/font/google'
import CountdownButton from './CountdownButton'
import {motion} from 'framer-motion'
import Results from '@/public/results_undedited.png'
import Image from "next/image";

const font = Playfair({
    subsets: ['latin'],
    weight: ['500'],
})

export default function About() {
    return (
        <div className='overflow-x-hidden flex flex-col gap-10 py-20'>
            <motion.div initial={{opacity: 0, scale: 0.8}} whileInView={{opacity: 1, scale: 1}} transition={{type: 'spring', damping: 25}} viewport={{once:true}}>
                <div className="flex flex-col items-center justify-center px-4">
                    <p className="text-[--description] tracking-widest">A FEW WEEKS IS ALL YOU NEED</p>
                    <h1 className={clsx("text-5xl lg:text-7xl text-center font-medium", font.className)}>You don&apos;t need <br/><mark className="bg-transparent text-white italic">years</mark> to get good</h1>
                </div>
                <div className='flex lg:flex-row flex-col px-10 items-center justify-center mx-auto lg:w-fit gap-10 mt-10'>
                    <div className='flex flex-col lg:w-auto w-full text-center lg:text-start lg:items-start justify-center items-center gap-5'>
                        <h1 className={clsx("text-4xl lg:text-5xl font-medium", font.className)}>A few weeks of focus <br/> will get you there</h1>
                        <div className='text-[--gray] w-full lg:w-1/2 flex flex-col gap-5'>
                            <p>...only if you are dedicated and are prepared to be coached.</p>
                            <p className="lg:w-[400px] xl:w-[500px]">We will give you the exact guidance and information you need to learn social media. We offer the best assets to assist you in your social media journey.</p>
                        </div>
                        <CountdownButton />
                    </div>
                    <div className='order-first lg:order-last w-[85%] aspect-[16/7] lg:aspect-auto lg:w-[500px] lg:h-[220px] xl:w-[620px] xl:h-[280px] relative rounded-xl overflow-hidden shadow-[0_0px_35px_rgba(5,_5,_5,_0.95)]'>
                        <div className='bg-gradient-to-t from-[--bg] h-full w-full absolute'/>
                        <Image alt="Results" src={Results} quality={99} placeholder="blur" fill className='w-full h-full object-cover' />
                    </div>
                </div>
            </motion.div>
            <div className='bg-[#161616] text-[--gray] tracking-widest p-10 text-2xl text-center'>
                ARE YOU READY TO PUT THE WORK IN?
            </div>
        </div>
    )
}