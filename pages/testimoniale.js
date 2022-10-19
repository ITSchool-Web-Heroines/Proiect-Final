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
              <img src="images/home-img-1.png" alt="" />
            </div>
            <div className="content">
              <h3>Ce spun clientii despre noi?</h3>
              <p>
                {" "}
                Clientii nostri ne lasa constant feedback pentru ca noi sa ne
                putem imbunatatii serviciile constant.
              </p>
              <a href="#" className="btn">
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
                <img src="images/pic-1.png" alt="" />
                <div className="info">
                  <h3>Clientul 1</h3>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi velit mollitia accusantium consequatur adipisci magni
                architecto quam tenetur rerum odio voluptas quia earum vero est
                error, illo beatae ut repudiandae!
              </p>
            </div>
            <div className="box">
              <div className="user">
                <img src="images/pic-2.png" alt="" />
                <div className="info">
                  <h3>Clientul 2</h3>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi velit mollitia accusantium consequatur adipisci magni
                architecto quam tenetur rerum odio voluptas quia earum vero est
                error, illo beatae ut repudiandae!
              </p>
            </div>
            <div className="box">
              <div className="user">
                <img src="images/pic-3.png" alt="" />
                <div className="info">
                  <h3>Clientul 3</h3>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi velit mollitia accusantium consequatur adipisci magni
                architecto quam tenetur rerum odio voluptas quia earum vero est
                error, illo beatae ut repudiandae!
              </p>
            </div>
          </div>
            </section>
            <Newsletter />
            <Credit/>
      </>
    );
}

export default Testimoniale;
