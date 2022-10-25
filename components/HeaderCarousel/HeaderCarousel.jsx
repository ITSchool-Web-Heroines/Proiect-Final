import React from "react";
import styles from "./headerCarousel.module.css";
import Image from "next/future/image";
import Carousel_first from "../../images/carousel2.jpg";
import Carousel_second from "../../images/carousel1.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function headerCarousel() {
  return (
    <div className={styles.carouselEdit}>
      <Carousel autoPlay infiniteLoop className={styles.carouselEd}>
        <a href="/oferta1">
          <div>
            <Image
              src={Carousel_first}
              alt="first_img"
              className={styles.carousel_img}
            />
          </div>
        </a>
        <a href="/oferta2">
          <div>
            <Image
              src={Carousel_second}
              alt="second_img"
              className={styles.carousel_img}
            />
          </div>
        </a>
      </Carousel>
    </div>
  );
}
