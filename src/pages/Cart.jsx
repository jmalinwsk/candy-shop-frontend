import React from "react";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import { FaTrash } from "react-icons/fa";
import hubbaBubbaImage from "../images/products/hubba-bubba-bubble-tap-sour-blue-raspberry.jpg";

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
              <div className="cart-data py-3 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 d-flex align-items-center">
                <div className="w-25">
                    <img src={hubbaBubbaImage} className="rounded" alt="product" />
                </div>
                <div className="w-75 ms-2">
                <a href="/store/product/:id"><h5>Hubba Bubba Bubble Tape Sour Blue Raspberry</h5></a>
                
                    
                </div>
              </div>
                <div className="cart-col-2"><p className="price-text text-start">$4.50 USD</p></div>
                <div className="cart-col-3 d-flex align-items-center">
                <input
                    type="number"
                    min={1}
                    max={10}
                    className="form-control w-50"
                    defaultValue={1}
                  />
                <FaTrash className="ms-4"/>
                </div>
                <div className="cart-col-4"><p className="price-text text-start">$4.50 USD</p></div>
              </div>
              <div className="subtotal-chechout-wrapper d-flex flex-column align-items-end">
                <h5 className="price-textmy-2">Subtotal: $4.50 USD</h5>
                <button className="my-2">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
