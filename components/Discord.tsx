import Link from 'next/link';
import React from 'react';
import { SiDiscord } from 'react-icons/si';

export default function Discord() {
  const inviteLink = 'https://discord.gg/stoiccord';
  return (
    <Link
      href={inviteLink}
      target='_blank'
      className="z-[999] flex gap-2 items-center bg-light-gray hover:bg-border transition active:scale-90 fixed bottom-5 right-5 px-4 py-2 rounded-lg border border-border"
    >
      <SiDiscord />
      Join the community!
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 animate-ping rounded-full " />
    </Link>
  );
}
