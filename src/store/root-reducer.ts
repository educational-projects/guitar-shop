import { combineReducers } from '@reduxjs/toolkit';
import { app } from './app/app';
import { products } from './products/products';

export enum NameSpace {
  App = 'APP',
  Products = 'PRODUCTS',
}

export const rootReducer = combineReducers({
  [NameSpace.App]: app,
  [NameSpace.Products]: products,
});

export type RootState = ReturnType<typeof rootReducer>
