import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/component/menu/Menu";
import Image from "next/image";
import Comments from "@/component/comments/Comments";
function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContiner}>
          <h1 className={styles.title}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            ipsa?
          </h1>
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
        </div>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, perspiciatis. Illum quasi perspiciatis neque voluptatem
              facere ratione repellat cum tenetur facilis pariatur, corrupti
              blanditiis voluptate nulla? Doloremque aspernatur magni neque
              molestias corrupti minus hic minima, tenetur numquam ex nesciunt!
              Ut fugit cupiditate, error mollitia provident distinctio
              asperiores consequuntur iste inventore.
            </p>
            <h5>Lorem ipsum dolor sit amet.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, perspiciatis. Illum quasi perspiciatis neque voluptatem
              facere ratione repellat cum tenetur facilis pariatur, corrupti
              blanditiis voluptate nulla? Doloremque aspernatur magni neque
              molestias corrupti minus hic minima, tenetur numquam ex nesciunt!
              Ut fugit cupiditate, error mollitia provident distinctio
              asperiores consequuntur iste inventore.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default SinglePage;
