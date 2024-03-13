import React from "react";
import { MdEmail } from "react-icons/md";
import { FaInfo, FaPhone } from "react-icons/fa";
import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact us - Candy Shop"} />
      <Breadcrumb title="Contact us" />
      <div className="contact-wrapper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <div className="contact-form col-8">
                <div>
                  <h4>Get in touch with us</h4>
                  <form action="">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="E-mail"
                        required
                      />
                    </div>

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
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
