import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import rootReducer from './store/rootReducer';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // I implemented this for making use of the redux dev-tools

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
); // I created my rootReducer and implemented react-thunk

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
