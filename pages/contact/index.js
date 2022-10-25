import React from "react";
import Head from "next/head";
import { useContext, useRef, useState } from "react";
import Image from "next/future/image";
import emailjs from "@emailjs/browser";

// CONTEXT
import { ThemeContext } from "../../context/theme";

// STYLES
import styles from "./contact.module.scss";

// COMPONENTS
import NavBar from "../../components/NavBar/NavBar";
import CustomParticles from "../../components/CustomParticles/CustomParticles";
import LoadingWrap from "../../components/LoadingWrap/LoadingWrap";

// IMAGE
import WLogo from "../../images/home/sa.png";
import BLogo from "../../images/home/sn.png";

function MyContactPage() {
  const theme = useContext(ThemeContext);
  const form = useRef();

  const [incomplete, setIncomplete] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [resultText, setResultText] = useState("");

  // INPUT CHANGE
  const handleName = event => {
    setNameInput(event.target.value);
  };
  const handleEmail = event => {
    setEmailInput(event.target.value);
  };
  const handleMessage = event => {
    setMessageInput(event.target.value);
  };

  // RESULT FUNCTION
  let result;
  if (resultText === "ok") {
    result = "Mulțumesc! Vă voi contacta în curând!";
  } else if (resultText === "error") {
    result = "Mesajul nu a fost trimis. Încearcă din nou.";
  } else if (resultText === "incomplete") {
    result = "Mesaj incomplet. Verifică și încearcă din nou.";
  } else {
    result = "";
  }

  // SUBMIT EVENT
  const sendEmail = e => {
    if (nameInput === "" || emailInput === "" || messageInput === "") {
      e.preventDefault();
      setIncomplete(true);
      setResultText("incomplete");
    } else {
      e.preventDefault();

      setIncomplete(false);
      setNameInput("");
      setEmailInput("");
      setMessageInput("");

      emailjs
        .sendForm(
          "service_qdj0kzo",
          "template_wmbecdr",
          form.current,
          "z4CvshztpUke0xKoi"
        )
        .then(
          result => {
            console.log(result.text);
            setResultText("ok");
          },
          error => {
            console.log(error.text);
            setResultText("error");
          }
        );
    }
  };
  return (
    <LoadingWrap title={"Contact"}>
      <Head>
        <title>Contact</title>
      </Head>
      <NavBar />
      <main className={styles.main}>
        <Image
          src={theme.isDark ? WLogo : BLogo}
          className={styles.logo}
          alt="Logo"
        />
        <div className={styles.title_box}>
          <p className={styles.title}>Arhitectura</p>
          <p className={styles.title}>Urbanism</p>
          <p className={styles.title}>Design interior</p>
        </div>
        <p className={styles.subtitle}>
          Daca aveți vreo intrebare, mă puteți contacta prin formularul de mai
          jos:
        </p>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <div className={styles.name_box}>
            <label className={styles.form_title} htmlFor="name">
              Nume
            </label>
            <input
              className={`${styles.name} ${
                incomplete ? styles.incomplete : ""
              }`}
              id="name"
              type="text"
              name="user_name"
              placeholder="INCOMPLET"
              value={nameInput}
              onChange={handleName}
            />
          </div>
          <div className={styles.email_box}>
            <label className={styles.form_title} htmlFor="email">
              Email
            </label>
            <input
              className={`${styles.email} ${
                incomplete ? styles.incomplete : ""
              }`}
              id="email"
              type="email"
              name="user_email"
              placeholder="INCOMPLET"
              value={emailInput}
              onChange={handleEmail}
            />
          </div>
          <div className={styles.message_box}>
            <label className={styles.form_title} htmlFor="message">
              Mesaj
            </label>
            <textarea
              className={`${styles.message} ${
                incomplete ? styles.incomplete : ""
              }`}
              id="message"
              name="message"
              placeholder="INCOMPLET"
              value={messageInput}
              onChange={handleMessage}
            />
          </div>
          <button className={styles.button} type="submit">
            trimite
          </button>
          <div className={styles.result}>{result}</div>
        </form>
      </main>
      <CustomParticles color={theme.isDark ? "#fff" : "#000"} />
    </LoadingWrap>
  );
}
export default MyContactPage;
