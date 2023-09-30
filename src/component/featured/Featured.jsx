import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'
function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>hey sachin here!</b> Discover my stories and creative ideas</h1>
    <div className={styles.post}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, delectus amet tempore distinctio sapiente quae.</h1>
        <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis excepturi dignissimos omnis voluptates, distinctio sequi vero dolorem doloremque nulla nostrum maiores atque eius. Accusamus, cum dolorum sint enim aliquam laborum repellendus molestiae minus ducimus, magnam itaque aut dolore nostrum consequuntur fugit dolor laboriosam delectus quod amet illum natus, corrupti pariatur.</p>
        <button className={styles.button}>read more</button>
      </div>
    </div>
    </div>
  )
}

export default Featured
