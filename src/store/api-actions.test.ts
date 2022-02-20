import MockAdapter from 'axios-mock-adapter';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { createApi } from '../services/api';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../types/state';
import { Action } from 'redux';
import { APIRoute } from '../const';
import { makeFakeComment, makeFakeGuitar } from '../utils/mock';
import { fetchGuitarsAction, fetchPlaceholdersPriceAction, sendCommentsAction, sendCouponAction } from './api-action';
import { loadGuitarsError, loadGuitarsRequest, loadGuitarsSuccess, loadPlaceholdersPriceSuccess, loadPlaceholdersPriceRequest, loadPlaceholdersPriceError, sendCommentRequest, sendCommentSuccess, sendCouponRequest, sendCouponSuccess } from './action';
import { CommentPost } from '../types/guitar';

describe('Async offers data actions', () => {
  const api = createApi();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];
  const fakeGuitars = new Array(5).fill(null).map(() => (makeFakeGuitar()));

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('should guitars when server return 200', async () => {
    const store = mockStore();
    const count = fakeGuitars.length;
    const fakeParams = '_page=1&_limit=9';

    mockAPI
      .onGet(`${APIRoute.Guitars}?_embed=comments&${fakeParams}`)
      .reply(200, fakeGuitars, {'x-total-count': count});

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchGuitarsAction(fakeParams));

    expect(store.getActions()).toEqual([
      loadGuitarsRequest(),
      loadGuitarsSuccess(fakeGuitars, count),
    ]);
  });

  it('should return placeholders when server return 200', async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.Guitars)
      .reply(200, fakeGuitars);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchPlaceholdersPriceAction());

    expect(store.getActions()).toEqual([
      loadPlaceholdersPriceRequest(),
      loadPlaceholdersPriceSuccess(fakeGuitars),
    ]);
  });
  it('should return placeholders error when server return 200', async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.Guitars)
      .reply(400, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchPlaceholdersPriceAction());

    expect(store.getActions()).toEqual([
      loadPlaceholdersPriceRequest(),
      loadPlaceholdersPriceError(),
    ]);
  });
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

  it('should return comment when server return 200', async () => {
    const store = mockStore();
    const comment = makeFakeComment();

    const fakePostComment: CommentPost = {
      userName: 'test',
      advantage: 'best',
      disadvantage: 'good',
      comment: 'best',
      rating: 4,
      guitarId: 5,
    };

    mockAPI
      .onPost(APIRoute.Comment)
      .reply(200, comment);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(sendCommentsAction(fakePostComment));

    expect(store.getActions()).toEqual([
      sendCommentRequest(),
      sendCommentSuccess(comment),
    ]);
  });
  it('should return discount when server return 200', async () => {
    const store = mockStore();
    const fakeCoupon = 'light-333';
    const fakeCallback = jest.fn();

    mockAPI
      .onPost(APIRoute.Coupon)
      .reply(200, fakeCoupon);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(sendCouponAction(fakeCoupon, fakeCallback));

    expect(store.getActions()).toEqual([
      sendCouponRequest(),
      sendCouponSuccess(fakeCoupon),
    ]);
  });
});
