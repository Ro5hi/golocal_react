import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose} from 'redux'
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from "./store.js";
import App from "./app.js";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = 
  createStore(rootReducer, 
  composeEnhancer
  (applyMiddleware(thunk)))
 
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);