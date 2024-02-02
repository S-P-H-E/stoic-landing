import clsx from 'clsx';
import { Playfair } from 'next/font/google';
import { BsPeopleFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";
import { MdSimCardDownload } from "react-icons/md";
import { RiBrainFill } from "react-icons/ri";

const font = Playfair({
    subsets: ['latin'],
    weight: ['500'],
})

export default function Features2() {
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
            <div className="relative w-fit h-[700px]">
                <div className="w-full h-full bg-gradient-to-t from-[--bg] z-10 absolute"/>
                <img src="iphone-dashboard.png" className="h-full w-[800px] object-cover"/>
            </div>
            
            <div>
                <p className="text-[--description] tracking-widest">GET ACCESS TO</p>
                <h1 className={clsx("text-8xl font-medium", font.className)}><mark className="bg-transparent text-white italic">Innovative</mark><br /> Features</h1>
                <div className='py-5 flex flex-col gap-10'>
                    {features.map(feature => (
                        <div key={feature.id} className='flex items-center gap-3'>
                            <div className='text-[--bg] bg-[--text] p-2 rounded-lg'>
                                {feature.icon}
                            </div>
                            <h1 className='text-xl font-medium'>{feature.text}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}