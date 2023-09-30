import React from 'react'
import styles from "./menuPost.module.css"
import Link from "next/link";
import Image from 'next/image'
function MenuPost({withImage}) {
  return (
    <div className={styles.container}>
        <div className={styles.items}>
        <Link href="/" className={styles.item}>
          {withImage && <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </h3>
            <div className={styles.detail}>
              <span className={styles.userName}>john doe - </span>
              <span className={styles.date}>11.3.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
         {withImage &&  <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </h3>
            <div className={styles.detail}>
              <span className={styles.userName}>john doe - </span>
              <span className={styles.date}>11.3.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
         {withImage &&  <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </h3>
            <div className={styles.detail}>
              <span className={styles.userName}>john doe - </span>
              <span className={styles.date}>11.3.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
         {withImage &&  <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </h3>
            <div className={styles.detail}>
              <span className={styles.userName}>john doe - </span>
              <span className={styles.date}>11.3.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default MenuPost
