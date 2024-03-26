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
            <div>
              <h3 className="section-heading">Get in touch with us</h3>
              <form action="">
                <CustomInput
                  divClassName="form-floating"
                  type="text"
                  className="form-control"
                  placeholder="Voucher"
                  isRequired={true}
                />
                <CustomInput
                  divClassName="form-floating"
                  type="text"
                  className="form-control"
                  placeholder="E-mail"
                  isRequired={true}
                />

                <div>
                  <textarea
                    className="form-control"
                    rows={7}
                    placeholder="Your message..."
                    required
                  />
                </div>
                <button className="submit-button">Submit</button>
              </form>
            </div>
          </div>
          <div className="address col-4">
            <ul>
              <li>
                <address>
                  <b>Candy Shop</b>
                  <br />
                  330 XXX XXXXX
                  <br />
                  New York, NY 100XX
                </address>
              </li>
              <li>
                <FaInfo /> Monday - Friday, 9 AM - 5 PM
              </li>

              <li>
                <FaPhone /> <a href="tel:+12345678900">+1 (234) 567-8900</a>
              </li>
              <li>
                <MdEmail />{" "}
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
