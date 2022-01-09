import { APIRoute } from '../const';
import { ThunkActionResult } from '../types/action';
import { Guitars } from '../types/guitar';
import { FilterState } from '../types/state';
import { loadGuitarsError, loadGuitarsRequest, loadGuitarsSuccess, setFilter } from './action';

export const fetchGuitarsAction = (query = {}, filter: FilterState ): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    dispatch(loadGuitarsRequest());
    dispatch(setFilter(filter));
    try {
      const {data} = await api.get<Guitars>(APIRoute.Guitars, {params: query});
      dispatch(loadGuitarsSuccess(data));
    } catch {
      dispatch(loadGuitarsError());
    }
  }
);
