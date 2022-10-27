import React from "react";
import LogoS from "./LogoS.png";
import Image from "next/image";
import styles from "../styles/Nav.module.css";

export default function Logo() {
  return (
    <div>
      <Image
        src={LogoS}
        alt="Logo"
        width={100}
        height={100}
        className={styles.logo}
      />
    </div>
  );
}
