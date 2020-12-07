import { setMessage, clearMessage, setError, clearError } from './alert';
import { loadingStart, loadingStop } from './progress';
import {
  fetchProduct,
  fetchCartItem,
  addProduct,
  deleteProduct,
  addProductToCart,
  deleteCartItem,
  updateProductItem,
  fetchOneProduct,
} from './product';

// getting all the action from sub modules and exporting them from here
export {
  setMessage,
  clearMessage,
  setError,
  clearError,
  loadingStart,
  loadingStop,
  fetchProduct,
  fetchCartItem,
  addProduct,
  deleteProduct,
  deleteCartItem,
  addProductToCart,
  fetchOneProduct,
  updateProductItem,
};
