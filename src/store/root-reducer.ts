import { combineReducers } from '@reduxjs/toolkit';
import { filter } from './filter/filter';
import { modal } from './modal/modal';
import { pagination } from './pagination/pagination';
import { products } from './products/products';

export enum NameSpace {
  Filter = 'FILTER',
  Products = 'PRODUCTS',
  Pagination = 'PAGINATION',
  Modal = 'MODAL'
}

export const rootReducer = combineReducers({
  [NameSpace.Filter]: filter,
  [NameSpace.Products]: products,
  [NameSpace.Pagination]: pagination,
  [NameSpace.Modal]: modal,

});

export type RootState = ReturnType<typeof rootReducer>
