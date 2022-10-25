import React from "react";
import Image from "next/future/image";
import styles from "../styles/gallery.module.css";
import photo1 from "./pictures/photo1.jpg";
import photo2 from "./pictures/photo2.jpg";
import photo3 from "./pictures/photo3.jpg";
import photo4 from "./pictures/photo4.jpg";
import photo5 from "./pictures/photo5.jpg";
import photo6 from "./pictures/photo6.jpg";
import photo7 from "./pictures/photo7.jpg";
import photo8 from "./pictures/photo8.jpg";
import photo9 from "./pictures/photo9.jpg";
import photo10 from "./pictures/photo10.jpg";
import photo11 from "./pictures/photo11.jpg";
import photo12 from "./pictures/photo12.jpg";
import colorpick from "./pictures/colorpick.JPG";
import dimensions from "./pictures/dimensions.JPG";

export default function Gallery() {
  return (
    <div className={styles.wraper}>
      <div className={styles["gallery-container"]}>
        <Image src={photo1} alt="handmade product" className={styles.photo1} />
        <Image src={photo2} alt="handmade product" className={styles.photo2} />
        <Image src={photo3} alt="handmade product" className={styles.photo3} />
        <Image src={photo4} alt="handmade product" className={styles.photo4} />
        <Image src={photo5} alt="handmade product" className={styles.photo5} />
        <Image src={photo6} alt="handmade product" className={styles.photo6} />
        <Image src={photo7} alt="handmade product" className={styles.photo7} />
        <Image src={photo8} alt="handmade product" className={styles.photo8} />
        <Image
          src={colorpick}
          alt="handmade product"
          className={styles.photo9}
        />
        <Image
          src={dimensions}
          alt="handmade product"
          className={styles.photo10}
        />
        <Image
          src={photo12}
          alt="handmade product"
          className={styles.photo11}
        />
        <Image src={photo9} alt="handmade product" className={styles.photo12} />
        <Image
          src={photo10}
          alt="handmade product"
          className={styles.photo13}
        />
        <Image
          src={photo11}
          alt="handmade product"
          className={styles.photo14}
        />
      </div>
    </div>
  );
}
