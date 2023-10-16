"use client";

import styles from './style.module.css'
import Link from 'next/link';
import {usePathname} from "next/navigation";

export default function Header() {

    const pathName = usePathname();
    return (
        <header className={styles.header}>
            <nav className={styles.navigationHeader}>
                <Link href="/home" className={styles.linkContainer}>
                    <p className={pathName === '/home' ? `${styles.active} ${styles.link}` : styles.link}>Home</p>
                </Link>
                <Link href="/about" className={styles.linkContainer}>
                    <p className={pathName === '/about' ? `${styles.active} ${styles.link}` : styles.link}>A propos</p>
                </Link>
                <Link href="/projects" className={styles.linkContainer}>
                    <p className={pathName === '/projects' ? `${styles.active} ${styles.link}` : styles.link}>Mes projets</p>
                </Link>
                <Link href="/articles" className={styles.linkContainer}>
                    <p className={pathName === '/articles' ? `${styles.active} ${styles.link}` : styles.link}>Mes articles</p>
                </Link>
                <Link href="/contact" className={styles.linkContainer}>
                    <p className={pathName === '/contact' ? `${styles.active} ${styles.link}` : styles.link}>Contact</p>
                </Link>
            </nav>
        </header>
    )
}