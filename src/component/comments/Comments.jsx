import React from "react";
import styles from "./Comment.module.css";
import Link from "next/link";
import Image from "next/image";
function Comments() {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write A comment..."
            className={styles.input}
            cols="30"
            rows="2"
          />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">login to write Comments</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <div className={styles.uerImgContainer}>
              <Image
                src="/logo.png"
                alt=""
                className={styles.image}
                height={50}
                width={50}
              />
            </div>
            <div className={styles.uerTextContainer}>
              <span className={styles.userName}>John Doe</span>
              <span>13.09.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            dolorum ipsa alias ipsum natus quasi et quis tempora quaerat ad.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <div className={styles.uerImgContainer}>
              <Image
                src="/logo.png"
                alt=""
                className={styles.image}
                height={50}
                width={50}
              />
            </div>
            <div className={styles.uerTextContainer}>
              <span className={styles.userName}>John Doe</span>
              <span>13.09.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            dolorum ipsa alias ipsum natus quasi et quis tempora quaerat ad.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <div className={styles.uerImgContainer}>
              <Image
                src="/logo.png"
                alt=""
                className={styles.image}
                height={50}
                width={50}
              />
            </div>
            <div className={styles.uerTextContainer}>
              <span className={styles.userName}>John Doe</span>
              <span>13.09.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            dolorum ipsa alias ipsum natus quasi et quis tempora quaerat ad.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <div className={styles.uerImgContainer}>
              <Image
                src="/logo.png"
                alt=""
                className={styles.image}
                height={50}
                width={50}
              />
            </div>
            <div className={styles.uerTextContainer}>
              <span className={styles.userName}>John Doe</span>
              <span>13.09.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            dolorum ipsa alias ipsum natus quasi et quis tempora quaerat ad.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <div className={styles.uerImgContainer}>
              <Image
                src="/logo.png"
                alt=""
                className={styles.image}
                height={50}
                width={50}
              />
            </div>
            <div className={styles.uerTextContainer}>
              <span className={styles.userName}>John Doe</span>
              <span>13.09.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            dolorum ipsa alias ipsum natus quasi et quis tempora quaerat ad.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <div className={styles.uerImgContainer}>
              <Image
                src="/logo.png"
                alt=""
                className={styles.image}
                height={50}
                width={50}
              />
            </div>
            <div className={styles.uerTextContainer}>
              <span className={styles.userName}>John Doe</span>
              <span>13.09.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            dolorum ipsa alias ipsum natus quasi et quis tempora quaerat ad.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Comments;
