import React from "react";
import Marquee from "react-fast-marquee";
import ProductCard from "../components/ProductCard";

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
          <div className="row">
          <div className="col-12">
          <div className="categories d-flex justify-content-between align-items-center">
              <div className="col">
                <img
                  src="images/high-angle-view-colorful-lollipops-yellow-surface.jpg"
                  className="img-fluid rounded-4 p-2"
                  alt="lollipops"
                />
                <p>Lollipops</p>
              </div>
              <div className="col">
                <img
                  src="images/still-life-colorful-gummy-bears.jpg"
                  className="img-fluid rounded-4 p-2"
                  alt="gummy bears"
                />
                <p>Gummies</p>
              </div>
              <div className="col">
                <img
                  src="images/zigzags-from-jelly-strips.jpg"
                  className="img-fluid rounded-4 p-2"
                  alt="chewing gums"
                />
                <p>Chewing gums</p>
              </div>
              <div className="col">
                <img
                  src="images/heap-nice-candy-buttons.jpg"
                  className="img-fluid rounded-4 p-2"
                  alt="candies"
                />
                <p>Candies</p>
              </div>
              <div className="col">
                <img
                  src="images/pink-soft-marshmallows.jpg"
                  className="img-fluid rounded-4 p-2"
                  alt="marshmallows"
                />
                <p>Marshmallows</p>
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-3">
        <div className="container-xxl">
          <h3 className="section-heading">Featured brands</h3>
          <div className="row">
            <div className="brands">
              <Marquee pauseOnHover="true">
                <img src="images/haribo-logo.png" alt="Haribo" />
                <img src="images/skittles-logo.png" alt="Skittles" />
                <img src="images/mms-logo.png" alt="m&m's" />
                <img src="images/hubba-bubba-logo.png" alt="Hubba Bubba" />
                <img src="images/chupa-chups-logo.png" alt="Chupa Chups" />
              </Marquee>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-4 py-3">
        <div className="container-xxl">
        <div className="row">
        <div className="col-12">
        <h3 className="section-heading">New arrivals</h3>
        </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        </div>
      </section>
      <section className="home-wrapper-5 py-3">
        <div className="container-xxl">
        <div className="row rol-cols-4">
        <div className="col-12">
        <h3 className="section-heading">Featured products</h3>
        </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        </div>
      </section>
      <section className="home-wrapper-6 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">About our shop</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </section> 
    </>
  );
};

export default Home;
