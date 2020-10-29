import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AppTheme } from './context/AppTheme';


ReactDOM.render(
  <React.StrictMode>
    <AppTheme.Provider value={{type: 'light'}}>
      <Provider store={store}>
        <App/>
      </Provider>
    </AppTheme.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
