import { createReducer } from '@reduxjs/toolkit';
import { CartState } from '../../types/state';
import { addProductCart, removeProductCart, sendCouponError, sendCouponSuccess, setGuitarCount } from '../action';

const initialState: CartState = {
  currentProduct: [],
  discount: null,
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
      const newState = state.currentProduct.filter(({guitar}) => guitar.id !== id);
      state.currentProduct = newState;
    })
    .addCase(sendCouponSuccess, (state, action) => {
      const {discount} = action.payload;
      state.discount = discount;
    })
    .addCase(sendCouponError, (state) => {
      state.discount = null;
    });
});

export {cart};
