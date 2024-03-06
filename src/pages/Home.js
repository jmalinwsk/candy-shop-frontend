import React from "react";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-8">
              <img
                src="images/main-banner.jpg"
                className="img-fluid rounded-2"
                alt="Main promo banner"
              />
            </div>
            <div className="col-4 d-flex flex-wrap">
              <img
                src="images/side-banner-1.jpg"
                className="img-fluid rounded-2 pb-1"
                alt="First side promo banner"
              />
              <img
                src="images/side-banner-2.jpg"
                className="img-fluid rounded-2 pt-1"
                alt="Second side promo banner"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-3">
        <div className="container-xxl">
          <h3>Featured brands</h3>
          <div className="row row-cols-4 align-items-center">
            <div className="col-3">
              <img
                src="images/haribo-logo.png"
                className="img-fluid"
                alt="Haribo"
              />
            </div>
            <div className="col-3">
              <img
                src="images/skittles-logo.png"
                className="img-fluid"
                alt="Skittles"
              />
            </div>
            <div className="col-3">
              <img
                src="images/mms-logo.png"
                className="img-fluid"
                alt="m&m's"
              />
            </div>
            <div className="col-3">
              <img
                src="images/chupa-chups-logo.png"
                className="img-fluid"
                alt="Chupa Chups"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="categories d-flex justify-content-between align-items-center">
            <div className="col">
              <img src="images/high-angle-view-colorful-lollipops-yellow-surface.jpg" className="img-fluid rounded-4 p-2"/>
                <p>Lollipops</p>
              </div>
              <div className="col">
                <img src="images/still-life-colorful-gummy-bears.jpg" className="img-fluid rounded-4 p-2" alt="gummy bears"/>
                <p>Gummies</p>
              </div>
              <div className="col">
                <img src="images/still-life-colorful-gummy-bears.jpg" className="img-fluid rounded-4 p-2" alt="chewing gums"/>
                <p>Chewing gums</p>
              </div>
              <div className="col">
                <img src="images/still-life-colorful-gummy-bears.jpg" className="img-fluid rounded-4 p-2" alt="candies"/>
                <p>Candies</p>
              </div>
              <div className="col">
                <img src="images/pink-soft-marshmallows.jpg" className="img-fluid rounded-4 p-2" alt="marshmallows"/>
                <p>Marshmallows</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
