import { combineReducers } from '@reduxjs/toolkit';
import { cart } from './cart/cart';
import { filter } from './filter/filter';
import { modal } from './modal/modal';
import { pagination } from './pagination/pagination';
import { products } from './products/products';

export enum NameSpace {
  Filter = 'FILTER',
  Products = 'PRODUCTS',
  Pagination = 'PAGINATION',
  Modal = 'MODAL',
  Cart = 'CART'
}

export const rootReducer = combineReducers({
  [NameSpace.Filter]: filter,
  [NameSpace.Products]: products,
  [NameSpace.Pagination]: pagination,
  [NameSpace.Modal]: modal,
  [NameSpace.Cart]: cart,

});

export type RootState = ReturnType<typeof rootReducer>
