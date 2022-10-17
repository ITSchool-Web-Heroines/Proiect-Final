import React, { useState } from "react";

import Image from "next/future/image";
import NavLink from "../NavLink";

import styles from "./FlipCard.module.scss";

export default function FlipCard(props) {
  const { name } = props;

  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${styles[name]}`}>
        <Image
          className={`${styles.card_front} ${styles.card_face}`}
          src={props.source}
          alt="LogoProiect"
        />
        <div
          className={`${styles.card_back} ${styles.card_face}`}
          style={props.styles}
        >
          <NavLink href={`${props.page}`} className={styles.arrow_container}>
            <div class={styles.top}></div>
            <div class={styles.bottom}></div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
