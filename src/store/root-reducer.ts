import { combineReducers } from '@reduxjs/toolkit';
import { filter } from './filter/filter';
import { pagination } from './pagination/pagination';
import { products } from './products/products';

export enum NameSpace {
  Filter = 'FILTER',
  Products = 'PRODUCTS',
  Pagination = 'PAGINATION',
}

export const rootReducer = combineReducers({
  [NameSpace.Filter]: filter,
  [NameSpace.Products]: products,
  [NameSpace.Pagination]: pagination,
});

export type RootState = ReturnType<typeof rootReducer>
