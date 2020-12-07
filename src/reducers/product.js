import {
  UPDATE_CART,
  UPDATE_PRODUCT,
  ADD_CURRENT_PRODUCT,
} from '../actions/actionTypes';

// loading reducer intial state to maintain product at different places
const initialState = {
  products: [],
  cart: [],
  cartItemCount: 0,
  currentProduct: null,
};

// changing store on the basis of different actions for setting product in different states
export default function auth(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PRODUCT: {
      return { ...state, products: action.product };
    }
    case UPDATE_CART: {
      return {
        ...state,
        cart: action.cart,
        cartItemCount: action.itemCount,
      };
    }
    case ADD_CURRENT_PRODUCT: {
      return {
        ...state,
        currentProduct: action.currentProduct,
      };
    }
    default:
      return state;
  }
}
