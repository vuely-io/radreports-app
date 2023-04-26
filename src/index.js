import React from 'react';
import ReactDOM from 'react-dom/client';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import "primereact/resources/themes/mdc-dark-deeppurple/theme.css";
import "./index.css"
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />

  </React.StrictMode>
);

