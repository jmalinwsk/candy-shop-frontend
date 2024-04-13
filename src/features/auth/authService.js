import axios from "axios";
import { baseUrl }   from "../../utils/axiosConfig";

const registerUser = async (userData) => {
  const response = await axios.post(`${baseUrl }/user/register`, userData);
  if (response.data) {
    return response.data;
  }
};
const loginUser = async (userData) => {
  const response = await axios.post(`${baseUrl }/user/login`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  }
};

const authService = {
  registerUser,
  loginUser,
};

export default authService;
