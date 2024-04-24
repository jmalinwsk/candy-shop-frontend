import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productsService";

export const getProduct = createAsyncThunk(
  "product/get",
  async (id, thunkAPI) => {
    try {
      return await productService.getProduct(id);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const getProducts = createAsyncThunk(
  "products/get",
  async (_, thunkAPI) => {
    try {
      return await productService.getProducts();
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const addOrRemoveFromWishlist = createAsyncThunk(
  "products/wishlist",
  async (productId, thunkAPI) => {
    try {
      return await productService.addOrRemoveFromWishlist(productId);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

const initialState = {
  products: [],
  product: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const productsSlice = createSlice({
  name: "products",
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
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(addOrRemoveFromWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addOrRemoveFromWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.addOrRemoveFromWishlist = action.payload;
        state.message = "Product updated on wishlist";
      })
      .addCase(addOrRemoveFromWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default productsSlice.reducer;
