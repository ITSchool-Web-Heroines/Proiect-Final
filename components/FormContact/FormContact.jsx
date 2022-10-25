import React from "react";
import styles from "./formContact.module.css";

import Image from "next/future/image";
import FormImg from "../../images/bck4.png";

export default function FormContact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Scrie-ne un mesaj</h1>
      <div className={styles.flex}>
        <form
          className={styles.form}
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit="submit"
        >
          <label className={styles.label}>
            Nume
            <input type="text" name="name" className={styles.input} />
          </label>
          <label className={styles.label}>
            Email
            <input type="email" name="email" className={styles.input} />
          </label>

          <label className={styles.label}>
            Subiect
            <input type="text" name="subiect" className={styles.input} />
          </label>
          <div>
            <label className={styles.label}>
              Mesaj
              <textarea
                cols="5"
                className={styles.textarea}
                name="mesaj"
              ></textarea>
            </label>
            <div className={styles.btn_div}>
              <button type="submit" className={styles.btn}>
                Trimite
              </button>
            </div>
          </div>
        </form>
        <Image src={FormImg} className={styles.img} />
      </div>
    </div>
  );
}
