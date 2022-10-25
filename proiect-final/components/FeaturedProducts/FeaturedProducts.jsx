import React from "react";
import styles from "./featuredProducts.module.css";

import Image from "next/future/image";
import Waffle from "../../images/waffle_blw.png";
import Cake from "../../images/cake_blw.png";
import Pie from "../../images/pies_blw.png";
import Pancake from "../../images/pancakes_blw.png";

export default function FeaturedProducts() {
  return (
    <div className={styles.featured_products}>
      <Image
        src={Waffle}
        className={styles.featured_product}
        id={styles.waffle}
      />
      <Image src={Cake} className={styles.featured_product} id={styles.cake} />
      <Image src={Pie} className={styles.featured_product} id={styles.pie} />
      <Image
        src={Pancake}
        className={styles.featured_product}
        id={styles.pancake}
      />
    </div>
  );
}
