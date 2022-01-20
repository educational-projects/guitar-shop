import { createReducer } from '@reduxjs/toolkit';
import { FilterState } from '../../types/state';
import { loadPlaceholdersPriceSuccess } from '../action';

const initialState: FilterState = {
  placeholderPriceMin: '',
  placeholderPriceMax: '',
};

const filter = createReducer(initialState, (builder) => {
  builder
    .addCase(loadPlaceholdersPriceSuccess, (state, action) => {
      const {guitars} = action.payload;
      return {
        ...state,
        placeholderPriceMin: guitars[0].price,
        placeholderPriceMax: guitars[guitars.length - 1].price,
      };
    });
});

export {filter};
