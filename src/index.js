import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { store } from './redux/store';

import { Provider } from 'react-redux';

// console.log(store);
// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
