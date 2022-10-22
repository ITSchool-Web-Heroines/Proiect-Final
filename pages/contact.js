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
            <a href="#contact" className="btn">
              Mergi la contact
            </a>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h1 className="heading">
          {" "}
          <span>Contact</span>
        </h1>
        <div className="row">
          <form className="contact-form">
            <h3>Contacteaza-ne rapid</h3>
            <input
              type="text"
              placeholder="Numele"
              className="input-box focus-input"
            />
            <input
              type="email"
              placeholder="Email"
              className="input-box focus-input"
            />
            <input
              type="number"
              placeholder="Telefon"
              className="input-box focus-input"
            />
            <input
              type="text"
              placeholder="Subiect"
              className="input-box focus-input"
            />
            <textarea
              name
              placeholder="Mesaj"
              className="input-box focus-input"
              id
              cols={30}
              rows={10}
              defaultValue={""}
            />
            <input type="submit" value="send now" className="btn focus-input" />
          </form>
        </div>
      </section>
      <Credit />
    </>
  );
};

export default Contact;
