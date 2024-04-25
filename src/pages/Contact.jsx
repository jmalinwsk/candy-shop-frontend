import React from "react";
import { MdEmail } from "react-icons/md";
import { FaInfo, FaPhone } from "react-icons/fa";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionContainer from "../components/SectionContainer";
import CustomInput from "../components/CustomInput";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createQuery } from "../features/contact/contactSlice";

const Contact = () => {
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    name: yup.string().required("Name is required."),
    email: yup
      .string()
      .required("E-mail is required.")
      .email("Please enter valid e-mail."),
    message: yup.string().required("Please type in your message."),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createQuery(values));
    },
  });
  return (
    <>
      <Meta title={"Contact us - Candy Shop"} />
      <Breadcrumbs />
      <SectionContainer className="contact-wrapper py-3">
        <div className="col-12 d-flex justify-content-between">
          <div className="contact-form col-8">
            <h3 className="section-heading">Get in touch with us</h3>
            <form action="" onSubmit={formik.handleSubmit}>
              <CustomInput
                divClassName="form-floating m-3"
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                onChange={formik.handleChange("name")}
                onBlur={formik.handleBlur("name")}
                value={formik.values.name}
              />
              <div className="ms-3 text-danger small">
                {formik.touched.name && formik.errors.name}
              </div>
              <CustomInput
                divClassName="form-floating m-3"
                type="text"
                className="form-control"
                placeholder="E-mail"
                name="email"
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
                value={formik.values.email}
              />
              <div className="ms-3 text-danger small">
                {formik.touched.email && formik.errors.email}
              </div>
              <div className="m-3">
                <textarea
                  className="form-control"
                  rows={7}
                  placeholder="Your message..."
                  name="message"
                  onChange={formik.handleChange("message")}
                  onBlur={formik.handleBlur("message")}
                  value={formik.values.message}
                />
              </div>
              <div className="ms-3 text-danger small">
                {formik.touched.message && formik.errors.message}
              </div>
              <div className="d-flex justify-content-end">
                <button className="submit-button me-3" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="address col-4 ps-3">
            <ul className="nav-list">
              <li>
                <address>
                  <strong>Candy Shop</strong>
                  <br />
                  330 XXX XXXXX
                  <br />
                  New York, NY 100XX
                </address>
              </li>
              <li>
                <FaInfo className="me-2" /> Monday - Friday, 9 AM - 5 PM
              </li>

              <li>
                <FaPhone className="me-2" />
                <a href="tel:+12345678900">+1 (234) 567-8900</a>
              </li>
              <li>
                <MdEmail className="me-2" />
                <a href="mailto:contact@example.com">contact@example.com</a>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default Contact;
