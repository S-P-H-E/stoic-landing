"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    const [launch, setLaunch] = useState(false)
    const router = useRouter();

    useEffect(() => {
        if (launch) {
        router.push('/countdown');
        }
    }, [launch, router]);

    if (launch) {
        return;
    }

    return(
        <div className="flex justify-center z-10 w-full md:fixed">
        <div className="flex justify-between m-5 p-5 w-full md:w-[800px] rounded-full bg-blur border border-[#181818] h-fit">
          <div className="w-full hidden md:flex items-center">
              <div className="flex gap-6">
                <button>Testimonials</button>
                <button>Features</button>
                <button>Pricing</button>
                <button>FAQs</button>
              </div>
          </div>
          <div className="w-full flex md:hidden px-3">
            <Image src={'/stoic.png'} alt="stoic" width={25} height={0}/>
          </div>

          <div className="w-full flex justify-end">
            <Link href={'https://app.stoiccord.com'} className="bg-[--text] text-[--bg] px-4 py-2 rounded-full font-semibold">Login</Link>
          </div>
        </div>
      </div>
    )
}