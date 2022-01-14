import { createReducer } from '@reduxjs/toolkit';
import { FilterState } from '../../types/state';
import { changeGuitarType, changeNumberOfString, changePrice, changeSortOrder, changeSortType, loadPlaceholdersPriceSuccess, setFilter } from '../action';

const initialState: FilterState = {
  sortType : null,
  sortOrder: null,
  minPrice: null,
  maxPrice: null,
  guitarType: [],
  numberOfString: [],
  placeholderPriceMin: '',
  placeholderPriceMax: '',
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
    })
    .addCase(changeGuitarType, (state, action) => {
      const {guitarType} = action.payload;
      state.guitarType = guitarType;
    })
    .addCase(changeNumberOfString, (state, action) => {
      const {numberOfString} = action.payload;
      state.numberOfString = numberOfString;
    })
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
