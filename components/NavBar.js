import React from "react";
import NavLink from "./NavLink";
import styles from "./NavBar.module.scss";

function NavBar() {
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

export default NavBar;
