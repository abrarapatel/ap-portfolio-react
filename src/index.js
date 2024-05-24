import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/snap-commons/snap-common-css.css'
import './assets/snap-commons/snap-common-js.js'
import './assets/styles/app-common-style.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
