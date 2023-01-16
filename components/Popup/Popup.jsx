import React from "react";
import styles from "./popup.module.css";
export default function Popup(props) {
  return props.trigger ? (
    <div className={styles.popup}>
      <div className={styles.popup_inside}>
        <button
          className={styles.close}
          onClick={() => props.setTrigger(false)}
        >
          Inchide
        </button>{" "}
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
