import { createReducer } from '@reduxjs/toolkit';
import { ProductsState } from '../../types/state';
import { loadGuitarsError, loadGuitarsRequest, loadGuitarsSuccess, loadSearchGuitarsError, loadSearchGuitarsRequest, loadSearchGuitarsSuccess, resetSearchGuitars } from '../action';

const initialState: ProductsState = {
  guitarsLoading: false,
  guitarsError: false,
  guitars: [],
  totalGuitars: 0,
  searchGuitarsLoading: false,
  searchGuitarsError: false,
  searchGuitars: [],
};

const products = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGuitarsRequest, (state) => {
      state.guitarsLoading = true;
    })
    .addCase(loadGuitarsSuccess, (state, action) => {
      const {guitars, count} = action.payload;
      state.guitarsLoading = false;
      state.guitars = guitars;
      state.totalGuitars = Number(count);
    })
    .addCase(loadGuitarsError, (state) => {
      state.guitarsLoading = false;
      state.guitarsError = true;
    })
    .addCase(loadSearchGuitarsRequest, (state) => {
      state.searchGuitarsLoading = true;
    })
    .addCase(loadSearchGuitarsSuccess, (state, action) => {
      const {searchGuitars} = action.payload;
      state.searchGuitarsLoading = false;
      state.searchGuitars = searchGuitars;
    })
    .addCase(loadSearchGuitarsError, (state) => {
      state.searchGuitarsLoading = false;
      state.searchGuitarsError = true;
    })
    .addCase(resetSearchGuitars, (state) => {
      state.searchGuitars = [];
    });
});

export {products};
