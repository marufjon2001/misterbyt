import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<link href="/dist/output.css" rel="stylesheet"></link>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
