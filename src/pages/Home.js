import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
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
    </>
  );
};

export default Home;
