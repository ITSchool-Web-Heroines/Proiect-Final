import React from "react";
import Credit from "../components/Credit";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              id repellendus numquam. Maxime veritatis consequatur nobis
              architecto incidunt rem esse?
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <h3>Oferte Personalizata</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              id repellendus numquam. Maxime veritatis consequatur nobis
              architecto incidunt rem esse?
            </p>
            <a href="#" className="btn">
              read more
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              id repellendus numquam. Maxime veritatis consequatur nobis
              architecto incidunt rem esse?
            </p>
            <a href="#" className="btn">
              read more
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
