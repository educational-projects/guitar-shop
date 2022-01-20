import { makeFakeGuitar } from '../../utils/mock';
import { loadPlaceholdersPriceSuccess } from '../action';
import { filter } from './filter';

const state = {
  placeholderPriceMin: '',
  placeholderPriceMax: '',
};

describe('Reducer: filter', () => {
  it('without additional parameters should return initial state', () => {
    expect(filter(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({...state});
  });

  it('should install placeholders by downloading the data', () => {
    const guitars = new Array(5).fill(null).map(() => makeFakeGuitar());
    expect(filter(state, loadPlaceholdersPriceSuccess(guitars)))
      .toEqual({
        ...state,
        placeholderPriceMin: guitars[0].price,
        placeholderPriceMax: guitars[guitars.length -1].price,
      });
  });
});
