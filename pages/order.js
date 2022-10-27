import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Formular from "../components/Formular.js";

export default function order() {
  return (
    <div>
      <Head>
        <title>Order Handmade Products</title>
        <meta name="description" content="Order handmade leather products" />
      </Head>
      <Nav />
      <div>
        <h1 className={styles.title}>Order your things here</h1>
      </div>
      <Formular />

      <Footer />
    </div>
  );
}
