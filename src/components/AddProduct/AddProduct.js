import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { successMessageAlert, errorMessageAlert } from '../../helpers';

import {
  clearMessage,
  clearError,
  loadingStop,
  setError,
  addProduct,
} from '../../actions';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: '',
      detail: '',
      rating: 0,
      image: '',
    };
    this.formRef = createRef();
  }

  // at component mounting setting loading to false
  componentDidMount() {
    const { isLoading, dispatch } = this.props;
    if (isLoading === true) {
      dispatch(loadingStop());
    }
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

  // handle input form change and saving them in state
  handleChange = (input, value) => {
    if (input === 'title') {
      this.setState({ title: value });
    } else if (input === 'rating') {
      this.setState({ rating: value });
    } else if (input === 'detail') {
      this.setState({ detail: value });
    } else if (input === 'price') {
      this.setState({ price: value });
    } else if (input === 'image') {
      this.setState({ image: value });
    }
  };

  // handle form submission for creating new product
  handleSubmit = (event) => {
    event.preventDefault();
    const { title, price, detail, rating, image } = this.state;
    const { dispatch } = this.props;
    // checking if any field in form is empty
    // showing alert if any field is empty
    if (
      title.length === 0 ||
      price.length === 0 ||
      detail.length === 0 ||
      rating.length === 0 ||
      image.length === 0
    ) {
      dispatch(setError('Missing Field', 'Please Enter All Fields'));
      return;
    }
    // adding product
    dispatch(addProduct(this.state));
    this.formRef.current.reset();
  };

  // rendering add product component
  render() {
    return (
      <div className="add-product-container">
        <div className="heading">Add Product</div>
        <form ref={this.formRef}>
          <div className="input-container">
            <label>Title</label>
            <input
              type="text"
              required={true}
              placeholder="Title"
              onChange={(event) => {
                this.handleChange('title', event.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <label>Price</label>
            <input
              type="number"
              required={true}
              placeholder="Price"
              onChange={(event) => {
                this.handleChange('price', event.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <label>Rating</label>
            <input
              type="number"
              required={true}
              placeholder="Rating"
              onChange={(event) => {
                this.handleChange('rating', event.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <label>Detail</label>
            <textarea
              rows="5"
              type="text"
              required={true}
              placeholder="Detail"
              onChange={(event) => {
                this.handleChange('detail', event.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <label>Image URL</label>
            <input
              type="text"
              placeholder="Image URL"
              onChange={(event) => {
                this.handleChange('image', event.target.value);
              }}
            />
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
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
  };
}

// sending props to component
export default connect(mapStateToProps)(AddProduct);
