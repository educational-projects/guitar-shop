import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { State } from './state';

export enum ActionType {
  SetCurrentPage = 'usest/setCurrentPage',
  LoadGuitarsRequest = 'data/loadGuitarsRequest',
  LoadGuitarsSuccess = 'data/loadGuitarsSuccess',
  LoadGuitarsError = 'data/loadGuitarsError',
  LoadPlaceholdersPriceRequest = 'data/loadPlaceholdersPriceRequest',
  LoadPlaceholdersPriceSuccess = 'data/loadPlaceholdersPriceSuccess',
  LoadPlaceholdersPriceError = 'data/loadPlaceholdersPriceError',
  LoadSearchGuitarsRequest = 'data/loadSearchGuitarsRequest',
  LoadSearchGuitarsSuccess = 'data/loadSearchGuitarsSuccess',
  LoadSearchGuitarsError = 'data/loadSearchGuitarsError',
  ResetSearchGuitars = 'app/resetSearchGuitars',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
