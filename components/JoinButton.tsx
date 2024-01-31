import axios from 'axios';
import clsx from 'clsx';
import { FiArrowUpRight } from 'react-icons/fi';

export default function JoinButton({noGroup}: {noGroup?: boolean}) {
  const handleSubscription = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
          '/api/payment',
          // Add your request payload here if needed
          {},
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
      );

      if (typeof window !== undefined) {
        // Access window.location only on the client side
        window.location.assign(data);
      }
    } catch (error) {
      console.error('Error while processing subscription:', error);
      // Handle error as needed
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
