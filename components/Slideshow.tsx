import clsx from 'clsx'
import { Playfair } from 'next/font/google'
import CountdownButton from './CountdownButton'

const font = Playfair({
    subsets: ['latin'],
    weight: ['400'],
})

export default function Slideshow() {
    return (
        <div className="flex flex-col w-fit mx-auto py-20">
            <div className='flex gap-[10rem]'>
                <div>
                    <p className='text-[--description] tracking-widest'>GET FULL ACCESS TO</p>
                    <h1 className={clsx("text-[5.5rem] leading-[5rem]", font.className)}>
                        The power of<br/> <mark className='bg-transparent text-white italic'>Stoic University</mark>
                    </h1>
                </div>
                <div className='flex flex-col justify-center'>
                    <CountdownButton />
                </div>
            </div>
            <div className='flex items-center max-w-[100vw]'>
                <div>

                </div>
                <div>
                
                </div>
            </div>
        </div>
    )
}