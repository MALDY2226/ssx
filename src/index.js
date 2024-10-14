// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Note: Ensure this import is correct
import App from './App';
import './styles.css'; // Make sure the path to your CSS file is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
