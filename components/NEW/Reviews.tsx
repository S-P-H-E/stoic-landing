"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Reviews() {
    
    const reviews = [
        {
          id: 1,
          text: "If anyone is thinking about upgrading, do it. Only been in there 15 minutes and it is awesome, so many guides and content to encorporate in your videos, great people to network with as well.",
        //   image: "https://cdn.discordapp.com/avatars/444898972046458880/0d57c117707379730e2ffff399fed496.webp?size=80",
          author: "Ozzy"
        },
        {
          id: 2,
          text: "If you are new to video editing and are looking for a place to receive 1-on-1 help and feedback, well, then you have found the right place. The staff members are welcoming and wonderful to chat with. Not only do they provide assistance, but they also offer creative ideas and supervised tutorials to expedite your learning. The coaching calls have proven quite helpful in receiving personalized feedback on each of my videos.",
          image: "https://cdn.discordapp.com/avatars/277460064531644416/be8c9f4771f325a4dd9c6025ea6887b7.webp?size=80",
          author: "Knowledge Kombat"
        },
        {
          id: 3,
          text: "exellent! Taking the guide with you guys, was the best idea and investment I made, really really really thanks so much",
          image: "https://cdn.discordapp.com/avatars/1121888745092812871/d36a6e750875da0ecd8799282fb9dcd9.webp?size=80",
          author: "The Last Rebel"
        },
    ]

    const fadeInBox = {
      initial: {
        opacity: 0,
        y: 100,
      },
      animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          delay: 0.15 * index,
        },
      }),
    };

  return (
    <>
      <div className="max-w-8xl mx-auto pb-20 px-8 flex flex-col items-center gap-6">
        <h1 className="text-5xl font-semibold text-center">
          Hundreds of
          <br />
          users talk about us.
        </h1>
        {/* <p className="w-[50vw] text-center font-medium text-2xl text-[#898989]">Empower your creative journey with our state-of-the-art platform, offering a 24/7 AI support system to guide you at every step. Easily convert videos for major social media platforms with our specialized tools. Dive into a rich resources library, providing all the assets you need for seamless editing. Whether you're utilizing our AI support, video converters, or resource library, our platform ensures you have the powerful yet familiar tools to craft your ultimate content.</p> */}
        <p className="w-[50vw] text-center font-medium text-2xl text-[#898989]">
          Here is what a few had to say.
        </p>
      </div>
      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-3 pb-20 px-8 gap-3 w-fit"
      >
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            className="bg-[#191919] rounded-2xl w-fullrounded-3xl p-5 relative flex flex-col justify-between gap-4"
            initial="initial"
            variants={fadeInBox}
            custom={index}
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <h1 className="text-[#c6c6c6] font-medium">
              &quot;{review.text}&quot;
            </h1>
            <div className="flex gap-3 items-center">
              <Image
                alt='Review Profile Picture'
                width={40}
                height={40}
                src={
                  review.image
                    ? review.image
                    : 'https://yt3.googleusercontent.com/ytc/AIf8zZQ6Beteem4h6iwgtemlku2M0sJjq64BgZFculaewg=s900-c-k-c0x00ffffff-no-rj'
                }
                className="rounded-full w-[40px]"
              />
              <h1 className="font-semibold">{review.author}</h1>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
