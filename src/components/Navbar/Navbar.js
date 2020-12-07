import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCartItem } from "../../actions";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIconClicked: false,
    };
  }

  // fetching cart item to get the count of the item present in cart to show on cart icon
  componentDidMount() {
    this.props.dispatch(fetchCartItem());
  }

  // handle menu icon click for small size display
  handleMenuIconClick = () => {
    this.setState({ menuIconClicked: !this.state.menuIconClicked });
  };

  // handling navbar items button click
  // on small screen when we click a button then menu list should be hidden
  handleButtonClick = () => {
    this.setState({ menuIconClicked: false });
  };

  // rendering navbar component
  render() {
    const { cartItemCount } = this.props;
    return (
      <nav className='navbar-container unselectable'>
        <div className='navbar-logo'>
          <Link to='/' onClick={this.handleButtonClick}>
            EComs
          </Link>
        </div>
        <div className='menu-icon' onClick={this.handleMenuIconClick}>
          <i
            className={
              this.state.menuIconClicked ? "fa fa-times" : "fa fa-bars"
            }
            aria-hidden='true'
          ></i>
        </div>
        <ul
          className={
            this.state.menuIconClicked ? "navbar-menu active" : "navbar-menu"
          }
        >
          <li>
            <Link
              className='navbar-links'
              to='/'
              onClick={this.handleButtonClick}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              className='navbar-links'
              to='/add-product'
              onClick={this.handleButtonClick}
            >
              Add Product
            </Link>
          </li>
          <li>
            <Link
              className='navbar-links cart'
              to='/cart'
              onClick={this.handleButtonClick}
            >
              <i className='fa fa-shopping-cart' aria-hidden='true'></i>
              <span>{cartItemCount > 0 ? cartItemCount : ""}</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

// passing store item to props of component
function mapStateToProps(state) {
  return {
    cartItemCount: state.product.cartItemCount,
  };
}

// sending props to component
export default connect(mapStateToProps)(Navbar);
