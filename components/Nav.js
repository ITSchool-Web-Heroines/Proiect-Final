import styles from "../styles/Nav.module.css";
import Logo from "./Logo";
import Link from "next/link";

const NavLinks = [
  {
    pathname: "/",
    label: "Home",
  },
  {
    pathname: "/about",
    label: "About",
  },
  {
    pathname: "/order",
    label: "Order",
  },
];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className="logo">
          <Logo />
        </a>
      </Link>

      <ul className={styles["menu-btn"]}>
        {NavLinks.map((link) => (
          <li key={link.pathname} className={styles.item}>
            <Link href={link.pathname}>
              <a className={styles["nav-item"]}>{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
