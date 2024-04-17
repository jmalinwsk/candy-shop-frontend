import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import ProductCard from "../components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import hariboLogo from "../images/logos/haribo.png";
import skittlesLogo from "../images/logos/skittles.png";
import mmsLogo from "../images/logos/mms.png";
import hubbaBubbaLogo from "../images/logos/hubba-bubba.png";
import chupaChupsLogo from "../images/logos/chupa-chups.png";
import lollipopsCategoryImage from "../images/categories/lollipops.jpg";
import gummiesCategoryImage from "../images/categories/gummies.jpg";
import chewingGumsCategoryImage from "../images/categories/chewing-gums.jpg";
import candiesCategoryImage from "../images/categories/candies.jpg";
import marshmallowsCategoryImage from "../images/categories/marshmallows.jpg";
import firstMainBanner from "../images/banners/main-banner-1.jpg";
import firstSideBanner from "../images/banners/side-banner-1.jpg";
import secondSideBanner from "../images/banners/side-banner-2.jpg";

import "swiper/css";
import "swiper/css/pagination";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/productSlice";

const Home = () => {
  const productState = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const getAllProducts = () => {
    dispatch(getProducts());
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <Meta title={"Candy Shop"} />
      <SectionContainer className="banners-wrapper py-3">
        <div className="col-8">
          <Swiper
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <img
                src={firstMainBanner}
                className="img-fluid rounded-2"
                alt="Main promo banner"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={firstMainBanner}
                className="img-fluid rounded-2"
                alt="Main promo banner"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-4 d-flex flex-wrap">
          <img
            src={firstSideBanner}
            className="img-fluid rounded-2 pb-1"
            alt="First side promo banner"
          />
          <img
            src={secondSideBanner}
            className="img-fluid rounded-2 pt-1"
            alt="Second side promo banner"
          />
        </div>
      </SectionContainer>
      <SectionContainer className="new-wrapper py-3">
        <div className="col-12">
          <h3 className="section-heading">New arrivals</h3>
        </div>
        <ProductCard className="p-0" />
        <ProductCard className="p-0" />
        <ProductCard className="p-0" />
        <ProductCard className="p-0" />
      </SectionContainer>
      <SectionContainer className="categories-wrapper py-3">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between align-items-center">
              <div className="col">
                <Link to="/">
                  <img src={lollipopsCategoryImage} alt="lollipops" />
                  <div className="category-name-wrapper">
                    <p>Lollipops</p>
                  </div>
                </Link>
              </div>
              <div className="col">
                <Link to="/">
                  <img src={gummiesCategoryImage} alt="gummies" />
                  <div className="category-name-wrapper">
                    <p>Gummies</p>
                  </div>
                </Link>
              </div>
              <div className="col">
                <Link to="/">
                  <img src={chewingGumsCategoryImage} alt="chewing gums" />
                  <div className="category-name-wrapper">
                    <p>Chewing Gums</p>
                  </div>
                </Link>
              </div>
              <div className="col">
                <Link to="/">
                  <img src={candiesCategoryImage} alt="candies" />
                  <div className="category-name-wrapper">
                    <p>Candies</p>
                  </div>
                </Link>
              </div>
              <div className="col">
                <Link to="/">
                  <img src={marshmallowsCategoryImage} alt="marshmallows" />
                  <div className="category-name-wrapper">
                    <p>Marshmallows</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer className="brands-wrapper py-3">
        <div className="col-12">
          <h3 className="section-heading">Featured brands</h3>
          <div className="brands">
            <Marquee pauseOnHover="true">
              <img src={hariboLogo} alt="Haribo" />
              <img src={skittlesLogo} alt="Skittles" />
              <img src={mmsLogo} alt="m&m's" />
              <img src={hubbaBubbaLogo} alt="Hubba Bubba" />
              <img src={chupaChupsLogo} alt="Chupa Chups" />
            </Marquee>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer className="featured-wrapper py-3">
        <div className="col-12">
          <h3 className="section-heading">Featured products</h3>
          <Swiper
            slidesPerView={4}
            grabCursor={true}
            spaceBetween={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className=""
          >
            <SwiperSlide className="me-3">
              <ProductCard
                data={productState.filter((product) =>
                  product.tags.includes("featured"),
                )}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </SectionContainer>
      <SectionContainer className="about-wrapper py-3">
        <div className="col-12">
          <h3 className="section-heading">About our shop</h3>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </SectionContainer>
    </>
  );
};

export default Home;
