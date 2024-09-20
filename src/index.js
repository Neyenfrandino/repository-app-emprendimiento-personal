import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { UtilsContextProvider } from './context/utils-context/utils-context.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <UtilsContextProvider>
        <App />        
      </UtilsContextProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
