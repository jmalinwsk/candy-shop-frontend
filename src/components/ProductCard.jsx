import React from "react";
import { FaRegHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

const ProductCard = () => {
  return (
    <div className="col">
      <div className="product-card">
        <div className="wishlist-icon position-absolute">
          <FaRegHeart />
        </div>
        <div className="product-image">
          <img
            src="images/products/hubba-bubba-bubble-tap-sour-blue-raspberry.jpg"
            className="img-fluid"
            alt="product"
          />
        </div>
        <div className="product-details">
          <h5 className="product-title">
            Hubba Bubba Bubble Tape Sour Blue Raspberry
          </h5>
          <ReactStars
            count={5}
            value={4.5}
            size={20}
            isHalf={true}
            edit={false}
          />
          <p className="price">$4.50 USD</p>
        </div>
        <div className="add-to-cart">
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
