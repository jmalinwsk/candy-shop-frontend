import React from "react";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";

const Login = () => {
  return (
    <>
      <Meta title={"Log In - Candy Shop"} />
      <Breadcrumbs />
      <SectionContainer className="login-wrapper py-5">
      <div className="col-12">
              <div className="login-card col-4 m-auto">
                <h4 className="section-heading">Login</h4>
                <div className="form-floating m-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="E-mail"
                    required
                  />
                  <label htmlFor="floatingInput">E-mail</label>
                </div>
                <div className="form-floating m-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                  <label htmlFor="floatingInput">Password</label>
                </div>
                <div className="m-3">
                  <Link to="forgot-password" className="me-3">
                    Forgot your password?
                  </Link>
                </div>
                <div className="d-flex justify-content-center gap-15">
                  <Link to="/">
                    <button type="submit">Sign in</button>
                  </Link>

                  <Link to="/create-account">
                    <button type="button">Create account</button>
                  </Link>
                </div>
              </div>
            </div>
      </SectionContainer>
    </>
  );
};

export default Login;
