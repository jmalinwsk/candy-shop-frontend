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

const authService = {
  registerUser,
  loginUser,
  getUserWishlist,
};

export default authService;
