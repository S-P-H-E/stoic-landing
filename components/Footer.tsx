import { getCurrentYear } from '@/app/lib/utils';
import Link from 'next/link';

export default function Footer() {
  const currentYear = getCurrentYear();

  return (
    <div className=" bg-[#0d0d0dff] p-20 border-t-2  border-[#1C1C1D] flex items-center justify-between mt-20">
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
