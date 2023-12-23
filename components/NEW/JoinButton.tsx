'use client';

import axios from 'axios';
import clsx from 'clsx';
import { FiArrowUpRight } from 'react-icons/fi';

export default function JoinButton({noGroup}: {noGroup?: boolean}) {
  const handleSubscription = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { data } = await axios.post(
      '/api/payment',
      // {
      //     priceId: 'price_1OQDteJVAR9FxLkw3SLA8UZv',
      //     promoId: 'promo_1OQDw8JVAR9FxLkwrpCHI1xO'
      // },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    window.location.assign(data);
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
