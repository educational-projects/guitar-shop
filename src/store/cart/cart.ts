import { createReducer } from '@reduxjs/toolkit';
import { CartState } from '../../types/state';
import { addProductCart, removeProductCart, setGuitarCount } from '../action';

const initialState: CartState = {
  currentProduct: [],
};

const cart = createReducer(initialState, (builder) => {
  builder
    .addCase(addProductCart, (state, action) => {
      const {product} = action.payload;
      const index = state.currentProduct.findIndex((item) => item.guitar.id === product.id);

      if (index !== -1) {
        state.currentProduct[index] = {guitar: product, count: state.currentProduct[index].count + 1};
        return;
      }
      state.currentProduct = [{guitar: product, count: 1}, ...state.currentProduct];
    })
    .addCase(setGuitarCount, (state, action) => {
      const {guitar, count} = action.payload;
      const index = state.currentProduct.findIndex((item) => item.guitar.id === guitar.id);
      state.currentProduct[index] = {guitar: guitar, count: count};
    })
    .addCase(removeProductCart, (state, action) => {
      const {id} = action.payload;
      const index = state.currentProduct.findIndex((product) => product.guitar.id === id);
      if (index !== -1) {
        state.currentProduct.splice(index, 1);
      }
    });
});

export {cart};
