import MockAdapter from 'axios-mock-adapter';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { createApi } from '../services/api';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../types/state';
import { Action } from 'redux';
import { APIRoute } from '../const';
import { makeFakeGuitar } from '../utils/mock';
import { fetchGuitarsAction } from './api-action';
import { loadGuitarsError, loadGuitarsRequest, loadGuitarsSuccess } from './action';

describe('Async offers data actions', () => {
  const api = createApi();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  // it('should guitars when server return 200', async () => {
  //   const store = mockStore();
  //   const fakeGuitars = new Array(5).fill(null).map(() => (makeFakeGuitar()));
  //   const count = fakeGuitars.length;

  //   mockAPI
  //     .onGet(`${APIRoute.Guitars}?_embed=comments`)
  //     .reply(200, fakeGuitars, {headers: count});

  //   expect(store.getActions()).toEqual([]);

  //   await store.dispatch(fetchGuitarsAction());

  //   expect(store.getActions()).toEqual([
  //     loadGuitarsRequest(),
  //     loadGuitarsSuccess(fakeGuitars, count),
  //   ]);
  // });

  it('should return guitars error when server return 404', async () => {
    const store = mockStore();

    mockAPI
      .onGet(`${APIRoute.Guitars}?_embed=comments`)
      .reply(404, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchGuitarsAction());

    expect(store.getActions()).toEqual([
      loadGuitarsRequest(),
      loadGuitarsError(),
    ]);
  });
});
