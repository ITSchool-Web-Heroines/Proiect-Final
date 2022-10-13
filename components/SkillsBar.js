import React from "react";
import styles from "../pages/about/about.module.scss";

export default function SkillsBar(props) {
  let levelClass;
  if (props.level <= 3) {
    levelClass = styles.medium;
  } else if (props.level == 4) {
    levelClass = styles.good;
  } else if (props.level == 5) {
    levelClass = styles.advanced;
  } else {
    levelClass = styles.proficient;
  }

  return <li className={`${styles.square_box} ${levelClass}`}></li>;
}
