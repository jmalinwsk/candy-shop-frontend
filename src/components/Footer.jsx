import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="py-3">
          <div className="container-xxl">
            <div className="row">
              <div className="col-5">
                <h4>Our shop</h4>
                <div className="footer-link d-flex flex-column">
                  <Link to="/about">About us</Link>
                  <Link to="/FAQ">FAQ</Link>
                  <Link to="/return-and-refund-policy">
                    Return and Refund Policy
                  </Link>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                  <Link to="/TOS">Terms of Service</Link>
                  <Link to="/shipping-policy">Shipping Policy</Link>
                  <Link to="/contact">Contact</Link>
                </div>
              </div>
              <div className="col-5">
                <h4>Your account</h4>
                <div className="footer-link d-flex flex-column">
                  <Link to="/account">Your account</Link>
                  <Link to="/cart">Cart</Link>
                  <Link to="/orders">Orders</Link>
                  <Link to="/adresses">Addresses</Link>
                  <Link to="/vouchers">Vouchers</Link>
                </div>
              </div>
              <div className="col-2">
                <h4>Follow us</h4>
                <div className="social-icons">
                  <a href="https://facebook.com">
                    <FaFacebook />
                  </a>
                  <a href="https://instagram.com">
                    <FaInstagram />
                  </a>
                  <a href="https://tiktok.com">
                    <FaTiktok />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                &copy; {new Date().getFullYear()} - Powered by Candy Shop. All
                rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
