import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartProvider from './context/CartContext';
 import SideProvider from './context/Sidebarcontext';   
import  ProductProvider from './context/Productcontext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SideProvider>
    <CartProvider>
  <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
   </ProductProvider>
  </CartProvider>
  </SideProvider>
);


