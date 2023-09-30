import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="smblog" width={50} height={50} />
          <h1 className={styles.logoText}>SmBlog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa vero
          laborum consectetur rerum libero tenetur similique laboriosam, at nemo
          provident commodi dolorem explicabo quibusdam, repellendus optio velit
          beatae odio dignissimos, praesentium veniam. Laboriosam, molestias
          itaque?
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="facebook" width={18} height={18} />
          <Image src="/instagram.png" alt="facebook" width={18} height={18} />
          <Image src="/youtube.png" alt="facebook" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listtitle}>Links</span>
          <Link href={"/"}>Homepage</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listtitle}>Tags</span>
          <Link href={"/"}>Style</Link>
          <Link href={"/"}>Travel</Link>
          <Link href={"/"}>Culture</Link>
          <Link href={"/"}>Coding</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listtitle}>Social</span>
          <Link href={"/"}>facebook</Link>
          <Link href={"/"}>Instagram</Link>
          <Link href={"/"}>Youtube</Link>
          <Link href={"/"}>Lnkedin</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
