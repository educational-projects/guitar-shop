import { createReducer } from '@reduxjs/toolkit';
import { CartState } from '../../types/state';
import { addProductCart } from '../action';

const initialState: CartState = {
  currentProduct: [],
};

const cart = createReducer(initialState, (builder) => {
  builder
    .addCase(addProductCart, (state, action) => {
      const {product} = action.payload;
      state.currentProduct = [product, ...state.currentProduct];
    });
});

export {cart};
