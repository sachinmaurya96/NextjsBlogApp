import React from 'react'
import styles from "./Navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import AuthLinks from '../authlinks/AuthLinks'
function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.social}>
            <Image src="/facebook.png" alt='facebook' width={24} height={24}/>
            <Image src="/instagram.png" alt='facebook' width={24} height={24}/>
            <Image src="/youtube.png" alt='facebook' width={24} height={24}/>
        </div>
        <div className={styles.logo}>
            SmBlog
        </div>
        <div className={styles.links}>
            <ThemeToggle/>
            <Link href="/" className={styles.link}>HomePage</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
            <Link href="/about" className={styles.link}>About</Link>
            <AuthLinks/>
        </div>
    </div>
  )
}

export default Navbar
