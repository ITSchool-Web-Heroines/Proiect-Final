import React from "react";
import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./layout.module.css";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Magazin online" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <style jsx global>{`
          body {
            margin: 0rem;
            padding: 0rem;
            font-family: "Roboto", sans-serif;
          }
        `}</style>
      </div>
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.container}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
