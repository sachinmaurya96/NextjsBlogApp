import React from "react";
import styles from "./Menu.module.css";
import Link from "next/link";
import MenuPost from "../menupost/menuPost";
import Menucategory from "../menuCategories/Menucategory";
function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subTitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPost withImage={false}/>




      <h2 className={styles.subTitle}>Discover by Topics</h2>
      <h1 className={styles.title}>Category</h1>
     <Menucategory/>




      <h2 className={styles.subTitle}>Choosen by the Editor</h2>
      <h1 className={styles.title}>Editor's pic</h1>
      <MenuPost withImage={true}/>
    </div>
  );
}

export default Menu;
