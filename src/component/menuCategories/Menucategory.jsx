import React from 'react'
import styles from "./menucategory.module.css"
import Link from 'next/link'
function Menucategory() {
  return (
    <div className={styles.container}>
       <div className={styles.categoryList}>
        <Link href="/" className={`${styles.categoryItem} ${styles.style}`}>
          Style
        </Link>
        <Link href="/" className={`${styles.categoryItem} ${styles.fashion}`}>
          Fashion
        </Link>
        <Link href="/" className={`${styles.categoryItem} ${styles.food}`}>
          Food
        </Link>
        <Link href="/" className={`${styles.categoryItem} ${styles.travel}`}>
          Travel
        </Link>
        <Link href="/" className={`${styles.categoryItem} ${styles.culture}`}>
          Culture
        </Link>
        <Link href="/" className={`${styles.categoryItem} ${styles.coding}`}>
          Coding
        </Link>
      </div>
    </div>
  )
}

export default Menucategory
