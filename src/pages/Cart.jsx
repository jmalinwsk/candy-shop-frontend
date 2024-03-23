import React from "react";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart - Candy Shop"} />
      <Breadcrumbs />
      <section className="cart-wrapper">
        <div className="container-xxl py-3">
          <div className="row">
            <div className="col-12">
              <div className="cart-header d-flex justify-content-between align-content-center">
                <h4 className="section-heading cart-col-1">Product</h4>
                <h4 className="section-heading cart-col-2">Price</h4>
                <h4 className="section-heading cart-col-3">Quantity</h4>
                <h4 className="section-heading cart-col-4">Total</h4>
              </div>
              <div className="cart-data py-3 d-flex justify-content-between align-content-center">
                <p>Cart is empty!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
