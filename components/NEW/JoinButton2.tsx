import Link from 'next/link';
import styles from '../styles/join.module.css';

const JoinButton2 = () => {
  return (
    <div>
      <Link href="#">
        <button className={styles.button}>UPGRADE</button>
      </Link>
    </div>
  );
};
export default JoinButton2;
