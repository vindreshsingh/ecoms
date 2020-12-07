import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      title: '',
      rating: '',
      detail: '',
      image: '',
    };
  }

  // on mouting setting product detail in state for updating value when its in editing mode
  componentDidMount() {
    const { id, title, rating, price, detail, image } = this.props.product;
    this.setState({ id, title, rating, price, detail, image });
  }

  // on changing any of the attribute changing the value in state in editable mode
  handleChange = (label, value) => {
    if (label === 'detail') {
      this.setState({ detail: value });
    } else if (label === 'title') {
      this.setState({ title: value });
    } else if (label === 'rating') {
      this.setState({ rating: value });
    } else if (label === 'price') {
      this.setState({ price: value });
    }
  };

  // switching editing mode off
  handleCancle = () => {
    this.props.setEditableID('');
  };

  // on submit the product in editable state setting new value of product
  handleSubmit = (id) => {
    this.props.handleSaveButton(id, this.state);
    this.props.setEditableID('');
  };

  // handling cart button click whether to add to cart or remove from cart
  handleCartButtonClick = (id) => {
    this.props.cartButtonClick(id);
  };

  // handling edit button click to change the mode to editable
  // changing editable mode to on
  handlePencilClick = (id) => {
    this.props.setEditableID(id);
  };

  // handeling delete button to delete product
  handleDeleteButton = (id) => {
    this.props.deleteButtonClick(id);
  };

  // rendering product item container
  render() {
    const ratingArray = [1, 2, 3, 4, 5];
    const { product } = this.props;
    const { id, title, rating, price, detail, image } = this.state;
    const { editable, isCart } = this.props;
    return (
      <div className="product-item-container" key={id}>
        {!editable && (
          <div className="container-div">
            <div className="image">
              <img src={image} alt={title}></img>
            </div>
            <div className="product-detail">
              <Link to={`/product-detail/${id}`}>
                <div className="title"><span className="heads">Title:</span>{title}</div>
              </Link>
              <div className="detail"><span className="heads">Details:</span>{detail}</div>
              <div className="rating">
               <span className="heads">Rating:</span> {ratingArray.map((value) => {
                  if (value <= rating) {
                    return (
                      <i
                        className="fa fa-star"
                        aria-hidden="true"
                        key={value}
                      ></i>
                    );
                  }
                  return <span key={value}></span>;
                })}
              </div>
            </div>
            <div className="option-container">
              <div className="price">
              <span>Price:</span>
                <div className="tag">Rs {price}</div>
              </div>
              <div
                className="add-to-cart"
                onClick={() => {
                  this.handleCartButtonClick(product);
                }}
              >
                {isCart ? 'Remove from Cart' : 'Add to Cart'}
              </div>
              {!isCart && (
                <div className="buttons">
                  <i
                    className="fa fa-pencil"
                    onClick={() => {
                      this.handlePencilClick(id);
                    }}
                  ></i>
                  <i
                    className="fa fa-trash"
                    onClick={() => {
                      this.handleDeleteButton(id);
                    }}
                  ></i>
                </div>
              )}
            </div>
          </div>
        )}
        {editable && (
          <div className="container-div">
            <div className="image">
              <img src={image} alt={title}></img>
            </div>
            <div className="product-detail">
              <div className="title">
                <input
                  type="text"
                  value={title}
                  required
                  onChange={(event) => {
                    this.handleChange('title', event.target.value);
                  }}
                />
              </div>
              <div className="detail">
                <textarea
                  type="text"
                  value={detail}
                  data-label="detail"
                  required
                  onChange={(event) => {
                    this.handleChange('detail', event.target.value);
                  }}
                />
              </div>
              <div className="rating">
                {
                  <input
                    type="number"
                    value={rating}
                    required
                    onChange={(event) => {
                      this.handleChange('rating', event.target.value);
                    }}
                  />
                }
              </div>
            </div>
            <div className="option-container">
              <div className="price">
                <div>Price:</div>
                <div className="tag">
                  Rs:
                  <input
                    type="number"
                    value={price}
                    required
                    onChange={(event) => {
                      this.handleChange('price', event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="buttons">
                <i className="fa fa-times" onClick={this.handleCancle}></i>
                <i
                  className="fa fa-check"
                  onClick={() => {
                    this.handleSubmit(id);
                  }}
                ></i>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

// exporting container
export default ProductItem;
