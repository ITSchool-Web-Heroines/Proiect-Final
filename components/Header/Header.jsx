import React, { useState, Component, useContext } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import { Store } from "../../info/Store";
import CartButton from "../CartButton/CartButton";

import Image from "next/future/image";
import Logo from "../../images/logo.svg";

export default function Header() {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.mobile}>
          <Link href="/">
            <a>
              <Image src={Logo} alt="logo" className={styles.logo} />
            </a>
          </Link>

          <div onClick={() => setActive(!active)}>
            <div className={active ? styles.activeHamburger : styles.hamburger}>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </div>
          </div>
        </div>
        <div className={active ? styles.activeNav_cont : styles.nav_cont}>
          <Link href="/produse" className={styles.nav_link}>
            <a className={styles.nav_link}> Produse</a>
          </Link>
          <Link href="/contact">
            <a className={styles.nav_link}> Contact</a>
          </Link>
          <Link href="/cart" className={styles.nav_link}>
            <a className={styles.nav_link}>
              <CartButton />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
