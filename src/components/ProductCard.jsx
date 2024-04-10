import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  let location = useLocation();
  const { grid, data } = props;
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div
            key={`"product_"${index}`}
            className={`${location.pathname === "/store" ? `col-${grid}` : "col"}`}
          >
            <div className="product-card">
              <div className="wishlist-icon position-absolute">
                <FaRegHeart />
              </div>
              <Link to="/store/product/:id">
                <img src={item?.images[0].url} alt="product" />
              </Link>
              <div className="product-details text-center text-truncate">
                <Link to="/store/product/:id">
                  <h6 className="product-title ">{item?.title}</h6>
                </Link>
                <p
                  className={`product-description ${grid === 12 ? "d-block" : "d-none"}`}
                >
                  {item?.description}
                </p>
                <p className="price-text">$4.50 USD</p>
                <div className="text-center p-2">
                  <button>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
