import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// importing all the component here to use thems
import {
  Navbar,
  Product,
  ProgressBar,
  AddProduct,
  Cart,
  ProductDetail,
} from '../components';

class App extends Component {
  // rendering app componet
  // using router to manage which component to render
  render() {
    const { isLoading } = this.props;
    return (
      <Router>
        <div className="App">
          <div className="blank-nav"></div>
          <Navbar />
          <div className="blank-progress-bar"></div>
          {isLoading && <ProgressBar />}
          <Switch>
            <Route path="/add-product" component={AddProduct} />
            <Route path="/" exact component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/product-detail/:id" component={ProductDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// mapping store item to props
function mapStateToProps(state) {
  return {
    isLoading: state.progress.isLoading,
    error: state.alert.error,
    message: state.alert.message,
  };
}

// sending props to component
export default connect(mapStateToProps)(App);
