import { createReducer } from '@reduxjs/toolkit';
import { ProductsState } from '../../types/state';
import { loadGuitarsError, loadGuitarsRequest, loadGuitarsSuccess } from '../action';

const initialState: ProductsState = {
  guitarsLoading: false,
  guitarsError: false,
  guitars: [],
};

const products = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGuitarsRequest, (state) => {
      state.guitarsLoading = true;
    })
    .addCase(loadGuitarsSuccess, (state, action) => {
      const {guitars} = action.payload;
      state.guitarsLoading = false;
      state.guitars = guitars;
    })
    .addCase(loadGuitarsError, (state) => {
      state.guitarsLoading = false;
      state.guitarsError = true;
    });
});

export {products};
