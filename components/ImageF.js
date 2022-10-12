import React from "react";
import Image from "next/future/image";
import image from "./image.jpg";
import styles from "../styles/Home.module.css";

export default function ImageF() {
  return (
    <div>
      <Image
        src={image}
        alt="handmade table"
        className={styles["first-image"]}
      />
    </div>
  );
}
