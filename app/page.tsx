import Video from "@/components/Video";
import Image from "next/image";
import Script from "next/script";
import { BsFillPersonFill } from "react-icons/bs"

export default function Home() {
  return (
    <>
      <div className="flex justify-between p-10 w-[1700px] m-auto">
        <div className="w-full">
            <div className="flex gap-5">
              <button>Features</button>
              <button>Pricing</button>
              <button>FAQs</button>
            </div>
        </div>
        <div className="w-full flex justify-center">
          <Image src={'/stoic.png'} alt="stoic" width={25} height={25}/>
        </div>
        <div className="w-full flex justify-end">
          <button className="bg-[--highlight] text-[--bg] px-4 py-1 rounded-md font-semibold">Login</button>
        </div>
      </div>

      <div className="pt-20 w-[1200px] mx-auto text-center">
        <div className="border-l border-b w-fit mx-auto rounded-full px-4 py-1 border-[#353535] bg-gradient-to-t from-[#0D0E12] flex items-center gap-1">
          <BsFillPersonFill />
          1,000 + members
          </div>
        <h1 className="text-8xl font-semibold p-2">Amplify Your Social Media Impact</h1>
        <p className="w-[600px] m-auto">Unleash your viral potential with our comprehensive coaching program, equipping you with proven strategies and expert guidance for social media fame and influence.</p>
       <div className="gradient-01 h-[500px] w-[1200px] mx-auto absolute"/>
      </div>
      {/* <Video src={'/video.mp4'}/> */}
      <div className='p-10'>
      <div style={{ width: "1000px", height: "560px", margin: "0 auto", position: "relative"}}>
          <iframe 
            src="https://player.vimeo.com/video/870967715?quality=1080p&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            style={{ position: "relative", width: "100%", height: "100%", borderRadius: "25px"}} 
            title="This Is The Future of Education"
          ></iframe>
        </div>
        <Script src="https://player.vimeo.com/api/player.js" strategy="beforeInteractive" />
        </div>
    </>
  )
}
