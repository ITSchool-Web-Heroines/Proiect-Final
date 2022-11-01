import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import btns from "../styles/btn.module.css";
import Nav from "../components/Nav";
import ImageF from "../components/ImageF";
import Process from "../components/Process";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import SeeMore from "../components/SeeMore";
import Testimonials from "../components/Testimonials";
import Link from "next/link";
import Cart from "../components/Cart.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Skoob Journals</title>
        <meta name="description" content="Handmade Journals" />
      </Head>

      <Nav />
      <main className={styles.main}>
        <Cart />
        <h1 className={styles.title}>Handmade Leather Products</h1>

        <h3 className={styles.subtitle}>Books and Notebooks made with care</h3>

        <ImageF />
        <div className={styles["btn-description"]}>
          <h3 className={styles.subtitle}>
            All the things you need for your dearest
          </h3>
          <SeeMore />
        </div>
        <h3 className={styles.subtitle}>
          All our products arrive to you already wrapped as a gift
        </h3>
        <p className={styles.description}>
          Whether you bought it for loved one or for yourself, the experience of
          unwrapping a gift will always be a pleasant one. That is why we pack
          each product with care.
        </p>
        <Cards />
        <h3 className={styles.subtitle}>What our clients say</h3>
        <div>
          <Testimonials />
        </div>
        <h3 className={styles.subtitle}>Delivery process</h3>
        <div className={styles.grid}>
          <Process />
        </div>
        <p className={styles.description}>
          If you want to see all our products click here.
        </p>
        <Link href="https://www.skoob.ro/">
          <a className={btns.btn} target="_blank">
            See our main site
          </a>
        </Link>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}
