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
    if (typeof window !== 'undefined') {
      window.location.assign(data);
    }
  };

  return (
    <button
      className={clsx('bg-[--highlight-low] border-b border-[--highlight] px-6 py-3 text-white flex items-center gap-2 w-fit transition duration-200 work-sans hover:shadow-2xl shadow-[--highlight]', !noGroup && 'group')}
      onClick={handleSubscription}
    >
      Join Premium
      <FiArrowUpRight className={clsx(!noGroup &&"group-hover:rotate-45 transition duration-200 text-[--highlight]")}/>
    </button>
  );
}
