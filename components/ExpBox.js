import React, { useState } from "react";
import styles from "../pages/about/about.module.scss";

function ExpBox(props) {
  return (
    <div className={styles.box}>
      <p className={styles.subtitle}>
        {props.period} - {props.location}
      </p>
      <p className={styles.institution}> {props.institution}</p>
      {props.details && <p className={styles.details}> {props.details}</p>}
    </div>
  );
}

export default ExpBox;
