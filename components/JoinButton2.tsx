

import Link from 'next/link';
import styles from './styles/join.module.css';
import axios from 'axios';

const JoinButton2 = () => {

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
    <div>
      <button onClick={handleSubscription} className={styles.button}>UPGRADE</button>
    </div>
  );
};
export default JoinButton2;
