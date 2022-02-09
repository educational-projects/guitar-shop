import { createReducer } from '@reduxjs/toolkit';
import { ProductsState } from '../../types/state';
import { loadGuitarError, loadGuitarRequest, loadGuitarsError, loadGuitarsRequest, loadGuitarsSuccess, loadGuitarSuccess, loadSearchGuitarsError, loadSearchGuitarsRequest, loadSearchGuitarsSuccess, resetCommentPostStatus, resetProduct, resetSearchGuitars, sendCommentError, sendCommentRequest, sendCommentSuccess } from '../action';

const initialState: ProductsState = {
  guitarsLoading: false,
  guitarsError: false,
  guitars: [],
  totalGuitars: 0,
  searchGuitarsLoading: false,
  searchGuitarsError: false,
  searchGuitars: [],
  guitarLoading: false,
  guitar: null,
  guitarError: false,
  sendCommentLoading: false,
  commentPostStatus: false,
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
    })
    .addCase(loadGuitarRequest, (state) => {
      state.guitarLoading = true;
    })
    .addCase(loadGuitarSuccess, (state, action) => {
      const {guitar} = action.payload;
      state.guitar = guitar;
      state.guitarLoading = false;
    })
    .addCase(loadGuitarError, (state) => {
      state.guitarError = true;
      state.guitarLoading = false;
    })
    .addCase(sendCommentRequest, (state) => {
      state.sendCommentLoading = true;
    })
    .addCase(sendCommentSuccess, (state, action) => {
      const {comment} = action.payload;
      state.sendCommentLoading = false;
      state.commentPostStatus = true;

      if (state.guitar) {
        state.guitar.comments = [comment, ...state.guitar.comments];
      }
    })
    .addCase(sendCommentError, (state) => {
      state.sendCommentLoading = false;
    })
    .addCase(resetCommentPostStatus, (state) => {
      state.commentPostStatus = false;
    })
    .addCase(resetProduct, (state) => {
      state.guitar = null;
      state.guitarError = false;
    });
});

export {products};
