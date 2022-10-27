import React from "react";
import Image from "next/future/image";
import styles from "../styles/testimonials.module.css";
import user from "./pictures/user.png";
import user2 from "./pictures/user2.png";
import star from "./pictures/star.png";

export default function UserIcon() {
  return (
    <div>
      <Image src={user} alt="client" className={styles.client} />
      <Image src={star} alt="star" className={styles.star} />
      <Image src={star} alt="star" className={styles.star} />
      <Image src={star} alt="star" className={styles.star} />
      <Image src={star} alt="star" className={styles.star} />
      <Image src={star} alt="star" className={styles.star} />
    </div>
  );
}
