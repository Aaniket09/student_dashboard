import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import './index.css';
import App from './App';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import reducers from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <LocalizationProvider dateAdapter={AdapterDateFns}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </LocalizationProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


