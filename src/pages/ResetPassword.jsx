import React from "react";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionContainer from "../components/SectionContainer";

const ResetPassword = () => {
  return (
    <>
      <Meta title={"Reset Your Password - Candy Shop"} />
      <Breadcrumbs />
      <SectionContainer className="reset-password-wrapper py-3">
        <div className="col-12">
          <div className="reset-password-card col-4 m-auto">
            <h4 className="text-center py-3">Reset your password</h4>
            <div>
              <form action="">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="New password"
                  required
                />
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Repeat new password"
                  required
                />
              </form>
            </div>
            <div>
              <button type="button">Submit</button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default ResetPassword;
