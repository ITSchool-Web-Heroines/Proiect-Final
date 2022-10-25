import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import menu from "./data/menu";


const Navbar = () => {

  return (
      <nav className={styles.menu}>
        {menu.map((list) => (

          <li 
          key={list.pathname} className={styles.navbar}>

            <Link href={list.pathname} passHref>
                <a className={styles.nav}>{list.label}</a>
            </Link>
          </li>
        ))}
        
      </nav> 
  );
};


export default Navbar;
