import { createReducer } from '@reduxjs/toolkit';
import { CartState } from '../../types/state';
import { addProductCart, removeProductCart } from '../action';

const initialState: CartState = {
  currentProduct: [],
};

const cart = createReducer(initialState, (builder) => {
  builder
    .addCase(addProductCart, (state, action) => {
      const {product} = action.payload;
      state.currentProduct = [product, ...state.currentProduct];
    })
    .addCase(removeProductCart, (state, action) => {
      const {id} = action.payload;
      const index = state.currentProduct.findIndex((product) => product.id === id);
      if (index !== -1) {
        state.currentProduct.splice(index, 1);
      }
    });
});

export {cart};
