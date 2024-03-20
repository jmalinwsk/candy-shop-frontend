import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import image from "../images/products/hubba-bubba-bubble-tap-sour-blue-raspberry.jpg";

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name - Candy Shop"} />
      <Breadcrumbs />
      <div className="single-product-wrapper py-3">
        <div className="container-xxl">
          <div className="image-details-wrapper py-3">
            <div className="row">
              <div className="col-6">
                <div className="image-wrapper p-1">
                  <img src={image} className="img-fluid" alt="product" />
                </div>
              </div>
              <div className="col-6">
                <div className="details-wrapper p-1">
                  <h4>Hubba Bubba Bubble Tape Sour Blue Raspberry</h4>
                  <h5>$4.50 USD</h5>
                  <div className="d-flex align-items-center gap-15 border-bottom">
                    <ReactStars
                      count={5}
                      value={4.5}
                      size={20}
                      isHalf={true}
                      edit={false}
                    />
                    <p className="m-0">(2 reviews)</p>
                  </div>
                  <h5>Availability: </h5>
                  <p>in stock</p>
                  <h5>Brand: </h5>
                  <p>Hubba Bubba</p>
                  <h5>Categories: </h5>
                  <p>sour</p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                    ipsam possimus similique obcaecati, quidem reprehenderit
                    voluptate reiciendis ullam mollitia fuga enim hic! Eligendi
                    beatae sed rerum ipsa earum perspiciatis veritatis.
                  </p>
                </div>
                <div></div>
                <div className="d-flex gap-15">
                  <input
                    type="number"
                    min={1}
                    max={10}
                    className="form-control"
                    defaultValue={1}
                  />
                  <button>Add to cart</button>
                  <button>Add to wishlist</button>
                </div>
              </div>
            </div>
          </div>
          <div className="reviews-wrapper py-1">
            <div className="row">
              <div className="col-12">
                <h4>Reviews</h4>
                <div className="d-flex align-items-center gap-15 border-bottom">
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
                      <p>Great product!</p>
                    </div>
                  </div>
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
