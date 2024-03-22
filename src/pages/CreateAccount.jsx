import React from "react";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <>
      <Meta title={"Create Account - Candy Shop"} />
      <Breadcrumbs />
      <div className="create-account-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="create-account-card col-4 m-auto">
                <h4 className="section-heading">Create account</h4>
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
                    type="email"
                    className="form-control"
                    placeholder="E-mail"
                    required
                  />
                  <label htmlFor="floatingInput">Last name</label>
                </div>
                <div className="form-floating m-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                  <label htmlFor="floatingInput">Password</label>
                </div>
              </div>
              <div className="d-flex justify-content-center gap-15">
                <Link to="/create-account">
                  <button type="button">Create account</button>
                </Link>
                <Link to="/login">
                  <button type="submit">Sign in</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
