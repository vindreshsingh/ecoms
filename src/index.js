import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { App } from './components';
import { configureStore } from './store';
import { Provider } from 'react-redux';

// creating store to maintain items
const store = configureStore();

// providing that store to all component
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
