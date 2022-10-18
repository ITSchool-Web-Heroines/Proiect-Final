import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function about() {
  return (
    <div>
      <Nav />
      <div>
        <h1 className={styles.title}>About us</h1>
      </div>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
