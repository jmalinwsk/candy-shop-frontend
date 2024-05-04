import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionContainer from "../components/SectionContainer";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../features/products/productsSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { addToCart, getUserCart } from "../features/user/userSlice";

const SingleProduct = () => {
  const [alreadyOrdered, setAlreadyOrdered] = useState(false);
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const product = useSelector((state) => state.products.product);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const addProductToCart = () => {
    dispatch(
      addToCart({
        productId: productId,
        price: product?.price * quantity,
        quantity: quantity,
      }),
    );
  };
  const cart = useSelector((state) => state.auth.cart);
  useEffect(() => {
    dispatch(getProduct(productId));
    dispatch(getUserCart());
  }, []);
  useEffect(() => {
    for (let i = 0; i < cart.length; i++) {
      if (productId === cart[i]?.productId?._id) {
        setAlreadyOrdered(true);
      }
    }
  }, []);

  return (
    <>
      <Meta title={"Product Name - Candy Shop"} />
      <Breadcrumbs />
      <SectionContainer className="single-product-wrapper py-3">
        <div className="image-details-wrapper d-flex py-3">
          <div className="col-6">
            <div className="image-wrapper p-3">
              <Swiper
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
              >
                {product?.images &&
                  product.images.map((item, index) => {
                    return (
                      <SwiperSlide>
                        <img
                          src={item.url}
                          className="rounded-3"
                          alt="product"
                        />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </div>
          <div className="col-6">
            <div className="details-wrapper p-1">
              <h4 className="section-heading">{product?.title}</h4>
              <h5 className="mb-4">${product?.price} USD</h5>
              <h5>
                <strong>Availability</strong>
              </h5>
              {product?.quantity ? <p>in stock</p> : <p>out of stock</p>}
              <h5>
                <strong>Brand</strong>
              </h5>
              <p>{product?.brand}</p>
              <p className="text-justify my-4">{product?.description}</p>
            </div>
            {alreadyOrdered ? (
              <div className="d-flex align-items-end">
                <Link to="/cart">
                  <button type="button">Go to cart</button>
                </Link>
              </div>
            ) : (
              <div className="d-flex align-items-center">
                <button className="me-auto">Add to wishlist</button>
                <input
                  type="number"
                  className="form-control w-25 me-2"
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                />
                <button
                  type="button"
                  onClick={() => addProductToCart(product?._id)}
                >
                  Add to cart
                </button>
              </div>
            )}
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
        {alreadyOrdered && (
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
