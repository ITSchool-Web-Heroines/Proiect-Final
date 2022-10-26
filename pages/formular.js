import React from "react";
import styles from "../styles/form.module.css";
// import CheckboxColor from "../components/form-input/CheckboxColor";
// import CheckboxType from "../components/form-input/CheckboxType";
// import TextareaF from "../components/form-input/TextareaF";
// import CheckboxDim from "../components/form-input/CheckboxDim";
// import User from "../components/form-input/User";

export default function formular() {
  return (
    <div>
      <form
        action="/api/form"
        method="POST"
        className={styles["form-container"]}
        data-netlify="true"
      >
        <fieldset className={styles.fieldsetA}>
          <legend className={styles.legend}>About you</legend>
          <div>
            <label htmlFor="firstname" className={styles.textLabel}>
              First Name:{" "}
            </label>
            <input
              type="text"
              id="firstname"
              className={styles["text-input"]}
              name="firstname"
              required
            />
          </div>
          <div>
            <label htmlFor="lastname" className={styles.textLabel}>
              Last Name:{" "}
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className={styles["text-input"]}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className={styles.textLabel}>
              Email:{" "}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles["text-input"]}
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className={styles.textLabel}>
              Phone:{" "}
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              className={styles["text-input"]}
              required
            />
          </div>
        </fieldset>

        {/* <User />
        <br></br>
        <CheckboxType />
        <br></br>
        <CheckboxDim />
        <br></br>
        <CheckboxColor />
        <br></br>
        <TextareaF /> */}

        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
