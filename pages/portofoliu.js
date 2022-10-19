import Head from "next/head";
import Script from "next/script";
import React from "react";
import Credit from "../components/Credit";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Portololiu = () => {
  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" />
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" /> */}
      </Head>
      <Navbar />
      <section className="home" id="home">
        <div className="box">
          <div className="image">
            <img src="images/home-img-1.png" alt="" />
          </div>
          <div className="content">
            <h3>La ce proiecte am lucrat?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              id repellendus numquam. Maxime .
            </p>
          </div>
        </div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/portofoliu1.jpg" className="d-block w-100" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Echipe de Baschet</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src="images/portofoliu2.jpg" className="d-block w-100" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Competitii sportive</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src="images/portofoliu3.jpg" className="d-block w-100" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Sportivi renumiti</h5>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="services" id="services">
        <h1 className="heading"> Ce va putem oferi?</h1>
        <div className="box-container">
          <div className="box">
            <img src="images/serv-1.png" alt="" />
            <h3>Rezultate garantate</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, delectus!
            </p>
          </div>
          <div className="box">
            <img src="images/serv-2.png" alt="" />
            <h3>Oferte Personalizate</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, delectus!
            </p>
          </div>
          <div className="box">
            <img src="images/serv-3.png" alt="" />
            <h3>Deadline-uri respectate</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, delectus!
            </p>
          </div>
          <div className="box">
            <img src="images/serv-4.png" alt="" />
            <h3>Strategii Moderne de MK</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, delectus!
            </p>
          </div>
          <div className="box">
            <img src="images/serv-5.png" alt="" />
            <h3>Strategii inovative</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, delectus!
            </p>
          </div>
          <div className="box">
            <img src="images/serv-6.png" alt="" />
            <h3>Echipa Dedicata</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, delectus!
            </p>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <h1 className="heading">Contacteaza-ne rapid!</h1>
        <div className="row">
          <form className="form-contact">
            <h3>Trimite un mesaj</h3>
            <input type="text" placeholder="Numele" className="input-box" />
            <input type="email" placeholder="Email" className="input-box" />
            <input type="number" placeholder="Telefon" className="input-box" />
            <input type="text" placeholder="Subiect" className="input-box" />
            <textarea
              name
              placeholder="Mesaj"
              className="input-box"
              id
              cols={30}
              rows={10}
              defaultValue={""}
            />
            <input type="submit" value="Trimite" className="btn" />
          </form>
        </div>
      </section>
      <Newsletter />
      <Credit />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></Script>
    </>
  );
};

export default Portololiu;
