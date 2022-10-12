import React from "react";
import styles from "../styles/footer.module.css";
import Link from "next/link";
import Image from "next/future/image";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import whatsapp from "./whatsapp.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className="location">
        <h2>Our Locations</h2>
        <p>Address</p>
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
            <p>Contact</p>
          </a>
        </Link>
      </div>
      <div className="social-media">
        <h2>You can find us on:</h2>
        <div className={styles["social-icons"]}>
          <Link href="/">
            <a>
              <Image src={facebook} />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Image src={instagram} />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Image src={whatsapp} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
