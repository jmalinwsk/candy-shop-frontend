import React from "react";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";
import CustomInput from "../components/CustomInput";

const Checkout = () => {
  return (
    <>
      <Meta title={"Create Account - Candy Shop"} />
      <Breadcrumbs />
      <SectionContainer className="checkout-wrapper py-3">
        <div className="col-7">
          <div className="checkout-left-wrapper">
            <h4 className="section-heading">Contact Information</h4>
            <CustomInput
              divClassName="form-floating m-3"
              type="text"
              className="form-control"
              placeholder="First name"
              isRequired={true}
            />
            <CustomInput
              divClassName="form-floating m-3"
              type="text"
              className="form-control"
              placeholder="Last name"
              isRequired={true}
            />
            <CustomInput
              divClassName="form-floating m-3"
              type="text"
              className="form-control"
              placeholder="Address"
              isRequired={true}
            />
            <CustomInput
              divClassName="form-floating m-3"
              type="text"
              className="form-control"
              placeholder="Apartment, Suite, etc."
              isRequired={true}
            />

            <div className="d-flex m-3">
              <CustomInput
                divClassName="form-floating m-3"
                type="text"
                className="form-control"
                placeholder="City"
                isRequired={true}
              />
              <CustomInput
                divClassName="form-floating m-3"
                type="text"
                className="form-control"
                placeholder="Zipcode"
                isRequired={true}
              />
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
            <CustomInput
              divClassName="form-floating"
              type="text"
              className="form-control"
              placeholder="Voucher"
              isRequired={false}
            />
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
      </SectionContainer>
    </>
  );
};

export default Checkout;
