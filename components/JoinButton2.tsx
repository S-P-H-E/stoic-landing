"use client"

import Link from 'next/link';
import styles from './styles/join.module.css';
import axios from 'axios';

const JoinButton2 = () => {

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
    <div>
      <button onClick={handleSubscription} className={styles.button}>UPGRADE</button>
    </div>
  );
};
export default JoinButton2;
