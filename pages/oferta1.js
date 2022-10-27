import React from "react";
import Layout from "../components/Layout/Layout";
import Image from "next/future/image";
import Cover from "../images/waffle_cover.jpg";
import Waffle1 from "../images/w1.jpg";
import Waffle2 from "../images/w2.jpg";
import Waffle3 from "../images/w3.jpg";
import styles from "../styles/oferta.module.css";

export default function Oferta1() {
  return (
    <Layout title="Crazy Waffle">
      <div className={styles.cover}>
        <Image src={Cover} alt="cover" className={styles.cover} />
      </div>
      <div className={styles.space}></div>
      <div className={styles.display}>
        <Image src={Waffle1} alt="Waffle" className={styles.img} />
        <div className={styles.display_text}>
          <h2>Waffle cu afine</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className={styles.display2}>
        <div className={styles.display_text}>
          <h2>Waffle cu capsuni</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <Image src={Waffle3} alt="Waffle" className={styles.img} />
      </div>
      <div className={styles.display}>
        <Image src={Waffle2} alt="Waffle" className={styles.img} />
        <div className={styles.display_text}>
          <h2>Waffle cu ciocolata</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </Layout>
  );
}
