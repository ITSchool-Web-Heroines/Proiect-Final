import Link from "next/link";
import React from "react";
import ContactForm from "../components/ContactForm";
import Credit from "../components/Credit";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="home" id="home">
        <div className="box">
          <div className="image">
            <img src="images/home-img-1.png" alt="" />
          </div>
          <div className="content">
            <h3>Ai o afacere pe care vrei sa o cresti?</h3>
            <p>
              Hai sa discutam despre proiectul tau! Te rog sa ne trimiti o descriere cu ceea ce urmaresti tu sa obtii.


            </p>
            <Link href="#contact" className="btn">
              Mergi la contact
            </Link>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h1 className="heading">
          {" "}
          <span>Contact</span>
        </h1>
        <div className="row">
        <ContactForm title={"Trimite un mesaj"} btnvalue={"Trimite"} />
        </div>
      </section>
      <Credit />
    </>
  );
};

export default Contact;
