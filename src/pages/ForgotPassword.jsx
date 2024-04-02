import React from "react";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";
import CustomInput from "../components/CustomInput";

const ForgotPassword = () => {
  return (
    <>
      <Meta title={"Forgot Your Password? - Candy Shop"} />
      <Breadcrumbs />
      <SectionContainer className="forgot-password-wrapper py-5">
        <div className="col-12">
          <div className="forgot-password-card col-4 m-auto">
            <h4 className="section-heading">Forgot your password?</h4>
            <p className="m-3 small">
              We will send you an e-mail with instructions on how to reset your
              password.
            </p>
            <CustomInput
              divClassName="form-floating m-3"
              type="email"
              className="form-control"
              placeholder="E-mail"
              isRequired={true}
            />
            <div className="d-flex justify-content-center gap-15">
              <button type="submit">Submit</button>
              <Link to="/login">
                <button type="button">Cancel</button>
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default ForgotPassword;
