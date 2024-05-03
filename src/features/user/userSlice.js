import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import userService from "./userService";

const getCustomerFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  user: getCustomerFromLocalStorage,
  wishlist: [],
  addedToCart: {},
  cart: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      return await userService.registerUser(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      return await userService.loginUser(user);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const getUserWishlist = createAsyncThunk(
  "user/wishlist",
  async (user, thunkAPI) => {
    try {
      return await userService.getUserWishlist(user);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const addToCart = createAsyncThunk(
  "user/cart/add",
  async (data, thunkAPI) => {
    try {
      return await userService.addToCart(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const getUserCart = createAsyncThunk(
  "user/cart",
  async (user, thunkAPI) => {
    try {
      return await userService.getUserCart(user);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

//export const removeProductFromCart =

export const userSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.createdUser = action.payload;
        if (state.isSuccess) {
          toast.info("User created successfully");
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isError) {
          toast.info(action.error);
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
        if (state.isSuccess) {
          toast.info("User logged in successfully");
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.user = null;
        state.message = action.error;
      })
      .addCase(getUserWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.wishlist = action.payload.wishlist;
        state.message = "Wishlist fetched successfully";
      })
      .addCase(getUserWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.addedToCart = action.payload;
        if (state.isSuccess) {
          toast.info("Item added to cart");
        }
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getUserCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.cart = action.payload;
      })
      .addCase(getUserCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default userSlice.reducer;
