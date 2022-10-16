import React from "react";
import Image from "next/future/image";

import styles from "./LeftProject.module.scss";

function LeftProject(props) {
  return (
    <section className={styles.left_project}>
      <div className={styles.project}>
        <Image className={styles.logo} src={props.source} alt="LogoProiect" />
        <div className={styles.subtitle}>
          <p>{props.subtitle}</p>
          <p>{props.text}</p>
        </div>
      </div>
      <div className={styles.title}>
        <p>{props.title_one}</p>
        <p>{props.title_two}</p>
        <p>{props.title_three}</p>
        {props.title_four && <p>{props.title_four}</p>}
      </div>
    </section>
  );
}

export default LeftProject;
