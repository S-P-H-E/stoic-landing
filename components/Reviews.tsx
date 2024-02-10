"use client"

import {motion, useMotionTemplate, useMotionValue} from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx'
import React from "react";
export default function Reviews() {

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        let currentTarget = event.currentTarget as HTMLDivElement;
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(event.clientX - left);
        mouseY.set(event.clientY - top);
    }

    let mouseX2 = useMotionValue(0);
    let mouseY2 = useMotionValue(0);

    function handleMouseMove2(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        let currentTarget = event.currentTarget as HTMLDivElement;
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX2.set(event.clientX - left);
        mouseY2.set(event.clientY - top);
    }

    let mouseX3 = useMotionValue(0);
    let mouseY3 = useMotionValue(0);

    function handleMouseMove3(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        let currentTarget = event.currentTarget as HTMLDivElement;
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX3.set(event.clientX - left);
        mouseY3.set(event.clientY - top);
    }
    
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
          text: "Excellent! Taking the guide with you guys, was the best idea and investment I made, really really really thanks so much",
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
      <div className="max-w-8xl mx-auto pb-8 px-8 flex flex-col items-center gap-2 lg:gap-6">
        <h1 className="text-5xl lg:text-[5.5rem] lg:leading-[5rem] text-center font-semibold">
          <mark className='bg-transparent text-white font-medium'>Hundreds</mark> of
          <br/>
          users talk about us.
        </h1>
        <p className="text-center text-description tracking-widest">
          Here is what a few had to say.
        </p>
      </div>
      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-3 pb-20 px-8 gap-6 w-fit"
      >
        {reviews.map((review, index) => (
            <motion.div
                key={review.id}
                className="bg-light-gray group rounded w-full max-w-[650px] border border-border p-5 relative flex flex-col justify-between gap-4"
                initial="initial"
                variants={fadeInBox}
                custom={index}
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                onMouseMove={index > 1 ? handleMouseMove3 : index > 0 ? handleMouseMove2 : handleMouseMove}
            >
                <motion.div
                    className="md:block hidden pointer-events-none absolute -inset-px rounded-md opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: useMotionTemplate`
                                    radial-gradient(
                                    650px circle at ${index > 1 ? mouseX3 : index > 0 ? mouseX2 : mouseX}px ${index > 1 ? mouseY3 : index > 0 ? mouseY2 : mouseY}px,
                                    var(--glow),
                                    transparent 75%
                                    )
                                `,
                    }}
                />
                <h1 className={clsx("text-highlight font-medium", review.text.length < 200 && 'text-lg')}>
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
