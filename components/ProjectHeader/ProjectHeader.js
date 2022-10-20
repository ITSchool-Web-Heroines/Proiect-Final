import React, { useEffect, useRef, useState } from "react";
import Image from "next/future/image";

import styles from "./ProjectHeader.module.scss";

export default function ProjectHeader(props) {
  const imageRef = useRef();

  const { projectName } = props;
  return (
    <header className={`${styles.header}  ${styles[projectName]}`}>
      <div className={styles.scroll_container} ref={imageRef}>
        <Image
          src={`${props.coverSource}`}
          className={styles.cover}
          width="2253"
          height="1173"
          alt="cover"
        />
      </div>
      <div className={styles.description}>
        <div className={styles.logo_title}>
          <div className={styles.title_box}>
            <p className={styles.subtitle}>{props.title}</p>
            <p className={styles.title}>{projectName}</p>
          </div>
          <Image
            src={`${props.logoSource}`}
            className={styles.logo}
            width="400"
            height="400"
            alt="logo"
          />
        </div>
        <p className={styles.one}>{props.subtitle}</p>
        <p className={styles.two}>{props.text}</p>
      </div>
    </header>
  );
}
