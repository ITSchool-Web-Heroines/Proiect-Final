import React from "react";
import Credit from "../components/Credit";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ContactForm from "../components/ContactForm.js";

const Desprenoi = () => {
  return (
    <>
      <title>Despre Noi - Motion Agency </title>
      <Navbar />
      <section className="home" id="home">
        <div className="box">
          <div className="content">
            <h3>Care este povestea Motion Agency?</h3>
            <h3>
              <p className="text">
                Noi suntem agentia ta de marketing online orientat spre rezultat!Viziunea Panorama Advertising este ca pe termen lung, sustinuti de activele si know how-ul nostru, sa dezvoltam noi servicii de publicitate si marketing online, care sa vina in sprijinul continuu si evolutiv al partenerilor, in promovarea si proiectarea ideilor de succes.
              </p>
            </h3>
          </div>
          <div className="image">
            <img src={"images/home-img-2.png"} alt="home" />
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h1 className="heading">
          {" "}
          <span>Contact</span>
        </h1>
        <ContactForm title={"Trimite un mesaj"} btnvalue={"Trimite"} />

      </section>
      <Newsletter />
      <Credit />
    </>
  );
};

export default Desprenoi;
