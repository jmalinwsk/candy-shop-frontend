import React from "react";
import { FaRegHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import hubbaBubbaImage from "../images/products/hubba-bubba-bubble-tap-sour-blue-raspberry.jpg";

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
            <Link to="/store/product/:id">
              {" "}
              <img
                src={hubbaBubbaImage}
                alt="product"
              />
            </Link>
          <div className="product-details">
            <Link to="/store/product/:id">
              <h6 className="product-title">
                Hubba Bubba Bubble Tape Sour Blue Raspberry
              </h6>
            </Link>
            <p
              className={`product-description ${grid === 12 ? "d-block" : "d-none"}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <p className="price-text">$4.50 USD</p>
            <div className="text-center p-2">
            <button >Add to cart</button>
            </div>
              
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
