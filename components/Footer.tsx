import {getCurrentYear} from '@/app/lib/utils';
import Link from 'next/link';
import {MdOutlineEmail} from "react-icons/md";

export default function Footer() {
    const currentYear = getCurrentYear();

    return (
        <div className="bg-background p-8 border-t-2 border-border flex-col gap-4 flex items-start justify-center mt-20">
            <div className="flex items-center justify-between w-full max-w-8xl mx-auto">
                <h1 className="text-description">
                    {currentYear} © Stoic, All rights reserved.
                </h1>
                <div className="flex gap-2 items-center">
                    <Link href="/Legal/Terms of Service.pdf" target="_blank">
                        <button className="text-description hover:underline">
                            Terms of Service
                        </button>
                    </Link>
                    <h1 className="text-description">|</h1>
                    <Link href="/Legal/Privacy Policy.pdf" target="_blank">
                        <button className="text-description hover:underline">
                            Privacy Policy
                        </button>
                    </Link>
                </div>
            </div>
            <div className="max-w-8xl mx-auto flex items-start justify-between gap-4 w-full text-start">
                <p className="md:w-1/2 w-full text-xs font-thin text-description flex justify-start items-start">Everything taught within this course is educational purposes only, it is up to
                    each student to implement and
                    do the work.
                    Our team does not guarantee any financial success
                </p>
                <Link className="flex gap-1.5 active:scale-95 text-description items-center hover:text-white transition" href="mailto:stoic@stoiccord.com">
                    <MdOutlineEmail/>
                    Contact Us
                </Link>
            </div>
        </div>
    );
}
