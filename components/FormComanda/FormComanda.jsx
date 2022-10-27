import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styles from "./formComanda.module.css";
import Popup from "../Popup/Popup";
import Image from "next/future/image";
import Poster from "../../images/poster.jpg";

export default function FormComanda() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_thw9wxe",
        "template_alei8kv",
        form.current,
        "ccobHoXEpnce64hgy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const [popup, setPopup] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.all}>
        <form
          className={styles.form}
          name="comanda"
          ref={form}
          onSubmit={sendEmail}
        >
          <h2 className={styles.title}>Adresă de livrare</h2>
          <div className={styles.two}>
            <div className={styles.label_input}>
              <input
                type="text"
                name="nume"
                placeholder="Nume"
                className={styles.input}
                required
              ></input>
            </div>
            <div className={styles.label_input}>
              <input
                className={styles.input}
                name="prenume"
                placeholder="Prenume"
                required
              ></input>
            </div>
          </div>
          <div className={styles.label_input}>
            <input
              className={styles.input}
              name="adresa"
              placeholder="Adresă"
              required
            ></input>
          </div>
          <div className={styles.two}>
            <div className={styles.label_input}>
              <input
                className={styles.input}
                id="localitate"
                name="localitate"
                placeholder="Localitate"
                required
              ></input>
            </div>
            <div className={styles.label_input}>
              <input
                className={styles.input}
                name="judet"
                placeholder="Județ"
                required
              ></input>
            </div>
          </div>
          <div className={styles.label_input}>
            <input
              className={styles.input}
              name="telefon"
              placeholder="Telefon"
              required
            ></input>
          </div>
          <h2 className={styles.title}>Metodă de expediere</h2>
          <div className={styles.radio}>
            <input type="radio" id="expediere" name="expediere"></input>
            <label for="expediere">Standard - 19lei</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" id="expediere" name="expediere"></input>
            <label for="expediere">Express - 9lei</label>
          </div>
          <h2 className={styles.title}>Metodă de plată</h2>
          <div className={styles.radio}>
            <input type="radio" id="plata" name="plata"></input>
            <label for="plata">Plata ramburs</label>
          </div>
          <div>
            <button
              type="submit"
              className={styles.btn}
              onClick={() => setPopup(true)}
            >
              Trimite comanda
            </button>
          </div>
          <Popup trigger={popup} setTrigger={setPopup}>
            <h2 className={styles.popup_text}>Comanda a fost trimisă!</h2>
          </Popup>
        </form>
        <div>
          <Image src={Poster} alt="poster" className={styles.poster} />
        </div>
      </div>
    </div>
  );
}
