import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { State } from './state';

export enum ActionType {
  SetFilter = 'app/setFilter',
  ChangeSortType = 'user/changeSortType',
  ChangeSortOrder = 'user/changeSortOrder',
  ChangePrice = 'user/changePrice',
  ChangeGuitarType = 'user/changeGuitarType',
  ChangeNumberOfString = 'user/changeNumberOfString',
  LoadGuitarsRequest = 'data/loadGuitarsRequest',
  LoadGuitarsSuccess = 'data/loadGuitarsSuccess',
  LoadGuitarsError = 'data/loadGuitarsError',
  LoadPlaceholdersPriceRequest = 'data/loadPlaceholdersPriceRequest',
  LoadPlaceholdersPriceSuccess = 'data/loadPlaceholdersPriceSuccess',
  LoadPlaceholdersPriceError = 'data/loadPlaceholdersPriceError',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
