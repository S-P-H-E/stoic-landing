import { getCurrentYear } from '@/app/lib/utils';
import Link from 'next/link';

export default function Footer() {
  const currentYear = getCurrentYear();

  return (
    <div className=" bg-background p-8 border-t-2 border-border flex items-center justify-between mt-20">
        <div className="flex items-center justify-between w-full max-w-8xl mx-auto ">
      <h1 className="text-gray">
        {currentYear} © Stoic, All rights reserved.
      </h1>
      <div className="flex gap-2 items-center">
        <Link href="/Legal/Terms of Service.pdf" target="_blank">
          <button className="text-gray hover:underline">
            Terms of Service
          </button>
        </Link>
        <h1 className="text-gray">|</h1>
        <Link href="/Legal/Privacy Policy.pdf" target="_blank">
          <button className="text-gray hover:underline">
            Privacy Policy
          </button>
        </Link>
      </div>
        </div>
    </div>
  );
}
