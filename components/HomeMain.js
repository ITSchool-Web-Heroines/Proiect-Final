
import React from "react";

const HomeMain = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="box">
          <div className="image">
            <img src={"images/home-img-1.png"} alt="home" />
          </div>
          <div className="content">
            <h3>Agentie de Marketing Sportiv</h3>
            <p>
              Noi suntem agentia ta de marketing online orientat spre rezultat!
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box">
          <div className="content">
            <h3>Servicii de inalta calitate</h3>
            <p>
            Suntem agentia digitala specializata in servicii complete, de tip 360°, pentru promovare online, dezvoltari web, grafica si continut SEO. 
            </p>
            <a href="#" className="btn">
              Afla mai multe
            </a>
          </div>
          <div className="image">
            <img src={"images/home-img-2.png"} alt="home" />
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={"images/home-img-3.png"} alt="home" />
          </div>
          <div className="content">
            <h3>Cere oferta personalizata</h3>
            <p>
              Suntem o agentie digitala full service si echipa noastra este formata din specialisti cu experienta de peste 10 ani
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeMain;
