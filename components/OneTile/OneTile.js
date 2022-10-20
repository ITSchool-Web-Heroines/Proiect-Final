import React from "react";
import Image from "next/future/image";

import styles from "./OneTile.module.scss";

export default function OneTile(props) {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <p>{props.oneTitle}</p>
        <p>{props.twoTitle}</p>
        {props.threeTitle && <p>{props.threeTitle}</p>}
        {props.fourTitle && <p>{props.fourTitle}</p>}
      </div>
      <Image
        src={`${props.planSource}`}
        className={styles.plan}
        width="3307"
        height="973"
        alt="plan"
      />
    </section>
  );
}
