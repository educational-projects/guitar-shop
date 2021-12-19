import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { State } from './state';

export enum ActionType {
  ChangeSortType = 'app/changeSortType',
  LoadGuitarsRequest = 'data/loadGuitarsRequest',
  LoadGuitarsSuccess = 'data/loadGuitarsSuccess',
  LoadGuitarsError = 'data/loadGuitarsError',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
