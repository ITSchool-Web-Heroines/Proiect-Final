import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import btns from "../styles/btn.module.css";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Link from "next/link";
import Cart from "../components/Cart.js";

export default function about() {
  return (
    <div>
      <Head>
        <title>About Skoob Atelier</title>
        <meta
          name="description"
          content="About our handmade leather products"
        />
      </Head>
      <Nav />
      <main className={styles.main}>
        <div className={styles.info}>
          <Cart />
          <h1 className={styles.title}>About us</h1>
          <p className={styles.description}>
            Since 2009, in the Skoob workshop, we have been producing natural
            leather diaries, photo albums and a lot of other things. All of
            these are 100% handmade, they can be customized or created to order,
            especially for you, giving you the opportunity to own a unique
            object that reflects your identity.
          </p>
        </div>
        <Gallery />
        <h3 className={styles.subtitle}>What our clients say</h3>
        <Testimonials />
        <p className={styles.description}>
          If you want to see all our products click here.
        </p>
        <Link href="https://www.skoob.ro/">
          <a className={btns.btn} target="_blank">
            See our main site
          </a>
        </Link>
      </main>

      <Footer />
    </div>
  );
}
