'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import Stoic from '@/public/stoic.png';
import JoinButton from './JoinButton';

export default function Features() {
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
        delay: 3 * index,
      },
    }),
  };

  return (
    <>
      <div className="p-20 flex flex-col items-center gap-6 max-w-8xl mx-auto">
        <h1 className="text-5xl font-semibold text-center">
          Custom Platform.
          <br />
          Innovative Features.
        </h1>
        {/* <p className="w-[50vw] text-center font-medium text-2xl text-[#898989]">Empower your creative journey with our state-of-the-art platform, offering a 24/7 AI support system to guide you at every step. Easily convert videos for major social media platforms with our specialized tools. Dive into a rich resources library, providing all the assets you need for seamless editing. Whether you're utilizing our AI support, video converters, or resource library, our platform ensures you have the powerful yet familiar tools to craft your ultimate content.</p> */}
        <p className="w-[50vw] text-center font-medium text-2xl text-[#898989]">
          Explore the features that make STOIC Premium Unique.
        </p>
      </div>
      <div className="flex w-[80vw] h-[650px] mx-auto gap-6 mb-20 max-w-8xl">
        <div className="h-full w-full flex flex-col gap-6">
          <div className="w-full flex gap-6 h-full">
            <motion.div
              initial="initial"
              variants={fadeInBox}
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="border-2 border-[#1b1b1b] dot h-full w-full rounded-3xl flex flex-col"
            >
              <div className="flex flex-col items-center p-10 gap-4">
                <h1 className="text-5xl font-semibold text-center w-fit">
                  Up-to-date Courses
                </h1>
                {/* <JoinButton/> */}
              </div>

              <div className="border border-b-0 border-[#1b1b1b] bg-[#0d0d0d] h-full transition-all w-3/4 mx-auto rounded-t-2xl group relative overflow-hidden flex-col items-center justify-center">
                <div className="p-6 flex flex-col justify-center h-full gap-3 text-[#8d8d8d]">
                  <div className="font-medium text-center w-4/5 h-1/5 mx-auto bg-[#222222] rounded-md animate-pulse" />
                  <div className="font-light text-center w-3/5 h-1/5 mx-auto bg-[#222222] rounded-md animate-pulse" />
                </div>
                <div className="absolute w-[200px] right-0 bottom-[-300px] h-[200px] bg-white rounded-full opacity-100 blur-[120px] transition duration-500 z-20" />
              </div>
            </motion.div>
            <div className="w-full h-full flex flex-col gap-6">
              <motion.div
                initial="initial"
                variants={fadeInBox}
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className="border-2 border-[#1b1b1b] dot h-full w-full rounded-3xl flex flex-col items-center justify-center relative overflow-hidden"
              >
                <div className="absolute w-[200px] right-0 bottom-[-300px] h-[200px] bg-white rounded-full opacity-100 blur-[120px] transition duration-500 z-20" />
                <h1 className="text-5xl font-semibold text-center w-fit mx-auto">
                  Community
                </h1>
                <p className="w-[350px] text-center font-medium text-md text-[#a8a8a8]">
                  Meet like-minded individuals and help each other along your
                  social media journey
                </p>
              </motion.div>
              <motion.div
                initial="initial"
                variants={fadeInBox}
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className="bg-gradient-to-tl from-[#213ffa] via-[#062fec] to-[#213ffa] border-t border-l border-[#7caef8] h-full w-full rounded-3xl flex flex-col items-center justify-center gap-3 relative"
              >
                <div className="flex gap-6 items-center justify-center">
                  <Image
                    placeholder="blur"
                    src={Stoic}
                    alt="phone"
                    className="h-[40px] w-fit"
                  />
                  <h1 className="text-4xl font-semibold">S T O I C</h1>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="w-full h-3/5 flex gap-6">
            <motion.div
              initial="initial"
              variants={fadeInBox}
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="border-2 border-[#1b1b1b] dot h-full w-4/5 rounded-3xl flex flex-col items-start justify-end p-8"
            >
              <h1 className="text-5xl font-semibold">Custom Platform</h1>
              <p className="text-center font-medium text-md text-[#a8a8a8]">
                Having a custom platform allows you to have the best curated
                experience{' '}
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              variants={fadeInBox}
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="border-2 border-[#1b1b1b] bg-repeat h-full w-1/5 rounded-3xl flex flex-col justify-center items-center gap-2 relative dot"
            >
              <FaYoutube size={80} />
              <h1 className="text-xl font-semibold">Video Converters</h1>
              {/* <p className="text-center font-medium text-md text-[#a8a8a8]">Having a custom platform allows you to have the best curated experience </p> */}
            </motion.div>
          </div>
        </div>

        <div className="h-full w-2/5 flex flex-col gap-6">
          <motion.div
            initial="initial"
            variants={fadeInBox}
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="border-2 border-[#1b1b1b] dot h-2/5 w-full rounded-3xl flex flex-col items-center justify-center relative overflow-hidden"
          >
            <h1 className="text-4xl font-semibold text-center w-1/2">
              High Quality Resources
            </h1>
            <p className="font-medium text-md text-[#a8a8a8] text-center w-3/5">
              We have endless high quality resources for editing
            </p>
            <div className="absolute w-[200px] -left-20 bottom-[-300px] h-[200px] bg-white rounded-full opacity-100 blur-[120px] transition duration-500 z-20" />
          </motion.div>
          <motion.div
            initial="initial"
            variants={fadeInBox}
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="border-2 border-[#1b1b1b] dot h-4/5 w-full rounded-3xl flex flex-col items-center justify-center p-5 relative overflow-hidden"
          >
            <div className="absolute w-[200px] -left-20 top-[-260px] h-[200px] bg-white rounded-full opacity-100 blur-[120px] transition duration-500 z-20" />
            <h1 className="text-4xl font-semibold text-center">
              24/7 AI Support
            </h1>
            <p className="text-center font-medium text-md text-[#a8a8a8]">
              We have built an AI system that will be there to help you at all
              times during your path to social media conquest
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
