import React from "react";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <Meta title={"Create Account - Candy Shop"} />
      <Breadcrumbs />
      <div className="container-xxl py-3">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-wrapper">
              <h4 className="section-heading">Contact Information</h4>
              <div className="form-floating m-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  required
                />
                <label htmlFor="floatingInput">First name</label>
              </div>
              <div className="form-floating m-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  required
                />
                <label htmlFor="floatingInput">Last name</label>
              </div>
              <div className="form-floating m-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  required
                />
                <label htmlFor="floatingInput">Address</label>
              </div>
              <div className="form-floating m-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apartment, Suite, etc."
                  required
                />
                <label htmlFor="floatingInput">Apartment, Suite, etc.</label>
              </div>
              <div className="d-flex m-3">
                <div className="form-floating me-3 w-75">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    required
                  />
                  <label htmlFor="floatingInput">City</label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Zipcode"
                    required
                  />
                  <label htmlFor="floatingInput w-25">Zipcode</label>
                </div>
              </div>
              <div className="d-flex justify-content-left py-3">
                <a href="/cart">🡰 Return to cart</a>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="checkout-right-wrapper">
              <h4 className="section-heading">Summary</h4>
              <div className="d-flex justify-content-between">
                <p>
                  <strong>Subtotal</strong>
                </p>
                <p>$4.50 USD</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>
                  <strong>Shipping</strong>
                </p>
                <p>$10 USD</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>
                  <strong>Discount</strong>
                </p>
                <p>$0 USD</p>
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Voucher"
                  required
                />
                <label htmlFor="floatingInput w-25">Voucher</label>
              </div>
              <div className="d-flex justify-content-between align-items-center border-top py-3 mt-3">
                <h4 className="m-0">
                  <strong>Total</strong>
                </h4>
                <p className="m-0">$14.50 USD</p>
              </div>
              <div className="d-flex justify-content-end py-3">
                <Link to="payment">
                  <button>Continue</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
