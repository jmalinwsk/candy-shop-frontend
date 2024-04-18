import React, { useEffect, useState } from "react";
import {
  TfiLayoutColumn2,
  TfiLayoutColumn4,
  TfiLayoutMenuV,
} from "react-icons/tfi";
import Breadcrumbs from "../components/Breadcrumbs";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import SectionContainer from "../components/SectionContainer";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/productSlice";

const Store = () => {
  const [grid, setGrid] = useState(3);
  const productState = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const getAllProducts = () => {
    dispatch(getProducts());
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <Meta title={"Store - Candy Shop"} />
      <Breadcrumbs />
      <SectionContainer className="store-wrapper py-3">
        <div className="categories-filter-wrapper col-3 py-3">
          <div className="categories-card pb-2">
            <h5 className="section-heading">Categories</h5>
            <ul className="nav-list">
              <li>
                <Link to="/">Lollipops</Link>
              </li>
              <li>
                <Link to="/">Gummies</Link>
              </li>
              <li>
                <Link to="/">Chewing gums</Link>
              </li>
              <li>
                <Link to="/">Candies</Link>
              </li>
              <li>
                <Link to="/">Marshmallows</Link>
              </li>
            </ul>
          </div>
          <div className="filter-card">
            <h5 className="section-heading">Filters</h5>
            <div className="filter-availability pb-2">
              <h6>
                <strong>Availability</strong>
              </h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="available"
                />
                <label
                  className="form-check-label"
                  htmlFor="available"
                  id="text"
                >
                  Available
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="out-of-stock"
                />
                <label
                  className="form-check-label"
                  htmlFor="out-of-stock"
                  id="text"
                >
                  Out of stock
                </label>
              </div>
            </div>
            <div className="filter-brand pb-2">
              <h6>
                <strong>Brand</strong>
              </h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="haribo-brand"
                />
                <label
                  className="form-check-label"
                  htmlFor="haribo-brand"
                  id="text"
                >
                  Haribo
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="skittles-brand"
                />
                <label className="form-check-label" htmlFor="skittles-brand">
                  Skittles
                </label>
              </div>
            </div>
            <div className="filter-flavor pb-2">
              <h6>
                <strong>Flavor</strong>
              </h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="sweet-flavor"
                />
                <label
                  className="form-check-label"
                  htmlFor="sweet-flavor"
                  id="text"
                >
                  Sweet
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="sour-flavor"
                />
                <label
                  className="form-check-label"
                  htmlFor="sour-flavor"
                  id="text"
                >
                  Sour
                </label>
              </div>
            </div>
            <div className="filter-price pb-2">
              <h6>
                <strong>Price</strong>
              </h6>
              <div className="row g-2">
                <div className="col-md">
                  <CustomInput
                    divClassName="form-floating me-2"
                    type="text"
                    className="form-control"
                    placeholder="From"
                    id="from"
                  />
                </div>
                <div className="col-md">
                  <CustomInput
                    divClassName="form-floating ms-2"
                    type="text"
                    className="form-control"
                    placeholder="To"
                    id="to"
                  />
                </div>
              </div>
            </div>
            <div className="py-2">
              <button>Submit</button>
            </div>
          </div>
        </div>
        <div className="col-9 py-3">
          <div className="sort-view-wrapper d-flex align-items-center">
            <div className="d-flex align-items-center">
              <p className="mb-0 small">30 Products</p>
            </div>
            <div className="sort-by d-flex ms-auto align-items-center">
              <p className="d-block w-0 text-center m-auto">Sort by:</p>
              <select className="form-select w-auto ms-2" id="sort">
                <option value="most-popular">Most popular</option>
                <option value="alph-az">Alphabetically, A-Z</option>
                <option value="alph-za">Alphabetically, Z-A</option>
                <option value="price-lh">Price, low to high</option>
                <option value="price-hl">Price, high to low</option>
                <option value="date-no">Date, new to old</option>
                <option value="date-on">Date, old to new</option>
              </select>
            </div>
            <div className="products-view-change d-flex align-items-center">
              <TfiLayoutMenuV
                onClick={() => {
                  setGrid(12);
                }}
              />
              <TfiLayoutColumn2
                onClick={() => {
                  setGrid(6);
                }}
              />
              <TfiLayoutColumn4
                onClick={() => {
                  setGrid(3);
                }}
              />
            </div>
          </div>
          <div className="products-wrapper py-3">
            <div className="d-flex flex-wrap">
              {productState?.map((item, index) => {
                return <ProductCard item={item} key={index} grid={grid} />;
              })}
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default Store;
