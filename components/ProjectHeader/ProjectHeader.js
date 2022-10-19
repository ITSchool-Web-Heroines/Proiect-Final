import React from "react";
import Image from "next/future/image";

import styles from "./ProjectHeader.module.scss";

export default function ProjectHeader(props) {
  const { projectName } = props;
  return (
    <header className={`${styles.header}  ${styles[projectName]}`}>
      <div className={styles.scroll_container}>
        <Image
          src={`${props.coverSource}`}
          className={styles.cover}
          width="2253"
          height="1173"
          alt="cover"
        />
      </div>
      <div className={styles.title}>
        <p className={styles.one}>{props.title}</p>
        <p className={styles.two}>{projectName}</p>
      </div>
      <div className={styles.description}>
        <Image
          src={`${props.logoSource}`}
          className={styles.logo}
          width="400"
          height="400"
          alt="logo"
        />
        <p className={styles.one}>{props.subtitle}</p>
        <p className={styles.two}>{props.text}</p>
      </div>
    </header>
  );
}
