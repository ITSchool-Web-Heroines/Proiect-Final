import React from "react";
import Image from "next/future/image";
import styles from "../styles/testimonials.module.css";
import user from "./pictures/user.png";
import user2 from "./pictures/user2.png";
import star from "./pictures/star.png";

export default function Testimonials() {
  return (
    <>
      <div className={styles["test-container"]}>
        <div>
          <Image src={user} alt="client" className={styles.client}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <p className={styles["client-text"]}>
            I ordered 2 journals in the course of 4 months. The first time I was
            speechless as it was something special, the second time I was amazed
            by the originality and inventiveness of the creators from SkooBooks.
            In addition, I received pictures of the final product, before it was
            delivered, and they showed a lot of involvement responding promptly
            to all the requirements I had. I recommend with all my heart!
          </p>
        </div>
        <div>
          <Image src={user2} alt="client" className={styles.client}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <p className={styles["client-text"]}>
            I am really impressed by the journal I received! A real art! If you
            want special gifts, order products from SkooBooks!
          </p>
        </div>
        <div>
          <Image src={user} alt="client" className={styles.client}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <p className={styles["client-text"]}>
            I was impressed by the speed and quality of the order! The journal I
            ordered looks absolutely perfect. It is easy to notice the soul and
            dedication with which it was made, through the attention given to
            every detail, every diary and through the excellent communication we
            had until the delivery of the product!
          </p>
        </div>
        <div>
          <Image src={user2} alt="client" className={styles.client}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <p className={styles["client-text"]}>
            Absolutely amazed by the quality of the leader, the paper, the map
            inside.. Everything is perfect!
          </p>
        </div>
        <div>
          <Image src={user} alt="client" className={styles.client}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <p className={styles["client-text"]}>
            Objects produced with and from the heart, quality and attention to
            details that you rarely find! I placed 2 orders in the course of 2
            years, and if the first time I was pleasantly surprised, the second
            time I was actually amazed. Objects that exude a fantastic
            combination of creativity, passion, quality, unique, beautiful. I
            recommend with love! 🙂
          </p>
        </div>
        <div>
          <Image src={user2} alt="client" className={styles.client}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <Image src={star} alt="star" className={styles.star}></Image>
          <p className={styles["client-text"]}>
            Original products, with leather and quality materials! I recommend,
            I am very satisfied with them Keep up the good work.
          </p>
        </div>
      </div>
    </>
  );
}
