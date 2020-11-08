import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './components/App.js';
import { rootReducer } from './reducers/root'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)