import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/action';
import { Guitars } from '../types/guitar';

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

export const loadGuitarsRequest = createAction(ActionType.LoadGuitarsRequest);

export const loadGuitarsSuccess = createAction(
  ActionType.LoadGuitarsSuccess,
  (guitars: Guitars) => ({
    payload: {
      guitars,
    },
  }),
);

export const loadGuitarsError = createAction(ActionType.LoadGuitarsError);
