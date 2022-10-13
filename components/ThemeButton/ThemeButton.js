import React from "react";
import styles from "./ThemeButton.module.scss";

export default function ThemeButton(props) {
  return (
    <div
      className={
        props.theme == "light"
          ? styles.button
          : `${styles.button} ${styles.active}`
      }
      onClick={props.handleClick}
      style={props.styles}
    >
      <p className={styles.light}>Light</p>
      <p className={styles.dark}>Dark</p>
    </div>
  );
}
