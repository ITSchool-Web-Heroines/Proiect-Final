import React from "react";
import Credit from "../components/Credit";
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
        <h1 className="heading"> Contact</h1>
        <div className="row">
          <form action id="form">
            <h3>Ce vrei sa ne transmiti?</h3>
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
            <div className="gap-2 d-flex">
              <input type="submit" value="send now" className="btn" />
              <button type="reset" className="btn">
                Reset form
              </button>
            </div>
            <p id="log" />
          </form>
        </div>
      </section>
      <Newsletter />
      <Credit />
    </>
  );
};

export default Servicii;
