import axios from "axios";
import { baseUrl, config } from "../../utils/axiosConfig";

const getProduct = async (id) => {
  const response = await axios.get(`${baseUrl}/product/${id}`);
  if (response.data) {
    return response.data;
  }
};

const getProducts = async () => {
  const response = await axios.get(`${baseUrl}/product/`);
  if (response.data) {
    return response.data;
  }
};

const addOrRemoveFromWishlist = async (productId) => {
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
  getProduct,
  getProducts,
  addOrRemoveFromWishlist,
};

export default productService;
