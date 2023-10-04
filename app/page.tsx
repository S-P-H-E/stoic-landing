import Video from "@/components/Video";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { BsFillPersonFill, BsFillPeopleFill, BsFillCalendarDateFill, BsStars } from "react-icons/bs"
import { BiTimeFive, BiLogoStripe } from "react-icons/bi"

export default function Home() {
  const reviews = [
    {
      id: 1,
      text: "If anyone is thinking about upgrading, do it. Only been in there 15 minutes and it&quot;s awesome, so many guides and content to encorporate in your videos, great people to network with as well.",
      image: "https://cdn.discordapp.com/avatars/444898972046458880/0d57c117707379730e2ffff399fed496.webp?size=80",
      author: "Ozzy"
    },
    {
      id: 2,
      text: "exellent! Taking the guide with you guys, was the best idea and investment I made, really really really thanks so much",
      image: "https://cdn.discordapp.com/avatars/1121888745092812871/d36a6e750875da0ecd8799282fb9dcd9.webp?size=80",
      author: "The Last Rebel"
    },
    {
      id: 3,
      text: "If you are new to video editing and are looking for a place to receive 1-on-1 help and feedback, well, then you&quot;ve found the right place. The staff members are welcoming and wonderful to chat with. Not only do they provide assistance, but they also offer creative ideas and supervised tutorials to expedite your learning. The coaching calls have proven quite helpful in receiving personalized feedback on each of my videos.",
      image: "https://cdn.discordapp.com/avatars/277460064531644416/be8c9f4771f325a4dd9c6025ea6887b7.webp?size=80",
      author: "Knowledge Kombat"
    },
  ]
  return (
    <>
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
            <Link href={'https://app.stoiccord.com'} className="bg-[--highlight] text-[--bg] px-4 py-2 rounded-full font-semibold">Login</Link>
          </div>
        </div>
      </div>

      <div className="pt-8 md:pt-[150px] md:w-[1200px] mx-auto text-center">
        <div className="border-l border-b w-fit mx-auto rounded-full px-4 py-1 border-[#353535] bg-gradient-to-t from-[#0D0E12] flex items-center gap-1">
          <BsFillPersonFill />
          1,000 + members
          </div>
        <h1 className="text-4xl md:text-8xl font-semibold p-2">Conquer The Social Media Algorithm</h1>
        <p className="text-sm px-10 md:text-base md:w-[600px] m-auto">Unleash your viral potential with our comprehensive coaching program, equipping you with proven strategies and expert guidance for social media fame and influence.</p>
       <div className="gradient-01 h-[500px] w-full md:w-[1200px] mx-auto absolute"/>
      </div>
      {/* <Video src={'/video.mp4'}/> */}
      <div className='p-10'>
        <div className="md:w-[1000px] md:h-[560px] m-auto relative">
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

      <div className="flex justify-between w-[1100px] mx-auto p-20">
        <div className="flex items-center gap-2">
          <BiTimeFive size={30}/>
          IMMEDIATE ACCESS
        </div>
        <div className="flex items-center gap-2">
          <BsFillCalendarDateFill size={30}/>
          ALWAYS UP-TO-DATE
        </div>
        <div className="flex items-center gap-2">
          <BiLogoStripe size={30}/>
          SECURE PURCHASE
        </div>
      </div>


      <div className="w-[1000px] mx-auto mt-20 flex flex-col items-center text-center">
          <div className="p-10 flex flex-col items-center text-center">
            <BsFillPeopleFill size={40}/>
            <h1 className="text-6xl font-semibold p-3">Over a thousand members</h1>
            <p>across the discord server and membership</p>
          </div>
        {reviews.map((review) => (
          <div key={review.id} className="w-fit pt-10 px-10 border border-[#111111] m-5 rounded-2xl h-fit flex flex-col items-center bg-gradient-to-tr from-[#060708]">
            <h1 className="text-xl md:w-[500px] text-center">&quot;{review.text}&quot;</h1>
            <div className="flex justify-between w-full items-center gap-2 border-t border-r border-[#111216] m-5 p-2 rounded-2xl">
              <Image src={review.image} alt="profile" width={40} height={0} className="rounded-full"/>
              <h1>{review.author}</h1>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <div className="p-10 flex flex-col items-center text-center">
          <BsStars size={40}/>
          <h1 className="text-6xl font-semibold p-3">Many features</h1>
          <p className="w-[700px]"> We take immense pride in presenting you with a comprehensive array of powerful tools and capabilities that are designed to elevate your experience and help you achieve more.</p>
        </div>
      </div>
    </>
  )
}
