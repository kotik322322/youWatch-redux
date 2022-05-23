import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import './index.css';
import App from './App';
import store from "./store/store"
import { DataProvider } from "./GloabalState"

ReactDOM.render(
  <Provider store={store}>
    <DataProvider>
      <App />
    </DataProvider>
  </Provider>,
  document.getElementById('root')
);

