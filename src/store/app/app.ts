import { createReducer } from '@reduxjs/toolkit';
import { AppState } from '../../types/state';
import { changeMaxPrice, changeMinPrice, changeSortOrder, changeSortType } from '../action';

const initialState: AppState = {
  sortType : null,
  sortOrder: null,
  minPrice: '',
  maxPrice: '',
};

const app = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSortType, (state, action) => {
      const {sortType} = action.payload;
      state.sortType = sortType;
    })
    .addCase(changeSortOrder, (state, action) => {
      const {sortOrder} = action.payload;
      state.sortOrder = sortOrder;
    })
    .addCase(changeMinPrice, (state, action) => {
      const {minPrice} = action.payload;
      state.sortOrder = minPrice;
    })
    .addCase(changeMaxPrice, (state, action) => {
      const {maxPrice} = action.payload;
      state.sortOrder = maxPrice;
    });
});

export {app};
