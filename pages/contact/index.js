import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import { useContext, useRef } from "react";

// CONTEXT
import { ThemeContext } from "../../context/theme";

// STYLES
import styles from "./contact.module.scss";

// COMPONENTS
import NavBar from "../../components/NavBar/NavBar";
import CustomParticles from "../../components/CustomParticles/CustomParticles";
import LoadingWrap from "../../components/LoadingWrap/LoadingWrap";
import FooterAndBackTop from "../../components/Footer/FooterAndBackTop";
import Signature from "../../components/Signature/Signature";

function MyContactPage() {
  const theme = useContext(ThemeContext);
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

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
          console.log("message sent");
        },
        error => {
          console.log(error.text);
          console.log("message not sent");
        }
      );
  };
  return (
    <LoadingWrap title={"Contact"}>
      <Head>
        <title>Contact</title>
      </Head>
      <NavBar />
      <main>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <label className={styles.form_title}>
            Nume
            <input className={styles.name} type="text" name="user_name" />
          </label>
          <label className={styles.form_title}>
            Email
            <input className={styles.email} type="email" name="user_email" />
          </label>
          <label className={styles.form_title}>
            Mesaj
            <textarea className={styles.message} name="message" />
          </label>
          <input className={styles.button} type="submit" value="Send" />
        </form>
      </main>
      <FooterAndBackTop />
      <CustomParticles color={theme.isDark ? "#fff" : "#000"} />
    </LoadingWrap>
  );
}
export default MyContactPage;
