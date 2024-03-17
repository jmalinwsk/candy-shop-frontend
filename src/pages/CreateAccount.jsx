import React from "react";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <>
      <Meta title={"Create Account - Candy Shop"} />
      <Breadcrumbs />
      <div className="create-account-wrapper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="create-account-card col-4 m-auto">
                <h4 className="text-center py-3">Create account</h4>
                <div>
                  <form action="">
                    <input
                      type="text"
                      name="firstname"
                      className="form-control"
                      placeholder="First name"
                      required
                    />
                    <input
                      type="text"
                      name="lastname"
                      className="form-control"
                      placeholder="Last name"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="E-mail"
                      required
                    />
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </form>
                </div>
                <div>
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
      </div>
    </>
  );
};

export default CreateAccount;
