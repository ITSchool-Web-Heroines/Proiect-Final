import Link from "next/link";
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
            <Link href="#" className="btn">
              read more
            </Link>
          </div>
        </div>

        <div className="box">
          <div className="content">
            <h3>Servicii de inalta calitate</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              id repellendus numquam. Maxime veritatis consequatur nobis
              architecto incidunt rem esse?
            </p>
            <Link href="/desprenoi" className="btn">
              Afla mai multe
            </Link>
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
            <Link href="#" className="btn">
              read more
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeMain;
