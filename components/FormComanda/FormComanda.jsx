import React from "react";
import styles from "./formComanda.module.css";

import Image from "next/future/image";
import Poster from "../../images/poster.jpg";

export default function FormComanda() {
  return (
    <div className={styles.container}>
      <div className={styles.all}>
        <form
          className={styles.form}
          name="comanda"
          method="POST"
          data-netlify="true"
          onSubmit="submit"
        >
          <h2 className={styles.title}>Adresa de livrare</h2>
          <div className={styles.two}>
            <div className={styles.label_input}>
              <input
                type="text"
                name="nume"
                placeholder="Nume"
                className={styles.input}
              ></input>
            </div>
            <div className={styles.label_input}>
              <input
                className={styles.input}
                name="prenume"
                placeholder="Prenume"
              ></input>
            </div>
          </div>
          <div className={styles.label_input}>
            <input
              className={styles.input}
              name="adresa"
              placeholder="Adresa"
            ></input>
          </div>
          <div className={styles.two}>
            <div className={styles.label_input}>
              <input
                className={styles.input}
                id="localitate"
                name="localitate"
                placeholder="Localitate"
              ></input>
            </div>
            <div className={styles.label_input}>
              <input
                className={styles.input}
                name="judet"
                placeholder="Judet"
              ></input>
            </div>
          </div>
          <div className={styles.label_input}>
            <input
              className={styles.input}
              name="telefon"
              placeholder="Telefon"
            ></input>
          </div>
          <h2 className={styles.title}>Metoda de expediere</h2>
          <div className={styles.radio}>
            <input type="radio" id="expediere" name="expediere"></input>
            <label for="expediere">Standard - 19lei</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" id="expediere" name="expediere"></input>
            <label for="expediere">Express - 9lei</label>
          </div>
          <h2 className={styles.title}>Metoda de plata</h2>
          <div className={styles.radio}>
            <input type="radio" id="plata" name="plata"></input>
            <label for="plata">Plata ramburs</label>
          </div>
          <div>
            <button type="submit" className={styles.btn}>
              Trimite comanda
            </button>
          </div>
        </form>
        <div>
          <Image src={Poster} className={styles.poster} />
        </div>
      </div>
    </div>
  );
}
