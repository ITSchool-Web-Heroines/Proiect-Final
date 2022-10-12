import Head from "next/head";
import Image from "next/future/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Cart from "../components/cart";
import ImageF from "../components/ImageF";
import Btn from "../components/Btn";
import Process from "../components/Process";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Skoob Journals</title>
        <meta name="description" content="Handmade Journals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main className={styles.main}>
        <Cart />
        <h1 className={styles.title}>Handmade Leather Products</h1>

        <p className={styles.description}>Books and Notebooks made with care</p>

        <ImageF />
        <div className={styles["btn-description"]}>
          <p className={styles.description}>
            All the things you need for your dearest right now
          </p>
          <Btn />
        </div>

        <div className={styles.grid}>
          <Process />
        </div>
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
