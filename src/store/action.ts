import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/action';
import { Guitars } from '../types/guitar';
import { FilterState } from '../types/state';

export const changeSortType = createAction(
  ActionType.ChangeSortType,
  (sortType: string) => ({
    payload: {
      sortType,
    },
  }),
);

export const changeSortOrder = createAction(
  ActionType.ChangeSortOrder,
  (sortOrder: string) => ({
    payload: {
      sortOrder,
    },
  }),
);

export const changePrice = createAction(
  ActionType.ChangePrice,
  (name: string, price: string | null) => ({
    payload: {
      key: name,
      price,
    },
  }),
);

export const changeGuitarType = createAction(
  ActionType.ChangeGuitarType,
  (guitarType: string[]) => ({
    payload: {
      guitarType,
    },
  }),
);

export const changeNumberOfString = createAction(
  ActionType.ChangeNumberOfString,
  (numberOfString: string[]) => ({
    payload: {
      numberOfString,
    },
  }),
);

export const setFilter = createAction(
  ActionType.SetFilter,
  (actualFilter: FilterState) => ({
    payload: {
      actualFilter,
    },
  }),
);

export const loadGuitarsRequest = createAction(ActionType.LoadGuitarsRequest);

export const loadGuitarsSuccess = createAction(
  ActionType.LoadGuitarsSuccess,
  (guitars: Guitars) => ({
    payload: {
      guitars,
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
