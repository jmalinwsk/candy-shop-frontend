import React from "react";
import { FaRegHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  let location = useLocation();
  const { grid } = props;
  return (
    <>
      <div
        className={`${location.pathname === "/store" ? `col-${grid}` : "col"} `}
      >
        <div className="product-card">
          <div className="wishlist-icon position-absolute">
            <FaRegHeart />
          </div>
          <div className="product-image">
            <Link to="/store/product/:id">
              {" "}
              <img
                src="images/products/hubba-bubba-bubble-tap-sour-blue-raspberry.jpg"
                className="img-fluid"
                alt="product"
              />
            </Link>
          </div>
          <div className="product-details">
            <Link to="/store/product/:id">
              <h5 className="product-title">
                Hubba Bubba Bubble Tape Sour Blue Raspberry
              </h5>
            </Link>

            <ReactStars
              count={5}
              value={4.5}
              size={20}
              isHalf={true}
              edit={false}
            />
            <p
              className={`product-description ${grid === 12 ? "d-block" : "d-none"}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <p className="price">$4.50 USD</p>
            <div className="add-to-cart">
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
