import React from "react";
import ReactDOM from "react-dom";
import store from "./store.js";
import { Provider } from "react-redux";
import App from "./app.js";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);