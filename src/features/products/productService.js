import axios from "axios";
import { baseUrl, config } from "../../utils/axiosConfig";

const getProducts = async () => {
  const response = await axios.get(`${baseUrl}/product/`);
  if (response.data) {
    return response.data;
  }
};

const addToWishlist = async (productId) => {
  const response = await axios.put(
    `${baseUrl}/product/wishlist`,
    { productId },
    config,
  );
  if (response.data) {
    return response.data;
  }
};

const productService = {
  getProducts,
  addToWishlist,
};

export default productService;
