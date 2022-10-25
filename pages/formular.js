import React from "react";
import CheckboxColor from "../components/form-input/CheckboxColor";
import CheckboxType from "../components/form-input/CheckboxType";
import TextareaF from "../components/form-input/TextareaF";
import CheckboxDim from "../components/form-input/CheckboxDim";
import styles from "../styles/form.module.css";
import User from "../components/form-input/User";

export default function formular() {
  return (
    <div>
      <form
        action="/api/form"
        method="post"
        className={styles["form-container"]}
      >
        <User />
        <br></br>
        <CheckboxType />
        <br></br>
        <CheckboxDim />
        <br></br>
        <CheckboxColor />
        <br></br>
        <TextareaF />

        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
