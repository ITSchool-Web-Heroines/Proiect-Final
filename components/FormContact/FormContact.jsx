import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styles from "./formContact.module.css";
import Popup from "../Popup/Popup";
import Image from "next/future/image";
import FormImg from "../../images/bck4.png";

export default function FormContact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_thw9wxe",
        "template_kif8y1l",
        e.target,
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
      <h1 className={styles.title}>Scrie-ne un mesaj</h1>
      <div className={styles.flex}>
        <form
          className={styles.form}
          name="contact"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className={styles.label}>
            Nume
            <input
              type="text"
              name="user_name"
              className={styles.input}
              required
            />
          </label>
          <label className={styles.label}>
            Email
            <input
              type="email"
              name="user_email"
              className={styles.input}
              required
            />
          </label>

          <label className={styles.label}>
            Subiect
            <input type="text" name="subject" className={styles.input} />
          </label>
          <div>
            <label className={styles.label}>
              Mesaj
              <textarea
                cols="5"
                className={styles.textarea}
                name="message"
              ></textarea>
            </label>
            <div className={styles.btn_div}>
              <button
                type="submit"
                className={styles.btn}
                onClick={() => setPopup(true)}
              >
                Trimite
              </button>
            </div>
          </div>
          <Popup trigger={popup} setTrigger={setPopup}>
            <h2 className={styles.popup_text}>Mesajul a fost trimis!</h2>
          </Popup>
        </form>
        <Image src={FormImg} alt="image" className={styles.img} />
      </div>
    </div>
  );
}
