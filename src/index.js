import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import RootReducer from './Redux/reducer/RootReducer'
import logger from 'redux-logger';

const myStore=createStore(RootReducer,applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={myStore}>
      <App />
   </Provider> ,
  document.getElementById('root')
);

reportWebVitals();
