import React, { useState } from "react";
import styles from "./SkillsBar.module.scss";
function SkillsBar(props) {
  let levelClass;
  if (props.level <= 3) {
    levelClass = `${styles.square_box} ${styles.medium}`;
  } else if (props.level == 4) {
    levelClass = `${styles.square_box} ${styles.good}`;
  } else if (props.level == 5) {
    levelClass = `${styles.square_box} ${styles.advanced}`;
  } else {
    levelClass = `${styles.square_box} ${styles.proficient}`;
  }

  return (
    <li className={levelClass}>
      <span className={styles.square}></span>
      <span className={styles.square}></span>
      <span className={styles.square}></span>
      <span className={styles.square}></span>
      <span className={styles.square}></span>
      <span className={styles.square}></span>
    </li>
  );
}

export default SkillsBar;
