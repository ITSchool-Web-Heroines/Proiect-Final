import React from 'react';
import Credit from '../components/Credit';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';


const Testimoniale = () => {
  return (
    <>
      <Navbar />
      <section className="home" id="home">
        <div className="box">
          <div className="image">
            <img src="images/home-img-1.png" alt="home" />
          </div>
          <div className="content">
            <h3>Ce spun clientii despre noi?</h3>
            <p>
              {" "}
              Clientii nostri ne lasa constant feedback pentru ca noi sa ne
              putem imbunatatii serviciile constant.
            </p>
            <a href="#reviews" className="btn">
              read more
            </a>
          </div>
        </div>
      </section>
      <section className="reviews" id="reviews">
        <h1 className="heading">Ce reviewuri avem?</h1>
        <div className="box-container">
          <div className="box">
            <div className="user">
              <img src="images/pic-1.png" alt="matei" />
              <div className="info">
                <h3>Matei Ioan</h3>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
            </div>
            <p className="text">
              Am lucrat cu cei de la Motion Agency timp de 3 ani si rezultatele nu au intarziat sa apara.

            </p>
          </div>
          <div className="box">
            <div className="user">
              <img src="images/pic-2.png" alt="alexandra" />
              <div className="info">
                <h3>Alexandra Ioana</h3>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
            </div>
            <p className="text">
              Am lucrat la diverse proiecte de PR cu Motion Agency si au fost un real succes pentru clubul nostru.
            </p>
          </div>
          <div className="box">
            <div className="user">
              <img src="images/pic-3.png" alt="" />
              <div className="info">
                <h3>Andrei Octavian</h3>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
            </div>
            <p className="text">
              Daca vreti sa aveti alaturi de clubul specialisti in marketing sportiv, Motion Agency sunt echipa de care orice club are nevoie.
            </p>
          </div>
        </div>
      </section>
      <Newsletter />
      <Credit />
    </>
  );
}

export default Testimoniale;
