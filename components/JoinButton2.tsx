"use client"

import Link from 'next/link';
import styles from '../styles/join.module.css';
import axios from 'axios';
import React from "react";

const JoinButton2 = () => {

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
    <div>
      <button onClick={handleSubscription} className={styles.button}>UPGRADE</button>
    </div>
  );
};
export default JoinButton2;
