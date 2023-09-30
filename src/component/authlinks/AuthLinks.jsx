"use client";
import React, { useState } from "react";
import styles from "./AuthLinks.module.css";
import Link from "next/link";
function AuthLinks() {
  const status = "authenticate";
  const [open, setOpen] = useState(false);
  return (
    <>
      {status === "notauthenticate" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={()=>setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/" className={styles.link}>
            HomePage
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
          <Link href="/about" className={styles.link}>
            About
          </Link>
          {status === "notauthenticate" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/signup">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default AuthLinks;
