import React from "react";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/user/userSlice";

const CreateAccount = () => {
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required."),
    lastName: yup.string().required("Last name is required."),
    email: yup
      .string()
      .required("E-mail is required.")
      .email("Please enter valid e-mail."),
    password: yup.string().required("Password is required."),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });
  return (
    <>
      <Meta title={"Create Account - Candy Shop"} />
      <Breadcrumbs />
      <SectionContainer className="create-account-wrapper py-5">
        <div className="col-12">
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="create-account-card col-4 m-auto">
              <h4 className="section-heading">Create account</h4>
              <CustomInput
                divClassName="form-floating m-3"
                type="text"
                className="form-control"
                placeholder="First name"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange("firstName")}
                onBlur={formik.handleBlur("firstName")}
              />
              <div className="text-danger small">
                {formik.touched.firstName && formik.errors.firstName}
              </div>
              <CustomInput
                divClassName="form-floating m-3"
                type="text"
                className="form-control"
                placeholder="Last name"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange("lastName")}
                onBlur={formik.handleBlur("lastName")}
              />
              <div className="text-danger small">
                {formik.touched.lastName && formik.errors.lastName}
              </div>
              <CustomInput
                divClassName="form-floating m-3"
                type="email"
                className="form-control"
                placeholder="E-mail"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
              />
              <div className="text-danger small">
                {formik.touched.email && formik.errors.email}
              </div>
              <CustomInput
                divClassName="form-floating m-3"
                type="password"
                className="form-control"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
              />
              <div className="text-danger small">
                {formik.touched.password && formik.errors.password}
              </div>
            </div>
            <div className="d-flex justify-content-center gap-15">
              <button type="submit">Create account</button>
              <Link to="/login">
                <button type="submit">Sign in</button>
              </Link>
            </div>
          </form>
        </div>
      </SectionContainer>
    </>
  );
};

export default CreateAccount;
