import React from "react";

const HomeMain = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="box">
          <div className="image">
            <img src="images/home-img-1.png" alt="" />
          </div>
          <div className="content">
            <h3>Agentie de Marketing Sportiv</h3>
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
            <h3>Servicii de inalta calitate</h3>
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
            <h3>Cere oferta personalizata</h3>
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
    </>
  );
};

export default HomeMain;
