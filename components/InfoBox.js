import React from "react";
import styles from "../pages/about/about.module.scss";

function InfoBox(props) {
  return (
    <div className={styles.box}>
      <p className={styles.section_title}>{props.title}</p>
      <div className={styles.details}>
        <div>
          <p>{props.subtitle_one}</p>
          <p> {props.text_one}</p>
        </div>
        <div>
          <p>{props.subtitle_two}</p>
          <p> {props.text_two}</p>
        </div>
        {props.subtitle_three && (
          <div>
            <p>{props.subtitle_three}</p>
            <p> {props.text_three}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default InfoBox;
