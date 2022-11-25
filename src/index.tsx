import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './bemit/index.scss';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import { store } from './store';
import React from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);