import React from "react";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <Meta title={"Forgot Your Password? - Candy Shop"} />
      <Breadcrumbs />
      <div className="reset-password-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="reset-password-card col-4 m-auto">
                <h4 className="section-heading">Forgot your password?</h4>
                <p className="m-3 small">
                  We will send you an e-mail with instructions on how to reset
                  your password.
                </p>
                <div className="form-floating m-3">
                  <form action="">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="E-mail"
                      required
                    />
                  </form>
                </div>
                <div className="d-flex justify-content-center gap-15">
                  <button type="submit">Submit</button>
                  <Link to="/login">
                    <button type="button">Cancel</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
