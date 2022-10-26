import React from "react";
import Credit from "../components/Credit";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Link from 'next/link'

const Servicii = () => {
  return (
    <>
      <Navbar />

      <section className="home" id="home">
        <div className="box">
          <div className="image">
            <img src="images/home-img-1.png" alt="" />
          </div>
          <div className="content">
            <h3>Ce servicii oferim?</h3>
            <p>
              Dezvoltam campanii publicitare, atat la nivel de local cat si la nivel national, oferim si consultanta in realizarea planurilor si strategiilor de comunicare.            </p>
            <a href="/contact" className="btn">
              Cere Oferta
            </a>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <h3>Oferte Personalizata</h3>
            <p>
              Nevoile, cerintele, comportamentul si asteptarile specifice ale consumatorilor din segmentul tinta
            </p>
            <a href="/contact" className="btn">
              Cere Oferta
            </a>
          </div>
          <div className="image">
            <img src="images/home-img-2.png" alt="" />
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src="images/home-img-3.png" alt="" />
          </div>
          <div className="content">
            <h3>Peste 121 de clienti in portofoliu</h3>
            <p>
              Partenerii nostri activeaza in diverse industrii, astfel am acumulat experienta necesara pentru a putea livra rezultate in diferite nise.
            </p>
            <a href="/contact" className="btn">
              Cere Oferta
            </a>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <ContactForm title={"Trimite un mesaj"} btnvalue={"Trimite"} />
      </section>

      <Newsletter />
      <Credit />
    </>
  );
};

export default Servicii;
