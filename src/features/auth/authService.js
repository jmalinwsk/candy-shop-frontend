import axios from "axios";
import base_url from "../../utils/baseUrl";

const registerUser = async (userData) => {
  const response = await axios.post(`${base_url}/user/register`, userData);
  if (response.data) {
    return response.data;
  }
};
const loginUser = async (userData) => {
  const response = await axios.post(`${base_url}/user/login`, userData);
  if (response.data) {
    return response.data;
  }
};

const authService = {
  registerUser,
  loginUser,
};

export default authService;
