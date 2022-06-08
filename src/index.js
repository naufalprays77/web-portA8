import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Url from './UrlRoute';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Url />
    </BrowserRouter>
  </React.StrictMode>
);
