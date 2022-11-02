import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import styling from "../styles/footer.module.css";
import btns from "../styles/btn.module.css";
import Nav from "../components/Nav";
import ImageF from "../components/ImageF";
import Process from "../components/Process";
import Cards from "../components/Cards";
import SeeMore from "../components/SeeMore";
import Link from "next/link";
import Cart from "../components/Cart.js";
import Image from "next/image";
import facebook from "../components/pictures/facebook.png";
import instagram from "../components/pictures/instagram.png";
import whatsapp from "../components/pictures/whatsapp.png";
import UserIcon from "../components/UserIcon";
import style from "../styles/testimonials.module.css";

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
          <div className={style["test-container"]}>
            <div>
              <UserIcon />
              <p className={style["client-text"]}>
                I ordered 2 journals in the course of 4 months. The first time I
                was speechless as it was something special, the second time I
                was amazed by the originality and inventiveness of the creators
                from SkooBooks. In addition, I received pictures of the final
                product, before it was delivered, and they showed a lot of
                involvement responding promptly to all the requirements I had. I
                recommend with all my heart!
              </p>
            </div>
            <div>
              <UserIcon />
              <p className={style["client-text"]}>
                I am really impressed by the journal I received! A real art! If
                you want special gifts, order products from SkooBooks!
              </p>
            </div>
            <div>
              <UserIcon />
              <p className={style["client-text"]}>
                I was impressed by the speed and quality of the order! The
                journal I ordered looks absolutely perfect. It is easy to notice
                the soul and dedication with which it was made, through the
                attention given to every detail, every diary and through the
                excellent communication we had until the delivery of the
                product!
              </p>
            </div>
            <div>
              <UserIcon />
              <p className={style["client-text"]}>
                Absolutely amazed by the quality of the leader, the paper, the
                map inside.. Everything is perfect!
              </p>
            </div>
            <div>
              <UserIcon />
              <p className={style["client-text"]}>
                Objects produced with and from the heart, quality and attention
                to details that you rarely find! I placed 2 orders in the course
                of 2 years, and if the first time I was pleasantly surprised,
                the second time I was actually amazed. Objects that exude a
                fantastic combination of creativity, passion, quality, unique,
                beautiful. I recommend with love! 🙂
              </p>
            </div>
            <div>
              <UserIcon />
              <p className={style["client-text"]}>
                Original products, with leather and quality materials! I
                recommend, I am very satisfied with them Keep up the good work.
              </p>
            </div>
          </div>
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
        <footer className={styling.footer}>
          <div className={styling.location}>
            <h2>Our Locations</h2>
            <p>Al.Macedonski, nr 6, Craiova</p>
            <p>Cărturești, Craiova</p>
            <p>Cărturești, Pitești</p>
          </div>
          <div className="menu-footer">
            <h2>Menu</h2>
            <Link href="/">
              <a className={styling["menu-anchor"]}>
                <p>Home</p>
              </a>
            </Link>
            <Link href="/">
              <a className={styling["menu-anchor"]}>
                <p>About</p>
              </a>
            </Link>
            <Link href="/">
              <a className={styling["menu-anchor"]}>
                <p>Order</p>
              </a>
            </Link>
          </div>
          <div className="social-media">
            <h2>You can find us on:</h2>
            <div className={styling["social-icons"]}>
              <Link href="https://www.facebook.com/skoobs.books">
                <a target="_blank">
                  <Image
                    src={facebook}
                    alt="facebook"
                    className={styling["social-icon"]}
                  />
                </a>
              </Link>
              <Link href="https://www.instagram.com/atelierskoob/">
                <a target="_blank">
                  <Image
                    src={instagram}
                    alt="instagram"
                    className={styling["social-icon"]}
                  />
                </a>
              </Link>
              <Link href="https://wa.me/message/XCG3NENAXNMRH1">
                <a target="_blank">
                  <Image
                    src={whatsapp}
                    alt="whatsapp"
                    className={styling["social-icon"]}
                  />
                </a>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
