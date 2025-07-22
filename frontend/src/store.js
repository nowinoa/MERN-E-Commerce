// src/store.js

// to store global state
import { configureStore } from '@reduxjs/toolkit'
import { productListReducer } from '../src/reducers/productReducers.js';

const store = configureStore({
  reducer: {
    product: productListReducer, // this will hold all state related to products 
    // this can only be changed through actions and the reducer interprets the accion
    // depending on its type
  },
})

export default store
