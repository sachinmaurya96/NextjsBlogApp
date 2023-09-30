import React from 'react'
import styles from "./blogpage.module.css"
import CardList from '@/component/cardList/CardList'
import Menu from '@/component/menu/Menu'
function page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blog</h1>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>
    </div>
  )
}

export default page
