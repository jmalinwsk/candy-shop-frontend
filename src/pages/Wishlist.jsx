import React from "react";
import { RxCross1 } from "react-icons/rx";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import hubbaBubbaImage from "../images/products/hubba-bubba-bubble-tap-sour-blue-raspberry.jpg";
import { Link } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist - Candy Shop"} />
      <Breadcrumbs />
      <SectionContainer className="wishlist-wrapper py-3">
      <div className="col-12 d-flex flex-wrap">
              <div className="wishlist-card col-3 d-flex">
                <div className="product-card d-block">
                  <div>
                    <img src={hubbaBubbaImage} alt="product" />
                  </div>
                  <div className="product-details">
                    <Link to="/store/product/:id">
                      <h6 className="product-title">
                        Hubba Bubba Bubble Tape Sour Blue Raspberry
                      </h6>
                    </Link>
                    <p className="price-text">$4.50 USD</p>
                  </div>
                </div>

                <div className="remove-from-wishlist mx-1">
                  <RxCross1 />
                </div>
              </div>
            </div>
      </SectionContainer>
    </>
  );
};

export default Wishlist;
