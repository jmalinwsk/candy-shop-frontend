import React from "react";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Meta title={"Log In - Candy Shop"} />
      <Breadcrumbs />
      <div className="login-wrapper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="login-card col-4 m-auto">
                <h4 className="text-center py-3">Login</h4>
                <div>
                  <form action="">
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
                  <Link to="forgot-password" className="me-3">
                    Forgot your password?
                  </Link>
                </div>
                <div>
                  <button type="submit">Sign in</button>
                  <Link to="/create-account">
                    <button type="button">Create account</button>
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

export default Login;
