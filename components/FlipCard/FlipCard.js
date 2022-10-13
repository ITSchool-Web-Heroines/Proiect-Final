import React, { useState } from "react";

import Image from "next/future/image";
import NavLink from "../NavLink";

import styles from "./FlipCard.module.scss";

export default function FlipCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  function flip() {
    setIsFlipped(!isFlipped);
  }
  return (
    <div className={styles.container} onClick={flip}>
      <div
        className={`${styles.card} ${`styles.${props.name}`} ${
          isFlipped ? styles.isFlipped : ""
        }`}
      >
        <Image
          className={`${styles.card_front} ${styles.card_face}`}
          src={props.source}
          alt="LogoProiect"
        />
        <div
          className={`${styles.card_back} ${styles.card_face}`}
          style={props.styles}
        >
          <NavLink href={`${props.page}`} className={styles.navlink}>
            {props.name}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
