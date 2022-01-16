import { makeFakeFilter, makeFakeGuitar } from '../../utils/mock';
import { changeGuitarType, changeNumberOfString, changePrice, changeSortOrder, changeSortType, loadPlaceholdersPriceSuccess, setFilter } from '../action';
import { filter } from './filter';

const state = {
  sortType : null,
  sortOrder: null,
  minPrice: null,
  maxPrice: null,
  guitarType: [],
  numberOfString: [],
  placeholderPriceMin: '',
  placeholderPriceMax: '',
};

describe('Reducer: filter', () => {
  it('without additional parameters should return initial state', () => {
    expect(filter(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({...state});
  });

  it ('should update the filter by getting the filter', () => {
    expect(filter(state, setFilter(makeFakeFilter)))
      .toEqual({
        ...state,
        sortType: makeFakeFilter.sortType,
        sortOrder: makeFakeFilter.sortOrder,
        minPrice: makeFakeFilter.minPrice,
        maxPrice: makeFakeFilter.maxPrice,
        guitarType: makeFakeFilter.guitarType,
        numberOfString: makeFakeFilter.numberOfString,
      });
  });

  it('should update the sort type by getting the sort', () => {
    expect(filter(state, changeSortType('price')))
      .toEqual({...state, sortType: 'price'});
  });

  it('should update the sort order by getting the sort order', () => {
    expect(filter(state, changeSortOrder('desc')))
      .toEqual({...state, sortOrder: 'desc'});
  });

  it('should update the price by getting the price', () => {
    expect(filter(state, changePrice('minPrice', '1700')))
      .toEqual({...state, minPrice: '1700'});
  });

  it('should update the guitar type by changing the guitar type', () => {
    expect(filter(state, changeGuitarType(makeFakeFilter.guitarType)))
      .toEqual({...state, guitarType: makeFakeFilter.guitarType});
  });

  it ('should update the number of strings by getting the number of strings', () => {
    expect(filter(state, changeNumberOfString(makeFakeFilter.numberOfString)))
      .toEqual({...state, numberOfString: makeFakeFilter.numberOfString});
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
