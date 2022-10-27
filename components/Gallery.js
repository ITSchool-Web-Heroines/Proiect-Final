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
import photo15 from "./pictures/photo15.jpg";
import photo16 from "./pictures/photo16.jpg";

export default function Gallery() {
  const images = [
    {
      src: photo1,
      alt: "Handmade leather journals and photo albums",
      row: "1 / 2",
      column: "1 / 2",
    },
    {
      src: photo2,
      alt: "Handmade leather journals and photo albums",
      row: "2 / 3",
      column: "1 / 2",
    },
    {
      src: photo3,
      alt: "Handmade leather journals and photo albums",
      row: "2 / 3",
      column: "2 / 3",
    },
    {
      src: photo4,
      alt: "Handmade leather journals and photo albums",
      row: "1 / 2",
      column: "2 / 3",
    },
    {
      src: photo5,
      alt: "Handmade leather journals and photo albums",
      row: "2 / 3",
      column: "3 / 4",
    },
    {
      src: photo6,
      alt: "Handmade leather journals and photo albums",
      row: "3 / 4",
      column: "1 / 2",
    },
    {
      src: photo7,
      alt: "Handmade leather journals and photo albums",
      row: "3 / 4",
      column: "3 / 4",
    },
    {
      src: photo8,
      alt: "Handmade leather journals and photo albums",
      row: "4 / 5",
      column: "1 / 2",
    },
    {
      src: photo9,
      alt: "Handmade leather journals and photo albums",
      row: "4 / 5",
      column: "2 / 3",
    },
    {
      src: photo10,
      alt: "Handmade leather journals and photo albums",
      row: "4 / 5",
      column: "3 / 4",
    },
    {
      src: photo11,
      alt: "Handmade leather journals and photo albums",
      row: "1 / 2",
      column: "4 / 5",
    },
    {
      src: photo12,
      alt: "Handmade leather journals and photo albums",
      row: "2 / 3",
      column: "4 / 5",
    },
    {
      src: colorpick,
      alt: "Handmade leather journals and photo albums",
      row: "3 / 4",
      column: "4 / 5",
    },
    {
      src: dimensions,
      alt: "Handmade leather journals and photo albums",
      row: "4 / 5",
      column: "4 / 5",
    },
    {
      src: photo15,
      alt: "Handmade leather journals and photo albums",
      row: "1 / 2",
      column: "3 / 4",
    },
    {
      src: photo16,
      alt: "Handmade leather journals and photo albums",
      row: "3 / 4",
      column: "2 / 3",
    },
  ];
  return (
    <div className={styles.wraper}>
      <div className={styles["gallery-container"]}>
        {images.map((img) => (
          <Image
            key={img.src.src}
            src={img.src}
            alt={img.alt}
            className={styles.photo}
            style={{
              gridRow: img.row,
              gridColumn: img.column,
            }}
          />
        ))}
      </div>
    </div>
  );
}
