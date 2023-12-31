import Hero from "@/components/Old/Hero/page";
import Navbar from "@/components/Old/Hero/Navbar";
import Benefits from "@/components/Old/Benefits/page";
import Courses from "@/components/Old/Software/page";

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
      <div className="overflow-hidden z-0">
        <Navbar />
      </div>
      <div className="overflow-hidden z-0">
        <Hero />
      </div>
      <div className="z-50">
        <Benefits />
      </div>
      <Courses />
    </>
  )
}
