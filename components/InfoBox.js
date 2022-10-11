import React from "react";
import styles from "../pages/about/about.module.scss";

function InfoBox(props) {
  return (
    <div className={styles.box}>
      <p className={styles.section_title}>{props.title}</p>
      <div className={styles.details}>
        <div className={styles.one}>
          <p className={styles.title}>{props.subtitle_one}</p>
          <p className={styles.text}> {props.text_one}</p>
        </div>
        <div className={styles.two}>
          <p className={styles.title}>{props.subtitle_two}</p>
          <p className={styles.text}> {props.text_two}</p>
        </div>
        {props.subtitle_three && (
          <div className={styles.three}>
            <p className={styles.title}>{props.subtitle_three}</p>
            <p className={styles.text}> {props.text_three}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default InfoBox;
