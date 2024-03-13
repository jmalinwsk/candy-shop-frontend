import React from "react";
import { RxCross1 } from "react-icons/rx";
import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist - Candy Shop"} />
      <Breadcrumb title="Wishlist" />
      <div className="wishlist-wrapper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex flex-wrap">
              <div className="wishlist-card col-3 d-flex">
                <div className="wishlist-card-details">
                  <img
                    src="images/products/hubba-bubba-bubble-tap-sour-blue-raspberry.jpg"
                    alt="product"
                    className="img-fluid"
                  />
                  <h5 className="product-title">
                    Hubba Bubba Bubble Tape Sour Blue Raspberry
                  </h5>
                  <p className="price">$4.50 USD</p>
                </div>
                <div className="remove-from-wishlist mx-1">
                  <RxCross1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
