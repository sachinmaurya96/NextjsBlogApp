import React from 'react'
import styles from "./Pagination.module.css"
function Pagination() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Previus</button>
      <button className={styles.button}>Next</button>
    </div>
  )
}

export default Pagination
