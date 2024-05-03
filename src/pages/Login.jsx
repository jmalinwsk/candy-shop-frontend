import React from "react";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("E-mail is required.")
      .email("Please enter valid e-mail."),
    password: yup.string().required("Password is required."),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });
  return (
    <>
      <Meta title={"Log In - Candy Shop"} />
      <Breadcrumbs />
      <SectionContainer className="login-wrapper py-5">
        <div className="col-12">
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="login-card col-4 m-auto">
              <h4 className="section-heading">Login</h4>
              <CustomInput
                divClassName="form-floating m-3"
                type="email"
                name="email"
                className="form-control"
                placeholder="E-mail"
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
                value={formik.values.email}
              />
              <div className="ms-3 text-danger small">
                {formik.touched.email && formik.errors.email}
              </div>
              <CustomInput
                divClassName="form-floating m-3"
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                onChange={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
                value={formik.values.password}
              />
              <div className="ms-3 text-danger small">
                {formik.touched.password && formik.errors.password}
              </div>
              <div className="m-3">
                <Link to="forgot-password" className="me-3">
                  Forgot your password?
                </Link>
              </div>
              <div className="d-flex justify-content-center gap-15">
                <button type="submit">Sign in</button>
                <Link to="/create-account">
                  <button type="submit">Create account</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </SectionContainer>
    </>
  );
};

export default Login;
