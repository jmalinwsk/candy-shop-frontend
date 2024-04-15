import React, { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import Meta from "../components/Meta";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";
import { useDispatch, useSelector } from "react-redux";
import { getUserWishlist } from "../features/auth/authSlice";
import { addOrRemoveFromWishlist } from "../features/products/productSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const getWishlist = () => {
    dispatch(getUserWishlist());
  };
  useEffect(() => {
    getWishlist();
  }, []);
  const wishlistState = useSelector((state) => state.auth.wishlist);
  const removeFromWishlist = (productId) => {
    dispatch(addOrRemoveFromWishlist(productId));
    setTimeout(() => {
      dispatch(getUserWishlist());
    }, 300);
  };
  return (
    <>
      <Meta title={"Wishlist - Candy Shop"} />
      <Breadcrumbs />
      <SectionContainer className="wishlist-wrapper py-3">
        <div className="col-12 d-flex flex-wrap">
          {wishlistState.length === 0 && (
            <strong className="py-3">Wishlist is empty!</strong>
          )}
          {wishlistState?.map((item, index) => {
            return (
              <div className="wishlist-card col-3 d-flex" key={`item_${index}`}>
                <div className="product-card d-block">
                  <div>
                    <img src={item?.images[0].url} alt="product" />
                  </div>
                  <div className="product-details">
                    <Link to="/store/product/:id">
                      <h6 className="product-title">{item?.title}</h6>
                    </Link>
                    <p className="price-text">${item?.price} USD</p>
                  </div>
                </div>
                <div className="remove-from-wishlist mx-1">
                  <button onClick={(e) => removeFromWishlist(item?._id)}>
                    <RxCross1 />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </>
  );
};

export default Wishlist;
