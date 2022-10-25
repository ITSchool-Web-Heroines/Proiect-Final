import React from "react";
import Image from "next/future/image";
import search from "././pictures/search.png";
import process from "././pictures/process.png";
import delivery from "././pictures/delivery.png";
import styles from "../styles/process.module.css";

export default function Process() {
  return (
    <div>
      <div className={styles["process-grid"]}>
        <p className={styles["process-text"]}>
          Search for the perfect product for you &#10137;
        </p>

        <Image
          src={search}
          alt="search on websites"
          className={styles["process-img"]}
        />
      </div>
      <div className={styles["process-grid"]}>
        <p className={styles["process-text"]}>
          We will make it quickly and carefully &#10137;
        </p>

        <Image
          src={process}
          alt="handmade process"
          className={styles["process-img"]}
        />
      </div>
      <div className={styles["process-grid"]}>
        <p className={styles["process-text"]}>
          It will arrive to you as soon as possible &#10137;
        </p>

        <Image
          src={delivery}
          alt="delivery box"
          className={styles["process-img"]}
        />
      </div>
    </div>
  );
}
