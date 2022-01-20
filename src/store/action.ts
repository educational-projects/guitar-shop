import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/action';
import { Guitars } from '../types/guitar';

export const loadGuitarsRequest = createAction(ActionType.LoadGuitarsRequest);

export const loadGuitarsSuccess = createAction(
  ActionType.LoadGuitarsSuccess,
  (guitars: Guitars, count: number | string) => ({
    payload: {
      guitars,
      count,
    },
  }),
);

export const loadPlaceholdersPriceRequest = createAction(ActionType.LoadPlaceholdersPriceRequest);

export const loadPlaceholdersPriceSuccess = createAction(
  ActionType.LoadPlaceholdersPriceSuccess,
  (guitars: Guitars) => ({
    payload: {
      guitars,
    },
  }),
);

export const loadPlaceholdersPriceError = createAction(ActionType.LoadPlaceholdersPriceError);

export const loadGuitarsError = createAction(ActionType.LoadGuitarsError);

export const loadSearchGuitarsRequest = createAction(ActionType.LoadSearchGuitarsRequest);

export const loadSearchGuitarsSuccess = createAction(
  ActionType.LoadSearchGuitarsSuccess,
  (searchGuitars: Guitars) => ({
    payload: {
      searchGuitars,
    },
  }),
);

export const resetSearchGuitars = createAction(ActionType.ResetSearchGuitars);

export const loadSearchGuitarsError = createAction(ActionType.LoadSearchGuitarsError);

export const setCurrentPage = createAction(
  ActionType.SetCurrentPage,
  (page: number) => ({
    payload: {
      page,
    },
  }),
);
