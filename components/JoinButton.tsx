"use client"

import axios from 'axios';
import clsx from 'clsx';
import {FiArrowUpRight, FiLoader} from 'react-icons/fi';
import React, {useTransition} from "react";
import {handleSubscription} from "@/app/lib/utils";
import {useRouter} from "next/navigation";

export default function JoinButton({noGroup}: {noGroup?: boolean}) {

  const [isPending, startTransition] = useTransition()

  const router = useRouter()

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    startTransition(async () => {
      try {
        e.preventDefault();

        const data = await handleSubscription(e);
        router.push(data);
      } catch (error: any) {
        console.error('Error during subscription:', error.message);
      }
    });
  };

  return (
    <button
        disabled={isPending}
      className={clsx('border disabled:opacity-50 rounded-md active:scale-95 px-4 py-2 text-white flex items-center gap-2 w-fit hover:bg-white hover:text-black transition duration-300', !noGroup && 'group')}
      onClick={handleButtonClick}
    >
      {isPending ? <div className="gap-2 flex items-center"><FiLoader className="animate-spin"/> Processing </div>: 'Join Premium'}
      <FiArrowUpRight className={clsx(!noGroup &&"group-hover:rotate-45 transition duration-300")}/>
    </button>
  );
}
