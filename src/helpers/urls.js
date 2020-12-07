// base url of API
const API_ROOT = "https://5fbf466ffd14be00167486cd.mockapi.io/api/v1";

// generating different url with base url for different use
export const APIUrls = {
  getProducts: () => `${API_ROOT}/product`,
  getCartItem: () => `${API_ROOT}/cart`,
  deleteProductUrl: (id) => `${API_ROOT}/product/${id}`,
  deleteCartItemUrl: (id) => `${API_ROOT}/cart/${id}`,
  updateProductUrl: (id) => `${API_ROOT}/product/${id}`,
  fetchOneProductUrl: (id) => `${API_ROOT}/product/${id}`,
};
