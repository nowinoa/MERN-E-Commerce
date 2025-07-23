// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { productListReducer, productDetailsReducer } from './reducers/productReducers.js';
import { cartReducer } from './reducers/cartReducers.js';


const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

// Estado inicial
const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};


const store = configureStore({
  reducer: {
    product: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
  },
  preloadedState: initialState,
});

export default store;
