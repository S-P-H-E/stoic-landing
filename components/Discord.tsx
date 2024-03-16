'use client';
import Link from 'next/link';
import React from 'react';
import { SiDiscord } from 'react-icons/si';
import { motion, spring } from 'framer-motion';

export default function Discord() {
  const inviteLink = 'https://discord.gg/stoiccord';
  return (
    <motion.div
      className="z-[999] active:scale-90 fixed bottom-5 right-5"
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        type: 'spring',
        damping: 15,
        stiffness: 200,
      }}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
    >
      <Link
        className="flex gap-2 items-center bg-light-gray hover:bg-border transition md:px-4 p-2 rounded-lg border border-border"
        href={inviteLink}
        target="_blank"
      >
        <SiDiscord size={22} />
        <p className="font-medium md:flex hidden">Join the community!</p>
        <div className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 w-2 h-2 md:w-4 md:h-4 bg-emerald-500 animate-ping rounded-full " />
      </Link>
    </motion.div>
  );
}
