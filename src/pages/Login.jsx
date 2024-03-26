import React from "react";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";
import CustomInput from "../components/CustomInput";

const Login = () => {
  return (
    <>
      <Meta title={"Log In - Candy Shop"} />
      <Breadcrumbs />
      <SectionContainer className="login-wrapper py-5">
        <div className="col-12">
          <div className="login-card col-4 m-auto">
            <h4 className="section-heading">Login</h4>
            <CustomInput
              divClassName="form-floating m-3"
              type="email"
              className="form-control"
              placeholder="E-mail"
              isRequired={true}
            />
            <CustomInput
              divClassName="form-floating m-3"
              type="passwword"
              className="form-control"
              placeholder="Password"
              isRequired={true}
            />
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
