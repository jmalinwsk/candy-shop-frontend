import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getUserCart,
  removeProductFromCart,
  updateProductQuantityInCart,
} from "../features/user/userSlice";

const CartProductCard = (props) => {
  const dispatch = useDispatch();
  const { item, index } = props;
  const [quantity, setQuantity] = useState(null);
  const removeProduct = (productId) => {
    dispatch(removeProductFromCart(productId));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 200);
  };
  const updateQuantity = (productId, quantity) => {
    dispatch(
      updateProductQuantityInCart({ productId: productId, quantity: quantity }),
    );
    setTimeout(() => {
      dispatch(getUserCart());
    }, 200);
  };
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
          <p className="price-text-light text-start">
            ${item?.productId.price} USD
          </p>
        </div>
        <div className="cart-col-3 d-flex align-items-center">
          <input
            type="number"
            min={1}
            max={10}
            className="form-control w-50 me-2"
            onChange={(e) => {
              updateQuantity(item?.productId._id, e.target.value);
              setQuantity(e.target.value);
            }}
            value={quantity ? quantity : item?.quantity}
          />
          <FaTrash
            onClick={(e) => {
              removeProduct(item?.productId._id);
            }}
            className="ms-4"
          />
        </div>
        <div className="cart-col-4">
          <p className="price-text-light text-start">${item?.price} USD</p>
        </div>
      </div>
    </>
  );
};

export default CartProductCard;
