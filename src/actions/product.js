import {
  UPDATE_CART,
  UPDATE_PRODUCT,
  ADD_CURRENT_PRODUCT,
} from './actionTypes';
import { loadingStart, loadingStop } from './progress';
import { APIUrls } from '../helpers';
import { setMessage } from './alert';

// updating product in cart in store
function updateCart(cart) {
  return {
    type: UPDATE_CART,
    cart,
    itemCount: cart.length,
  };
}

// updating product in store
function updateProduct(product) {
  return {
    type: UPDATE_PRODUCT,
    product,
  };
}

// getting product from API
export function fetchProduct() {
  return async (dispatch) => {
    await dispatch(loadingStart());
    const url = APIUrls.getProducts();
    await fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(updateProduct(data));
      });
    await dispatch(loadingStop());
  };
}

// getting cart Item from API
export function fetchCartItem() {
  return async (dispatch) => {
    await dispatch(loadingStart());
    const url = APIUrls.getCartItem();
    await fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(updateCart(data));
      });
    await dispatch(loadingStop());
  };
}

// adding product to the API
export function addProduct(product) {
  return async (dispatch) => {
    await dispatch(loadingStart());
    const url = APIUrls.getProducts();
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(setMessage('Successful', 'Product Added'));
        dispatch(fetchProduct());
      });
    await dispatch(loadingStop());
  };
}

// deleting product from API
export function deleteProduct(id) {
  return async (dispatch) => {
    await dispatch(loadingStart());
    const url = APIUrls.deleteProductUrl(id);
    await fetch(url, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(setMessage('Successful', 'Product Deleted'));
        dispatch(fetchProduct());
      });
    await dispatch(loadingStop());
  };
}

// adding product to cart
export function addProductToCart(product) {
  return async (dispatch) => {
    await dispatch(loadingStart());
    const url = APIUrls.getCartItem();
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchCartItem());
        dispatch(setMessage('Successful', 'Product Added to Cart'));
      });
    await dispatch(loadingStop());
  };
}

// for deleting cart Item
export function deleteCartItem(id) {
  return async (dispatch) => {
    await dispatch(loadingStart());
    const url = APIUrls.deleteCartItemUrl(id);
    await fetch(url, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchCartItem());
        dispatch(
          setMessage('Successful', 'Item removed from Cart Successfully')
        );
      });
    await dispatch(loadingStop());
  };
}

// for updating product item with id and new product values
export function updateProductItem(id, product) {
  return async (dispatch) => {
    await dispatch(loadingStart());
    const url = APIUrls.updateProductUrl(id);
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchProduct());
        dispatch(setMessage('Successful', 'Product Update Successfully'));
      });
    dispatch(loadingStop());
  };
}

// saving current product to the store
function updateCurrentProduct(product) {
  return {
    type: ADD_CURRENT_PRODUCT,
    currentProduct: product,
  };
}

// fetching single product by id
export function fetchOneProduct(id) {
  return async (dispatch) => {
    await dispatch(loadingStart());
    const url = APIUrls.fetchOneProductUrl(id);
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(updateCurrentProduct(data));
      });
    await dispatch(loadingStop());
  };
}
