import { makeFakeGuitar } from '../../utils/mock';
import { loadGuitarsError, loadGuitarsRequest, loadGuitarsSuccess, loadSearchGuitarsError, loadSearchGuitarsRequest, loadSearchGuitarsSuccess, resetSearchGuitars } from '../action';
import { products } from './products';

const state = {
  guitarsLoading: false,
  guitarsError: false,
  guitars: [],
  totalGuitars: 0,
  searchGuitarsLoading: false,
  searchGuitarsError: false,
  searchGuitars: [],
};

describe('Reducer: products', () => {
  it('without additional parameters should return initial state', () => {
    expect(products(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({...state});
  });

  it('should set the download status by uploading data', () => {
    expect(products(state, loadGuitarsRequest()))
      .toEqual({...state, guitarsLoading: true});
  });

  it('should update the download status and products by uploading the data', () => {
    const randomCount = Math.floor(Math.random() * 20);
    const guitars = new Array(5).fill(null).map(() => makeFakeGuitar());
    expect(products(state, loadGuitarsSuccess(guitars, randomCount)))
      .toEqual({
        ...state,
        guitarsLoading: false,
        guitars: guitars,
        totalGuitars: randomCount,
      });
  });

  it('should set the status of the data loading error, after a failed download', () => {
    expect(products(state, loadGuitarsError()))
      .toEqual({
        ...state,
        guitarsLoading: false,
        guitarsError: true,
      });
  });

  it('should set the download status when uploading data', () => {
    expect(products(state, loadSearchGuitarsRequest()))
      .toEqual({
        ...state,
        searchGuitarsLoading: true,
      });
  });

  it('should update the download status and add data, if the download is successful', () => {
    const guitars = new Array(5).fill(null).map(() => makeFakeGuitar());
    expect(products(state, loadSearchGuitarsSuccess(guitars)))
      .toEqual({
        ...state,
        searchGuitarsLoading: false,
        searchGuitars: guitars,
      });
  });

  it('error status should be updated if the download fails', () => {
    expect(products(state, loadSearchGuitarsError()))
      .toEqual({
        ...state,
        searchGuitarsLoading: false,
        searchGuitarsError: true,
      });
  });

  it('should be updated data', () => {
    expect(products(state, resetSearchGuitars()))
      .toEqual({
        ...state,
        searchGuitars: [],
      });
  });
});
