import clsx from 'clsx'
import { Playfair } from 'next/font/google'
import CountdownButton from './CountdownButton'

const font = Playfair({
    subsets: ['latin'],
    weight: ['500'],
})

export default function About() {
    return (
        <div className='flex flex-col gap-10 py-20'>
            <div className="flex flex-col items-center justify-center">
                <p className="text-[--description] tracking-widest">A FEW WEEKS IS ALL YOU NEED</p>
                <h1 className={clsx("text-7xl text-center font-medium", font.className)}>You don't need <br/><mark className="bg-transparent text-white italic">years</mark> to get good</h1>
            </div>
            <div className='flex items-center mx-auto w-fit gap-16'>
                <div className='flex flex-col gap-5'>
                    <h1 className={clsx("text-5xl font-medium", font.className)}>A few weeks of focus <br/> will get you there</h1>
                    <div className='text-[--gray] flex flex-col gap-5'>
                        <p>...only if you are dedicated and are prepared to be coached.</p>
                        <p className='w-[500px]'>We will give you the exact guidance and information you need to learn social media. We offer the best assets to assist you in your social media journey.</p>
                    </div>
                    <CountdownButton />
                </div>
                <div className='w-[600px] h-[600px] relative'>
                    {/* <div className='bg-gradient-to-t from-[--bg] h-full w-full absolute'/> */}
                    <img src='laptop-results.png' className='w-full h-full object-cover drop-shadow-xl' />
                </div>
                
            </div>
            <div className='bg-[#161616] text-[--gray] tracking-widest p-10 text-2xl text-center'>
                ARE YOU READY TO PUT THE WORK IN?
            </div>
        </div>
    )
}