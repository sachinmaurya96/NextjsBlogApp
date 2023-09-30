import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'
function Card() {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2023 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ex.</h1>
            <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam, ratione suscipit eum debitis ducimus eius ullam, dignissimos nisi deleniti maxime. Omnis libero temporibus explicabo?</p>
            <Link href="/" className={styles.link}>Read More</Link>


          </div>
    </div>
  )
}

export default Card
