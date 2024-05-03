import React, { useEffect } from "react";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionContainer from "../components/SectionContainer";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../features/user/userSlice";
import CartProductCard from "../components/CartProductCard";

const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserCart());
  }, []);
  const cart = useSelector((state) => state.auth.cart);
  let totalPrice = 0;
  return (
    <>
      <Meta title={"Cart - Candy Shop"} />
      <Breadcrumbs />
      <SectionContainer className="cart-wrapper py-3">
        <div className="col-12">
          {cart.length === 0 ? (
            <strong className="py-3">Cart is empty!</strong>
          ) : (
            <>
              <div className="cart-header d-flex justify-content-between align-content-center">
                <h4 className="section-heading cart-col-1">Product</h4>
                <h4 className="section-heading cart-col-2">Price</h4>
                <h4 className="section-heading cart-col-3">Quantity</h4>
                <h4 className="section-heading cart-col-4">Total</h4>
              </div>
              <div className="cart-items">
                {cart?.map((item, index) => {
                  totalPrice += item?.price;
                  return <CartProductCard item={item} index={index} />;
                })}
              </div>
              <div className="subtotal-chechout-wrapper d-flex flex-column align-items-end">
                <h5 className="my-2">
                  <strong>Subtotal:</strong> ${totalPrice} USD
                </h5>
                <a href="/cart/checkout">
                  <button className="my-2">Checkout</button>
                </a>
              </div>
            </>
          )}
        </div>
      </SectionContainer>
    </>
  );
};

export default Cart;
