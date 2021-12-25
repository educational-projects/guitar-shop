import { createReducer } from '@reduxjs/toolkit';
import { AppState } from '../../types/state';
import { changeSortOrder, changeSortType } from '../action';

const initialState: AppState = {
  sortType : null,
  sortOrder: null,
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
    });
});

export {app};
