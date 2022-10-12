import React from "react";
import Image from "next/future/image";
import search from "./search.png";
import process from "./process.png";
import delivery from "./delivery.png";
import styles from "../styles/process.module.css";
import Link from "next/link";

export default function Process() {
  return (
    <div>
      <div className={styles["process-grid"]}>
        <h2 className={styles["process-text"]}>
          Search for the perfect product for you &#10137;
        </h2>
        <Link href="/">
          <a>
            <Image
              src={search}
              alt="search on websites"
              className={styles["process-img"]}
            />
          </a>
        </Link>
      </div>
      <div className={styles["process-grid"]}>
        <h2 className={styles["process-text"]}>
          We will make it quickly and carefully &#10137;
        </h2>
        <Link href="/">
          <a>
            <Image
              src={process}
              alt="handmade process"
              className={styles["process-img"]}
            />
          </a>
        </Link>
      </div>
      <div className={styles["process-grid"]}>
        <h2 className={styles["process-text"]}>
          It will arrive to you as soon as possible &#10137;
        </h2>
        <Link href="/">
          <a>
            <Image
              src={delivery}
              alt="delivery box"
              className={styles["process-img"]}
            />
          </a>
        </Link>
      </div>
    </div>
  );
}
