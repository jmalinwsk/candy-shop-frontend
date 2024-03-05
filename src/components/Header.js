import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart, FaStar, FaUser } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-white mb-0">
                This site is for demonstation purposes only!
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to= "/" className="text-black">Candy Shop</Link>
              </h2>
            </div>
            <div className="col-8">
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
                  <Link to="/account">
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
                    <span className="badge badge-info">0</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-10">
              <div className="menu-bottom">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                    <BiSolidCategory />
                      <span className="ms-1">Categories</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">
            <div className="menu-links">
                  <div className="d-flex gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
