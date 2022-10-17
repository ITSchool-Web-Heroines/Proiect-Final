import React from "react";

// STYLES
import NavLink from "../NavLink";

// COMPONENTS
import styles from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <nav className={styles.menu}>
      <NavLink href="/" className={styles.home}>
        Acasa
      </NavLink>
      <NavLink href="/about" className={styles.about}>
        Detalii
      </NavLink>
      <NavLink href="/projects" className={styles.projects}>
        proiecte
      </NavLink>
    </nav>
  );
}
