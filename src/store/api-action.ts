import { APIRoute } from '../const';
import { ThunkActionResult } from '../types/action';
import { Guitars } from '../types/guitar';
import { loadGuitarsError, loadGuitarsRequest, loadGuitarsSuccess } from './action';

export const fetchGuitarsAction = (): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    dispatch(loadGuitarsRequest());
    try {
      const {data} = await api.get<Guitars>(APIRoute.Guitars);
      dispatch(loadGuitarsSuccess(data));
    } catch {
      dispatch(loadGuitarsError());
    }
  }
);
