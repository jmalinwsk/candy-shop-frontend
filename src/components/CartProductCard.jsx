import React from "react";
import { FaTrash } from "react-icons/fa";
import hubbaBubbaImage from "../images/products/hubba-bubba-bubble-tap-sour-blue-raspberry.jpg";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CartProductCard = (props) => {
  const dispatch = useDispatch();
  const { item, index } = props;
  return (
    <>
      <div
        key={`"cart-item-"${index}`}
        className="cart-data py-3 d-flex justify-content-between align-items-center"
      >
        <div className="cart-col-1 d-flex align-items-center">
          <div className="w-25">
            <Link to={`/store/${item?.productId._id}`}>
              <img src={item?.productId.images[0].url} alt="product" />
            </Link>
          </div>
          <div className="w-75 ms-2">
            <Link to={`/store/${item?.productId._id}`}>
              <h5 className="product-title ">{item?.productId.title}</h5>
            </Link>
          </div>
        </div>
        <div className="cart-col-2">
          <p className="price-text text-start">${item?.productId.price} USD</p>
        </div>
        <div className="cart-col-3 d-flex align-items-center">
          <p className="price-text text-start">{item?.quantity}</p>
          <FaTrash className="ms-4" />
        </div>
        <div className="cart-col-4">
          <p className="price-text text-start">${item?.price} USD</p>
        </div>
      </div>
    </>
  );
};

export default CartProductCard;
