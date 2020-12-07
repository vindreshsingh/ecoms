import React, { Component } from 'react';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';
import {
  clearError,
  clearMessage,
  loadingStop,
  deleteProduct,
  fetchProduct,
  addProductToCart,
  updateProductItem,
} from '../../actions';
import { errorMessageAlert, successMessageAlert } from '../../helpers';

// comparting function to comparet price of two function
function compare_item(a, b) {
  // a should come before b in the sorted order
  if (eval(a.price) < eval(b.price)) {
    return -1;
    // a should come after b in the sorted order
  } else if (eval(a.price) > eval(b.price)) {
    return 1;
    // and and b are the same
  } else {
    return 0;
  }
}

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editableID: '',
      sortByPrice: false,
    };
  }

  // at component mounting setting loading to false
  // fethcing all the product as well to show on screen
  componentDidMount() {
    const { isLoading, dispatch } = this.props;
    if (isLoading === true) {
      dispatch(loadingStop());
    }
    dispatch(fetchProduct());
  }

  //handle sort button click
  // onclicking sort button toggling sort button status
  onClickSortByPrice = () => {
    const { sortByPrice } = this.state;
    this.setState({ sortByPrice: !sortByPrice });
  };

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

  // set editable item's id in state
  // so when the item got render if these id matches with that item
  // then this item will open in edit mode instead of normal mode
  setEditableItem = (id) => {
    this.setState({ editableID: id });
  };

  // adding product to the cart
  handleAddToCart = (product) => {
    this.props.dispatch(addProductToCart(product));
  };

  // deleting product
  handleDeleteButton = (id) => {
    this.props.dispatch(deleteProduct(id));
  };

  // after edition is done
  // saving the new value of product in db and updating it as well
  // passing relevent function to apply on different places in props
  handleSaveButton = (id, product) => {
    this.props.dispatch(updateProductItem(id, product));
  };

  // rending item on basis of various parameters
  // if sorting then sorted order otherwise in normal order
  render() {
    let { editableID, sortByPrice } = this.state;
    let { product } = this.props;
    if (sortByPrice) {
      let list = [];
      list = [...product];
      product = list.sort(compare_item);
    } else {
      product = this.props.product;
    }
    return (
      <div className="products-container">
        <div className="products-heading">
          <div className="heading">Products </div>
          <div className="sort-price" onClick={this.onClickSortByPrice}>
            {sortByPrice ? (
              <i className="fa fa-times" aria-hidden="true"></i>
            ) : (
              'Sort By Price'
            )}
          </div>
        </div>
        {product.map((product) => {
          return (
            <ProductItem
              product={product}
              editable={editableID === product.id}
              setEditableID={this.setEditableItem}
              cartButtonClick={this.handleAddToCart}
              deleteButtonClick={this.handleDeleteButton}
              handleSaveButton={this.handleSaveButton}
              key={product.id}
              isCart={false}
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
    isLoading: state.progress.isLoading,
    error: state.alert.error,
    message: state.alert.message,
    product: state.product.products,
  };
}

// sending props to component
export default connect(mapStateToProps)(Products);
