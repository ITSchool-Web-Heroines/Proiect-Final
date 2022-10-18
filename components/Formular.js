import React from "react";
import CheckboxColor from "./form-input/CheckboxColor";
import CheckboxType from "./form-input/CheckboxType";
import TextareaF from "./form-input/TextareaF";
import CheckboxDim from "./form-input/CheckboxDim";
import styles from "../styles/form.module.css";
import Name from "./form-input/Name";
import PhoneNo from "./form-input/PhoneNo";
import Email from "./form-input/Email";
import Image from "next/future/image";
import dimensions from "././pictures/dimensions.jpg";
import colorpick from "././pictures/colorpick.jpg";
import styles from "../styles/images.module.css";

export default function formular() {
  return (
    <div>
      <form
        action="/api/form"
        method="post"
        className={styles["form-container"]}
      >
        <Name />
        <PhoneNo />
        <Email />
        <Image
          src={dimensions}
          alt="different handmade products"
          className={styles["dim-pic"]}
        ></Image>
        <Image
          src={colorpick}
          alt="different handmade products"
          className={styles["colorpick"]}
        ></Image>
        <CheckboxType />
        <CheckboxDim />
        <CheckboxColor />
        <TextareaF />

        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
