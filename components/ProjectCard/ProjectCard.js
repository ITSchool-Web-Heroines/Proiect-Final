import React from "react";
import Image from "next/future/image";

import styles from "./ProjectCard.module.scss";

export default function ProjectCard(props) {
  const { projectName } = props;

  return (
    <div className={`${styles.container} ${styles[projectName]}`}>
      <Image
        className={styles.logo}
        src={`${props.source}`}
        alt="LogoProiect"
        width="1000"
        height="1000"
      />
      <div className={styles.description}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.subtitle}>{props.subtitle}</p>
        <p className={styles.text}>{props.description}</p>
      </div>
    </div>
  );
}
