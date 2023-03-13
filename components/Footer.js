import React from "react";
import styles from "../styles/footer.module.css";
import Link from "next/link";
import Image from "next/future/image";
import facebook from "././pictures/facebook.png";
import instagram from "././pictures/instagram.png";
import whatsapp from "././pictures/whatsapp.png";

export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.location}>
          <h2>Our Locations</h2>
          <p>Al.Macedonski, nr 6, Craiova</p>
          <p>Cărturești, Craiova</p>
          <p>Cărturești, Pitești</p>
        </div>
        <div className="menu-footer">
          <h2>Menu</h2>
          <Link href="/">
            <a className={styles["menu-anchor"]}>
              <p>Home</p>
            </a>
          </Link>
          <Link href="/">
            <a className={styles["menu-anchor"]}>
              <p>About</p>
            </a>
          </Link>
          <Link href="/">
            <a className={styles["menu-anchor"]}>
              <p>Order</p>
            </a>
          </Link>
        </div>
        <div className="social-media">
          <h2>You can find us on:</h2>
          <div className={styles["social-icons"]}>
            <Link href="https://www.facebook.com/skoobs.books">
              <a target="_blank">
                <Image
                  src={facebook}
                  alt="facebook"
                  className={styles["social-icon"]}
                />
              </a>
            </Link>
            <Link href="https://www.instagram.com/atelierskoob/">
              <a target="_blank">
                <Image
                  src={instagram}
                  alt="instagram"
                  className={styles["social-icon"]}
                />
              </a>
            </Link>
            <Link href="https://wa.me/message/XCG3NENAXNMRH1">
              <a target="_blank">
                <Image
                  src={whatsapp}
                  alt="whatsapp"
                  className={styles["social-icon"]}
                />
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
