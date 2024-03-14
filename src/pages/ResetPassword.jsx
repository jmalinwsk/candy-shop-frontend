import React from "react";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <Meta title={"Reset Your Password - Candy Shop"} />
      <Breadcrumbs title="Reset your password" />
      <div className="login-wrapper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="login-card col-4 m-auto">
                <h4 className="text-center py-3">Reset your password</h4>
                <div>
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
                <div>
                  <button type="submit">Submit</button>
                  <Link to="/login"><button type="button">Cancel</button></Link>
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
