import React from "react";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";
import CustomInput from "../components/CustomInput";

const CreateAccount = () => {
  return (
    <>
      <Meta title={"Create Account - Candy Shop"} />
      <Breadcrumbs />
      <SectionContainer className="create-account-wrapper py-5">
        <div className="col-12">
          <div className="create-account-card col-4 m-auto">
            <h4 className="section-heading">Create account</h4>
            <CustomInput
              divClassName="form-floating m-3"
              type="text"
              className="form-control"
              placeholder="First name"
              isRequired={true}
            />
            <CustomInput
              divClassName="form-floating m-3"
              type="text"
              className="form-control"
              placeholder="Last name"
              isRequired={true}
            />
            <CustomInput
              divClassName="form-floating m-3"
              type="text"
              className="form-control"
              placeholder="E-mail"
              isRequired={true}
            />
            <CustomInput
              divClassName="form-floating m-3"
              type="password"
              className="form-control"
              placeholder="Password"
              isRequired={true}
            />
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
      </SectionContainer>
    </>
  );
};

export default CreateAccount;
