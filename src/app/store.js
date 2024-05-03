import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import productsReducer from "../features/products/productsSlice";
import contactReducer from "../features/contact/contactSlice";

export const store = configureStore({
  reducer: {
    auth: userReducer,
    products: productsReducer,
    contact: contactReducer,
  },
});
