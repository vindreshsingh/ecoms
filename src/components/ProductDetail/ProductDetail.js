import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchOneProduct,
  clearMessage,
  clearError,
  loadingStop,
  addProductToCart,
} from '../../actions';
import { successMessageAlert, errorMessageAlert } from '../../helpers';

class ProductDetail extends Component {
  // at component mounting setting loading to false
  // fetching product detail with id received in params
  componentWillMount() {
    const { isLoading, dispatch } = this.props;
    if (isLoading === true) {
      dispatch(loadingStop());
    }
    let id = this.props.match.params.id;
    dispatch(fetchOneProduct(id));
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

  // handling add to cart button to adding the current product into cart
  handleCartButtonClick = () => {
    this.props.dispatch(addProductToCart(this.props.product));
  };

  // rendering current product detail
  render() {
    if (this.props.product === null) {
      return <div></div>;
    }
    const { title, price, detail, image, rating } = this.props.product;
    let ratingArray = [1, 2, 3, 4, 5];
    return (
      <div className="product-detail-container">
        <div className="heading">Product Detail</div>
        <div className="img-container">
          <img src={image} alt={title}></img>
        </div>
        <div className="creadential-container">
          <div>Name :</div>
          <div>{title}</div>
        </div>
        <div className="creadential-container">
          <div>Price :</div>
          <div>{price}</div>
        </div>
        <div className="creadential-container">
          <div>Rating :</div>
          <div>
            {ratingArray.map((item) => {
              if (item <= rating) {
                return (
                  <i className="fa fa-star" aria-hidden="true" key={item}></i>
                );
              }
              return <span></span>;
            })}
          </div>
        </div>
        <div className="creadential-container detail-container">
          <div className="detail">Detail :</div>
          <div className="text">{detail}</div>
        </div>
        <button className="button" onClick={this.handleCartButtonClick}>
          Add to Cart
        </button>
      </div>
    );
  }
}

// mapping store item to props
function mapStateToProps(state) {
  return {
    product: state.product.currentProduct,
    isLoading: state.progress.isLoading,
    error: state.alert.error,
    message: state.alert.message,
  };
}

// sending props to component
export default connect(mapStateToProps)(ProductDetail);
