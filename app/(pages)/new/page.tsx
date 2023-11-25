import Image from "next/image";
import { BsArrowDownShort } from "react-icons/bs";
import Landing from '@/public/landing.webp'
import Logo from '@/public/stoic.svg'

export default function New(){

    return(
        <div>
            <div className="flex w-[80vw] mx-auto p-10 items-center gap-3">
                <Image src={Logo} alt='Logo' className="w-[25px]"/>
                <h1 className="font-medium text-[1.24rem]">STOIC</h1>
            </div>

            <div className="flex flex-col items-center p-10 gap-10 bg-gradient-to-t from-[#002fff] via-[#050046] via-50% to-90% to-transparent">
                <h1 className="text-8xl font-semibold">Make money online</h1>
                <p className="text-xl mx-auto w-[700px] text-center">Design your site on a familiar free-form canvas. Visually set up your breakpoints to make it responsive.</p>
                <Image src={Landing} className="grayscale" alt='lanidng'/>
            </div>

            <div className="p-10">
                <h1>Hello</h1>
            </div>
        </div>
    )
}