import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

export const getProducts = createAsyncThunk("product/get", async (thunkAPI) => {
  try {
    return await productService.getProducts();
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const addToWishlist = createAsyncThunk("product/wishlist", async (productId, thunkAPI) => {
  try {
    return await productService.addToWishlist(productId);
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

const initialState = {
  product: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(addToWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.addToWishlist = action.payload;
        state.message = "Product added to wishlist";
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
  },
});

export default productSlice.reducer;
