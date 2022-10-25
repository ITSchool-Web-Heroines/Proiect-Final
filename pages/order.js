import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Formular from "./formular.js";

export default function order() {
  return (
    <div>
      <Nav />
      <div>
        <h1 className={styles.title}>Order your things here</h1>
      </div>
      <Formular />
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
