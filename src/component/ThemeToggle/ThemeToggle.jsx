"use client";
import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={styles.container} onClick={toggle}
    style={
      theme === "dark"
        ? {  background: "white" }
        : {  background: "#0f172a" }
    }
    >
      <Image src="/moon.png" alt="moon" height={14} width={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: "1px", background: "#0f172a" }
            : { right: "1px", background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="moon" height={14} width={14} />
    </div>
  );
}

export default ThemeToggle;
