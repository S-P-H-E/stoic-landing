'use client';

import axios from 'axios';
import clsx from 'clsx';
import { FiArrowUpRight } from 'react-icons/fi';
import React from "react";

export default function JoinButton({noGroup}: {noGroup?: boolean}) {
  const handleSubscription = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
/*        body: JSON.stringify({
          priceId: 'price_1OQDteJVAR9FxLkw3SLA8UZv',
          promoId: 'promo_1OQDw8JVAR9FxLkwrpCHI1xO',
        }),*/
      });

      if (!response.ok) {
        new Error(`Something wrong happened with your checkout! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error: any) {
      console.error('Error during fetch:', error.message);
    }
  };

  return (
    <button
      className={clsx('bg-white px-4 py-2 font-semibold rounded-lg text-black flex items-center gap-2 w-fit hover:bg-white/[.85] transition duration-200', !noGroup && 'group')}
      onClick={handleSubscription}
    >
      Join Premium
      <FiArrowUpRight className={clsx(!noGroup &&"group-hover:rotate-45 transition duration-200")}/>
    </button>
  );
}
