import React from "react";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionContainer from "../components/SectionContainer";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      <Meta title={"Reset Your Password - Candy Shop"} />
      <Breadcrumbs />
      <SectionContainer className="reset-password-wrapper py-5">
        <div className="col-12">
          <div className="reset-password-card col-4 m-auto">
            <h4 className="section-heading">Reset your password</h4>
            <CustomInput
              divClassName="form-floating m-3"
              type="password"
              className="form-control"
              placeholder="New password"
              isRequired={true}
            />
            <CustomInput
              divClassName="form-floating m-3"
              type="password"
              className="form-control"
              placeholder="Repeat new password"
              isRequired={true}
            />
            <div className="d-flex justify-content-center">
              <Link to="/">
                <button type="button">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default ResetPassword;
