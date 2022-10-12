import styles from "../styles/Nav.module.css";
import Logo from "./Logo";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#" className="logo">
        <Logo />
      </a>
      <ul className={styles["menu-btn"]}>
        <li>
          <a href="#" className={styles["nav-item"]}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={styles["nav-item"]}>
            About
          </a>
        </li>
        <li>
          <a href="#" className={styles["nav-item"]}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
