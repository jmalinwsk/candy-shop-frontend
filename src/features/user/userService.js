import axios from "axios";
import { baseUrl, config } from "../../utils/axiosConfig";

const registerUser = async (userData) => {
  const response = await axios.post(`${baseUrl}/user/register`, userData);
  if (response.data) {
    return response.data;
  }
};

const loginUser = async (userData) => {
  const response = await axios.post(`${baseUrl}/user/login`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  }
};

const getUserWishlist = async () => {
  const response = await axios.get(`${baseUrl}/user/wishlist`, config);
  if (response.data) {
    return response.data;
  }
};

const addToCart = async (data) => {
  const response = await axios.post(`${baseUrl}/user/cart`, data, config);
  if (response.data) {
    return response.data;
  }
};

const getUserCart = async () => {
  const response = await axios.get(`${baseUrl}/user/cart`, config);
  if (response.data) {
    return response.data;
  }
};

const removeProductFromCart = async (productId) => {
  const response = await axios.delete(
    `${baseUrl}/user/remove-product/${productId}`,
    config,
  );
  if (response.data) {
    return response.data;
  }
};

const updateProductQuantityInCart = async (data) => {
  const response = await axios.put(
    `${baseUrl}/user/update-quantity`,
    data,
    config,
  );
  if (response.data) {
    return response.data;
  }
};

const userService = {
  registerUser,
  loginUser,
  getUserWishlist,
  addToCart,
  getUserCart,
  removeProductFromCart,
  updateProductQuantityInCart,
};

export default userService;
