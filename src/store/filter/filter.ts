import { createReducer } from '@reduxjs/toolkit';
import { FilterState } from '../../types/state';
import { changePrice, changeSortOrder, changeSortType, setFilter } from '../action';

const initialState: FilterState = {
  sortType : null,
  sortOrder: null,
  minPrice: null,
  maxPrice: null,
};

const filter = createReducer(initialState, (builder) => {
  builder
    .addCase(setFilter, (state, action) => {
      const {actualFilter} = action.payload;
      return {
        ...state,
        ...actualFilter,
      };
    })
    .addCase(changeSortType, (state, action) => {
      const {sortType} = action.payload;
      state.sortType = sortType;
    })
    .addCase(changeSortOrder, (state, action) => {
      const {sortOrder} = action.payload;
      state.sortOrder = sortOrder;
    })
    .addCase(changePrice, (state, action) => {
      const {key, price} = action.payload;
      return {
        ...state,
        [key]: price,
      };
    });
});

export {filter};
