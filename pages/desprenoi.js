import React from "react";
import Credit from "../components/Credit";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Desprenoi = () => {
  return (
    <>
      <Navbar />
      <section className="home" id="home">
        <div className="box">
          <div className="content">
            <h3>Care este povestea Motion Agency?</h3>
            <h3>
              <a href className="read-more-btn">
                Read More
              </a>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt id repellendus numquam. Maxime veritatis consequatur
                nobis architecto incidunt rem esse?
                <span className="dots">...</span>{" "}
                <span className="more-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </p>
            </h3>
          </div>
          <div className="image">
            <img src="images/home-img-2.png" alt="home" />
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
            <h3>Ce Vrei Sa Ne Transmiti?</h3>
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
    </>
  );
};

export default Desprenoi;
