import axios from "axios";
import { baseUrl } from "../../utils/axiosConfig";

const postQuery = async (contactData) => {
  const response = await axios.post(`${baseUrl}/contact`, contactData);
  if (response.data) {
    return response.data;
  }
};

export const contactService = {
  postQuery,
};
