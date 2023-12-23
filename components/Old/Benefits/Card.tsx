'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import Spline from '@splinetool/react-spline';
import { BsStars } from 'react-icons/bs';
import { IoSend } from 'react-icons/io5';

export default function Card() {
  const copy = [
    {
      image: <Image src="/images/book.png" alt="book" width={300} height={0} />,
      title: 'AI-Powered Support System',
      description:
        'Harness the power of AI to assist you in your social media journey.',
    },
    {
      image: <Image src="/images/hand.png" alt="hand" width={300} height={0} />,
      icon: '/icon/handshake.png',
      title: 'The Best Community',
      description:
        "You'll have access to an amazing supportive community who you can network with and further.",
    },
    {
      image: (
        <Image src="/images/money.png" alt="money" width={300} height={0} />
      ),
      icon: '/icon/moneybag.png',
      title: 'Huge Monetary Opportunities',
      description:
        "The Social Media space is a billion dollar industry and we'll be showing you how to get paid a fraction of that.",
    },
    {
      image: (
        <Spline scene="https://prod.spline.design/VZDR2R47yNAlFJd4/scene.splinecode" />
      ),
      icon: '/icon/clock.png',
      title: '24/7 Support',
      description:
        "You'll have access to Stoic AI that will answer any of your social media questions even when we are offline.",
    },
    {
      image: (
        <Image src="/images/laptop.png" alt="laptop" width={200} height={0} />
      ),
      icon: '/icon/clock.png',
      title: 'Innovative Platfrom',
      description:
        "We've built a platform like none other on the market it contains our courses, AI, resources and tools built to assist your journey",
    },
  ];

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 5.05 * index,
      },
    }),
  };

  return (
    <div className="p-10 flex flex-col gap-20">
      {copy.map((info, index) => (
        <motion.div
          initial="initial"
          variants={fadeInAnimationVariants}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
          key={index}
          className="flex gap-10 items-center justify-between"
        >
          <div className="flex flex-col gap-6">
            <h1 className="text-6xl font-medium w-[500px]">{info.title}</h1>
            <p>{info.description}</p>
          </div>
          <div className="border bg-black text-white shadow p-10 flex flex-col justify-center items-center rounded-3xl w-[500px] h-[300px]">
            <div className="w-full flex flex-col items-center justify-between h-full">
              <h1 className="text-4xl font-semibold h-full flex items-center text-[#464646]">
                STOIC AI
              </h1>
              <div className="flex w-full gap-2">
                <div className="border-2 border-[#252525] text-[#474747] px-4 py-2 rounded-full w-full flex items-center gap-2">
                  <BsStars />
                  <h1>Ask me anything...</h1>
                </div>
                <div className="border-2 border-[#252525] text-[#474747] px-3 py-2 rounded-full flex items-center gap-2">
                  <IoSend />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
