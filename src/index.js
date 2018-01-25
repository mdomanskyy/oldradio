import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from "./store/configureStore";

import './assets/styles/index.css';

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
