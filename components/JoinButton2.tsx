"use client"

import Link from 'next/link';
import styles from '../styles/join.module.css';
import axios from 'axios';
import React, {useTransition} from "react";
import {handleSubscription} from "@/app/lib/utils";
import {useRouter} from "next/navigation";
import {FiLoader} from "react-icons/fi";

const JoinButton2 = () => {

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
        <div>
            <button disabled={isPending} onClick={handleButtonClick} className={styles.button}>{isPending ?
                <div className="gap-2 flex items-center"><FiLoader className="animate-spin"/> Processing
                </div> : 'UPGRADE'}</button>
        </div>
    );
};
export default JoinButton2;
