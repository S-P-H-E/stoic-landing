import { getCurrentYear } from '@/app/lib/utils';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  const currentYear = getCurrentYear();

  return (
    <div className="max-w-8xl bg-[#0d0d0dff] p-20 rounded-2xl rounded-br-none rounded-bl-none border-2 border-b-0 border-[#1C1C1D] flex items-center justify-between mx-auto w-[80vw]">
      <h1 className="text-[#949494]">
        {currentYear} © Stoic, All rights reserved.
      </h1>
      <div className="flex gap-2">
        <Link href="/Legal/Terms of Service.pdf" target="_blank">
          <button className="text-[#949494] hover:underline">
            Terms of Service
          </button>
        </Link>
        <h1 className="text-[#949494]">|</h1>
        <Link href="/Legal/Privacy Policy.pdf" target="_blank">
          <button className="text-[#949494] hover:underline">
            Privacy Policy
          </button>
        </Link>
      </div>
    </div>
  );
}
