import { toast } from 'react-toastify';
import { APIRoute, FailMessage } from '../const';
import { ThunkActionResult } from '../types/action';
import { Guitar, Guitars } from '../types/guitar';
import {
  loadGuitarError,
  loadGuitarRequest,
  loadGuitarsError, loadGuitarsRequest, loadGuitarsSuccess, loadGuitarSuccess, loadPlaceholdersPriceError,
  loadPlaceholdersPriceRequest, loadPlaceholdersPriceSuccess, loadSearchGuitarsError, loadSearchGuitarsRequest, loadSearchGuitarsSuccess
} from './action';

export const fetchGuitarsAction = (query = {}): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    const baseUrl = `${APIRoute.Guitars}?_embed=comments`;
    dispatch(loadGuitarsRequest());
    try {
      const {data, headers} = await api.get<Guitars>(`${baseUrl}&${query}`);
      const count = headers['x-total-count'];
      dispatch(loadGuitarsSuccess(data, count));
    } catch {
      dispatch(loadGuitarsError());
    }
  }
);

export const fetchPlaceholdersPriceAction = (query = {}): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    dispatch(loadPlaceholdersPriceRequest());
    try {
      const {data} = await api.get<Guitars>(APIRoute.Guitars, {params: query});
      dispatch(loadPlaceholdersPriceSuccess(data));
    } catch {
      dispatch(loadPlaceholdersPriceError());
    }
  }
);

export const fetchSearchGuitarsAction = (query = {}): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    dispatch(loadSearchGuitarsRequest());
    try {
      const {data} = await api.get<Guitars>(APIRoute.Guitars, {params: query});
      dispatch(loadSearchGuitarsSuccess(data));
    } catch {
      dispatch(loadSearchGuitarsError());
    }
  }
);

export const fetchGuitarAction = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api ) => {
    const baseUrl = `${APIRoute.Guitars}/${id}?_embed=comments`;
    dispatch(loadGuitarRequest());
    try {
      const {data} = await api.get<Guitar>(baseUrl);
      dispatch(loadGuitarSuccess(data));
    } catch {
      dispatch(loadGuitarError());
    }
  }
);

export const sendCommentsAction = (): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    // dispatch();
    try {
      const {data} = await api.post<Comment>(APIRoute.Comment);
      console.log(data);
    } catch {
      toast.error(FailMessage.PostComment);
      // dispatch();
    }
  }
);
