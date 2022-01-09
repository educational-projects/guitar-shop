import { combineReducers } from '@reduxjs/toolkit';
import { filter } from './filter/filter';
import { products } from './products/products';

export enum NameSpace {
  Filter = 'FILTER',
  Products = 'PRODUCTS',
}

export const rootReducer = combineReducers({
  [NameSpace.Filter]: filter,
  [NameSpace.Products]: products,
});

export type RootState = ReturnType<typeof rootReducer>
