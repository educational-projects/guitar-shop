import { APIRoute } from '../const';
import { ThunkActionResult } from '../types/action';
import { Guitars } from '../types/guitar';
import {
  loadGuitarsError, loadGuitarsRequest, loadGuitarsSuccess, loadPlaceholdersPriceError,
  loadPlaceholdersPriceRequest, loadPlaceholdersPriceSuccess
} from './action';

export const fetchGuitarsAction = (query = {}): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    const baseUrl = `${APIRoute.Guitars}?_embed=comments`;
    dispatch(loadGuitarsRequest());
    try {
      const {data} = await api.get<Guitars>(baseUrl, {params: query});
      dispatch(loadGuitarsSuccess(data));
    } catch {
      dispatch(loadGuitarsError());
    }
  }
);

export const fetchPlaceholdersPriceAction = (query = {}): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    dispatch(loadPlaceholdersPriceRequest);
    try {
      const {data} = await api.get<Guitars>(APIRoute.Guitars, {params: query});
      dispatch(loadPlaceholdersPriceSuccess(data));
    } catch {
      dispatch(loadPlaceholdersPriceError());
    }
  }
);
