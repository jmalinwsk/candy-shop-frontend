import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-8">
                <img src="images/main-banner.jpg" className="img-fluid rounded-2" alt="Main promo banner"/>
            </div>
            <div className="col-4 d-flex flex-wrap">
            <img src="images/side-banner-1.jpg" className="img-fluid rounded-2 pb-1" alt="First side promo banner" />
              <img src="images/side-banner-2.jpg" className="img-fluid rounded-2 pt-1" alt="Second side promo banner" />
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-3">
        <div className="container-xxl">
        <h3>Featured brands</h3>
          <div className="row row-cols-4">
            <div className="col-3">
              <img src="images/haribo-logo.png" className="img-fluid" alt="Haribo"/>
            </div>
            <div className="col-3">
              <img src="images/skittles-logo.png" className="img-fluid" alt="Skittles"/>
            </div>
            <div className="col-3">
              <img src="images/kit-kat-logo.png" className="img-fluid" alt="Kit Kat"/>
            </div>
            <div className="col-3">
              <img src="images/milka-logo.png" className="img-fluid" alt="Milka"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
