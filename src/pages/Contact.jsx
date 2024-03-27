import React from "react";
import { MdEmail } from "react-icons/md";
import { FaInfo, FaPhone } from "react-icons/fa";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionContainer from "../components/SectionContainer";
import CustomInput from "../components/CustomInput";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact us - Candy Shop"} />
      <Breadcrumbs />
      <SectionContainer className="contact-wrapper py-3">
        <div className="col-12 d-flex justify-content-between">
          <div className="contact-form col-8">
          <h3 className="section-heading">Get in touch with us</h3>
              <form action="">
                <CustomInput
                  divClassName="form-floating m-3"
                  type="text"
                  className="form-control"
                  placeholder="Voucher"
                  isRequired={true}
                />
                <CustomInput
                  divClassName="form-floating m-3"
                  type="text"
                  className="form-control"
                  placeholder="E-mail"
                  isRequired={true}
                />

                <div className="m-3">
                  <textarea
                    className="form-control"
                    rows={7}
                    placeholder="Your message..."
                    required
                  />
                </div>
                <div className="d-flex justify-content-end">
                <button className="submit-button me-3">Submit</button>
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
                <FaInfo className="me-2"/> Monday - Friday, 9 AM - 5 PM
              </li>

              <li>
                <FaPhone className="me-2"/> <a href="tel:+12345678900">+1 (234) 567-8900</a>
              </li>
              <li>
                <MdEmail className="me-2"/>
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
