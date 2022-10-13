import React from "react";
import styles from "../pages/about/about.module.scss";

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

  return <li className={levelClass}></li>;
}

export default SkillsBar;
