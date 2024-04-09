import React, { useEffect } from "react";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link, useNavigate } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      dispatch(login(values));
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  );
  useEffect(() => {
    if (!user == null || isSuccess) {
      navigate("/account");
    } else {
      navigate("");
    }
  }, [user, isLoading, isError, isSuccess, message]);
  return (
    <>
      <Meta title={"Log In - Candy Shop"} />
      <Breadcrumbs />
      <SectionContainer className="login-wrapper py-5">
        <div className="col-12">
          <div className="login-card col-4 m-auto">
            <h4 className="section-heading">Login</h4>
            <div className="mx-3 text-danger small">
              {isError == true ? "Your login or password may be wrong, please try again." : ""}
            </div>
            <form action="" onSubmit={formik.handleSubmit}>
              <CustomInput
                divClassName="form-floating m-3"
                type="email"
                name="email"
                className="form-control"
                placeholder="E-mail"
                onChange={formik.handleChange("email")}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="ms-3 text-danger small">
                  {formik.errors.email}
                </div>
              ) : null}
              <CustomInput
                divClassName="form-floating m-3"
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                onChange={formik.handleChange("password")}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="ms-3 text-danger small">
                  {formik.errors.password}
                </div>
              ) : null}
              <div className="m-3">
                <Link to="forgot-password" className="me-3">
                  Forgot your password?
                </Link>
              </div>
              <div className="d-flex justify-content-center gap-15">
                {/* <Link to="/"> */}
                <button type="submit">Sign in</button>
                {/* </Link> */}

                <Link to="/create-account">
                  <button type="submit">Create account</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default Login;
