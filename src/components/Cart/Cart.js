import React, { Component } from 'react';
import { ProductItem } from '../../components';
import { connect } from 'react-redux';
import { errorMessageAlert, successMessageAlert } from '../../helpers';
import {
  clearError,
  clearMessage,
  loadingStop,
  fetchCartItem,
  deleteCartItem,
} from '../../actions';

class Cart extends Component {
  // at component mounting setting loading to false
  // fetching all the cart item and saving them in store
  componentDidMount() {
    const { isLoading, dispatch } = this.props;
    if (isLoading === true) {
      dispatch(loadingStop());
    }
    dispatch(fetchCartItem());
  }

  // at component updation checking for error and message
  // if any error or message found then showing alert and clearing message
  componentDidUpdate() {
    const { error, dispatch, message } = this.props;
    if (message != null) {
      successMessageAlert(message.title, message.detail);
      dispatch(clearMessage());
    }
    if (error != null) {
      errorMessageAlert(error.title, error.detail);
      dispatch(clearError());
    }
  }

  // handleing removing from cart button
  deleteItemFromCart = (product) => {
    this.props.dispatch(deleteCartItem(product.id));
  };

  // rendering cart component
  render() {
    let product = this.props.product;
    let total = 0;
    // calculating value of total amout of all products
    for (let i = 0; i < product.length; i++) {
      total += eval(product[i].price);
    }
    return (
      <div className="products-container">
        <div className="products-heading">
          <div className="heading">Cart</div>
          <div
            className="sort-price"
            style={{
              background: 'transparent',
              color: 'black',
              cursor: 'default',
            }}
            onClick={this.onClickSortByPrice}
          >
            Total : {total}
          </div>
        </div>
        {product.map((product) => {
          return (
            <ProductItem
              product={product}
              editable={false}
              cartButtonClick={this.deleteItemFromCart}
              key={product.id}
              isCart={true}
            />
          );
        })}
      </div>
    );
  }
}

// mapping store item to props
function mapStateToProps(state) {
  return {
    error: state.alert.error,
    message: state.alert.message,
    isLoading: state.progress.isLoading,
    product: state.product.cart,
  };
}

// sending props to component
export default connect(mapStateToProps)(Cart);
