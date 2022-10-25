import React from "react";
import Link from "next/link";
import styles from "./favproduct.module.css";

import Image from "next/future/image";
import Fav from "../../images/new_product.jpg";

export default function FavProduct() {
  return (
    <div className={styles.container}>
      <Image src={Fav} className={styles.image} />
      <div className={styles.text_image}>
        <h2> ÎN TREND!</h2>
        <h3> Waffle cu căpșuni</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Link href="/produse">
          <a className={styles.see_more}> Vezi mai multe</a>
        </Link>
      </div>
    </div>
  );
}
