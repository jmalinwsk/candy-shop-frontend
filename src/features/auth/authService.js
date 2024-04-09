import axios from "axios";
import base_url from "../../utils/baseUrl";

const registerUser = async(userData) => {
  const response = await axios.post("", userData);
  if(response.data) {
    return response.data;
  }
}
const login = async (userData) => {
  const response = await axios.post(`${base_url}/user/login`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  registerUser,
  login,
};

export default authService;
