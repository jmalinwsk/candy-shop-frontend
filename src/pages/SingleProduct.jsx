import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name - Candy Shop"} />
      <Breadcrumbs />
      <div className="single-product-wrapper py-3">
        <div className="container-xxl">
          <div className="product-details-wrapper py-3">
            <div className="row">
              <div className="col-6"></div>
              <div className="col-6"></div>
            </div>
          </div>
          <div className="description-wrapper py-1">
            <div className="row">
              <div className="col-12">
                <h4>Description</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                  ipsam possimus similique obcaecati, quidem reprehenderit
                  voluptate reiciendis ullam mollitia fuga enim hic! Eligendi
                  beatae sed rerum ipsa earum perspiciatis veritatis.
                </p>
              </div>
            </div>
          </div>
          <div className="reviews-wrapper py-1">
            <div className="row">
              <div className="col-12">
                <h4>Reviews</h4>
                <div className="d-flex align-items-center gap-15">
                  <ReactStars
                    count={5}
                    value={4.5}
                    size={20}
                    isHalf={true}
                    edit={false}
                  />
                  <p className="m-0">Based on 2 reviews</p>
                </div>
                <div>
                  <p>No reviews yet!</p>
                </div>
              </div>
            </div>
          </div>
          {orderedProduct && (
            <div className="review-form-wrapper py-1">
              <div className="row">
                <div className="col-12">
                  <h4>Write a review</h4>
                  <div className="d-flex align-items-center gap-15">
                    <p className="m-0">Your rating</p>
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
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
