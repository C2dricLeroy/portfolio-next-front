"use client";
import styles from './style.module.css';
import Header from "@/components/header/header";
import {useRouter} from "next/navigation";

export default function About() {
    const router = useRouter()
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <Header></Header>
            </div>
            <div className={styles.landingPage}>
                <div className={`${styles.option} ${styles.fadeIn}`} onClick={() => {router.push('/timeline')}}>
                    <h1 className={styles.title}>Mon Parcours</h1>
                </div>
                <div className={`${styles.option} ${styles.fadeIn}`} onClick={() => {router.push('/resume')}}>
                    <h1 className={styles.title}>Mon C.V.</h1>
                </div>
            </div>
        </div>
    )
}