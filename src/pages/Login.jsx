import React from "react";
import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumbs";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Meta title={"Log In - Candy Shop"} />
      <Breadcrumb title="Log In" />
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
                  <button>Create account</button>
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
