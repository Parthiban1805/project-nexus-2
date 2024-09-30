import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StoreContextProvider from './context/StoreContext'; // Ensure the path is correct

// Create a root for the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App wrapped in StoreContextProvider
root.render(
  <StoreContextProvider>
    <App />
  </StoreContextProvider>
);
