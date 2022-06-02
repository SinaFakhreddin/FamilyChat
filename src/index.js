import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import App from './Components/App';
import Reducers from './Reducers';
import reportWebVitals from './reportWebVitals';
import {composeWithDevTools} from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

const middleware = []

if (process.env.NODE_ENV!=="production") {
  middleware.push(createLogger())
}


const store = createStore(Reducers,composeWithDevTools(applyMiddleware(...middleware)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
