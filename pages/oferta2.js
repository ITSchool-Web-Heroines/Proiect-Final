import React from "react";
import Layout from "../components/Layout/Layout";
import Image from "next/future/image";
import Cover from "../images/macarons_cover.jpg";
import Macarons1 from "../images/m1.jpg";
import Macarons2 from "../images/m2.jpg";
import Macarons3 from "../images/m3.jpg";
import styles from "../styles/oferta.module.css";

export default function Oferta2() {
  return (
    <Layout title="Editie Limitata">
      <div className={styles.cover}>
        <Image src={Cover} alt="cover" className={styles.cover} />
      </div>
      <div className={styles.space}></div>
      <div className={styles.display2}>
        <div className={styles.display_text}>
          <h2>Macarons cu Mojito</h2>
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
        <Image src={Macarons1} alt="Macarons" className={styles.img} />
      </div>
      <div>
        <div className={styles.display}>
          <Image src={Macarons2} alt="Macarons" className={styles.img} />
          <div className={styles.display_text}>
            <h2>Macarons cu Portocale</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className={styles.display2}>
          <div className={styles.display_text}>
            <h2>Macarons cu fructe</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <Image src={Macarons3} alt="Macarons" className={styles.img} />
        </div>
      </div>
    </Layout>
  );
}
