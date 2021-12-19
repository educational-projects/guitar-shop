import { createReducer } from '@reduxjs/toolkit';
import { changeSortType } from '../action';

const initialState = {
  currentSortType : 'test',
};

const app = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSortType, (state, action) => {
      const {sortType} = action.payload;
      state.currentSortType = sortType;
    });
});

export {app};
