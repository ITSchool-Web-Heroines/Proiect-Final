import React from "react";
import Image from "next/future/image";
import FocusImg from "../../images/bck_products.png";
import styles from "./headerProducts.module.css";

export default function HeaderProducts() {
  return (
    <div className={styles.header}>
      <Image src={FocusImg} className={styles.img} />
      <h1 className={styles.title}>Cele mai bune deserturi </h1>
    </div>
  );
}
