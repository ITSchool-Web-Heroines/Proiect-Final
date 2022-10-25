import React from "react";
import Image from "next/future/image";
import photo1 from "./pictures/photo1.jpg";
import photo2 from "./pictures/photo2.jpg";
import photo3 from "./pictures/photo3.jpg";
import styles from "../styles/images.module.css";
import { useState } from "react";

// const [imgHover, setImgHover] = useState(false);
// function handleMouseHover(e) {
//   console.log(e);
//   setImgHover(true);
// }

export default function Cards() {
  return (
    <div className={styles.wraper}>
      <div className={styles["cards-container"]}>
        <div>
          {/* <p className={`${imgHover ? "" : "hidden"}`}>Lorem ipsum</p> */}
          <Image
            src={photo1}
            alt="handmade products"
            className={styles["image-card"]}
            // onClick={handleMouseHover}
          ></Image>
        </div>

        <Image
          src={photo2}
          alt="handmade products"
          className={styles["image-card"]}
        ></Image>

        <Image
          src={photo3}
          alt="handmade products"
          className={styles["image-card"]}
        ></Image>
      </div>
    </div>
  );
}
