import React from "react";

// STYLES
import styles from "./ThemeButton.module.scss";

export default function ThemeButton(props) {
  return (
    <div
      className={
        props.theme
          ? `${styles.button} ${styles.dark}`
          : `${styles.button} ${styles.light}`
      }
      onClick={props.handleClick}
      style={props.styles}
    >
      <p className={styles.light}>Light</p>
      <p className={styles.dark}>Dark</p>
    </div>
  );
}
