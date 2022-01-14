import { createReducer } from '@reduxjs/toolkit';
import { PaginationState } from '../../types/state';
import { setCurrentPage } from '../action';

const DEFAULT_PAGE = 1;

const initialState: PaginationState = {
  currentPage: DEFAULT_PAGE,
};

const pagination = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentPage, (state, action) => {
      const {page} = action.payload;
      state.currentPage = page;
    });
});

export {pagination};
