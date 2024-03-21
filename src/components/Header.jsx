import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart, FaStar, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="logo-wrapper">
                <Link to="/">
                  <span>Candy Shop</span>
                </Link>
              </div>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="What are you looking for?"
                  aria-label="What are you looking for?"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  <BsSearch className="fs-5" />
                </span>
              </div>
            </div>
            <div className="col-2">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to="/login">
                    <FaUser />
                  </Link>
                </div>
                <div>
                  <Link to="/wishlist">
                    <FaStar />
                  </Link>
                </div>
                <div>
                  <Link to="/cart">
                    <FaShoppingCart />
                    <span className="badge">0</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="navbar">
                <Link to="/store">
                  <button className="navbar-button">All products</button>
                </Link>
                <Link to="/store">
                  <button className="navbar-button">Lollipops</button>
                </Link>
                <Link to="/store">
                  <button className="navbar-button">Gummies</button>
                </Link>
                <Link to="/store">
                  <button className="navbar-button">Chewing gums</button>
                </Link>
                <Link to="/store">
                  <button className="navbar-button">Candies</button>
                </Link>
                <Link to="/store">
                  <button className="navbar-button">Marshmallows</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
