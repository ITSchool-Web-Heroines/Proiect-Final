import React from "react";
import Image from "next/future/image";

import styles from "./ThreeTiles.module.scss";

export default function ThreeTiles(props) {
  return (
    <section className={styles.container}>
      <div className={styles.one}>
        <p>{props.oneTitle}</p>
        <Image
          src={`${props.oneSource}`}
          className={styles.picture}
          width="400"
          height="400"
          alt="Picture"
        />
      </div>
      <div className={styles.two}>
        <p>{props.twoTitle}</p>
        <Image
          src={`${props.twoSource}`}
          className={styles.picture}
          width="400"
          height="400"
          alt="Picture"
        />
      </div>
      <div className={styles.three}>
        <p>{props.threeTitle}</p>
        <Image
          src={`${props.threeSource}`}
          className={styles.picture}
          width="400"
          height="400"
          alt="Picture"
        />
      </div>
    </section>
  );
}
