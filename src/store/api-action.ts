import { APIRoute } from '../const';
import { ThunkActionResult } from '../types/action';
import { Guitars } from '../types/guitar';
import { FilterState } from '../types/state';
import { loadGuitarsError, loadGuitarsRequest, loadGuitarsSuccess, loadPlaceholdersPriceError, loadPlaceholdersPriceRequest, loadPlaceholdersPriceSuccess, setFilter } from './action';

export const fetchGuitarsAction = (query = {}, filter: FilterState ): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    dispatch(loadGuitarsRequest());
    try {
      const {data} = await api.get<Guitars>(APIRoute.Guitars, {params: query});
      dispatch(loadGuitarsSuccess(data));
      dispatch(setFilter(filter));
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
