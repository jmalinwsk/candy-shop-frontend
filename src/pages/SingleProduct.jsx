import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import hubbaBubbaImage from "../images/products/hubba-bubba-bubble-tap-sour-blue-raspberry.jpg";
import SectionContainer from "../components/SectionContainer";

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name - Candy Shop"} />
      <Breadcrumbs />
      <SectionContainer className="single-product-wrapper py-3">
        <div className="image-details-wrapper d-flex py-3">
          <div className="col-6">
            <div className="image-wrapper p-3">
              <img src={hubbaBubbaImage} className="rounded-3" alt="product" />
            </div>
          </div>
          <div className="col-6">
            <div className="details-wrapper p-1">
              <h4 className="section-heading">
                Hubba Bubba Bubble Tape Sour Blue Raspberry
              </h4>
              <h5 className="mb-4">$4.50 USD</h5>
              <h5>
                <strong>Availability</strong>
              </h5>
              <p>in stock</p>
              <h5>
                <strong>Brand</strong>
              </h5>
              <p>Hubba Bubba</p>
              <h5>
                <strong>Tags</strong>
              </h5>
              <p>sour</p>
              <p className="text-justify my-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                ipsam possimus similique obcaecati, quidem reprehenderit
                voluptate reiciendis ullam mollitia fuga enim hic! Eligendi
                beatae sed rerum ipsa earum perspiciatis veritatis.
              </p>
            </div>
            <div></div>
            <div className="d-flex align-items-center">
              <button className="me-auto">Add to wishlist</button>
              <input
                type="number"
                min={1}
                max={10}
                className="form-control w-25 me-2"
                defaultValue={1}
              />
              <button>Add to cart</button>
            </div>
          </div>
        </div>
        <div className="reviews-wrapper py-3">
          <div className="col-12">
            <h4 className="section-heading">Reviews</h4>
            <div className="d-flex align-items-center gap-15 py-3">
              <ReactStars
                count={5}
                value={4.5}
                size={20}
                isHalf={true}
                edit={false}
              />
              <p className="m-0 small">Based on 2 reviews</p>
            </div>
            <div>
              <div className="review-wrapper">
                <div className="d-flex align-items-center gap-15">
                  <p className="m-0">Michael on XX.XX.XXXX</p>
                  <ReactStars
                    count={5}
                    value={4.5}
                    size={20}
                    isHalf={true}
                    edit={false}
                  />
                </div>
                <div>
                  <p className="small">Great product!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {orderedProduct && (
          <div className="review-form-wrapper py-3">
            <div className="col-12">
              <h4 className="section-heading">Write a review</h4>
              <div className="d-flex align-items-center gap-15">
                <p className="m-0 small">Your rating</p>
                <ReactStars
                  count={5}
                  value={4.5}
                  size={20}
                  isHalf={true}
                  edit={true}
                />
              </div>
              <form action="">
                <div className="py-2">
                  <textarea
                    className="form-control"
                    rows={5}
                    placeholder="Your review..."
                    required
                  />
                </div>
                <button className="submit-button">Submit</button>
              </form>
            </div>
          </div>
        )}
      </SectionContainer>
    </>
  );
};

export default SingleProduct;
