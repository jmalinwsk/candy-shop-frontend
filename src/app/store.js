import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productsReducer from "../features/products/productsSlice";
import contactReducer from "../features/contact/contactSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    contact: contactReducer,
  },
});
