import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Meta from "../components/Meta";

const Store = () => {
  return (
    <>
      <Meta title={"Store - Candy Shop"} />
      <Breadcrumb title="Store" />
      <div className="store-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card">
                <h5>Categories</h5>
                <ul>
                  <li>Lollipops</li>
                  <li>Gummies</li>
                  <li>Chewing gums</li>
                  <li>Candies</li>
                  <li>Marshmallows</li>
                </ul>
              </div>
              <div className="filter-card">
                <h5>Filters</h5>
                <div className="filter-availability">
                  <h6>Availability</h6>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" for="">
                      Available
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" for="">
                      Out of stock
                    </label>
                  </div>
                </div>
                <div className="filter-brand">
                  <h6>Brand</h6>
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" for="">
                      Haribo
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" for="">
                      Skittles
                    </label>
                  </div>
                </div>
                <div className="filter-flavor">
                  <h6>Flavor</h6>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" for="">
                      sweet
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" for="">
                      sour
                    </label>
                  </div>
                </div>
                <div className="filter-price">
                  <h6>Price</h6>
                  <div className="row g-2">
                    <div className="col-md">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id=""
                          placeholder="From"
                        />
                        <label for="floatingInput">From</label>
                      </div>
                    </div>
                    <div className="col-md">
                      <div class="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id=""
                          placeholder="To"
                        />
                        <label for="floatingInput">To</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
