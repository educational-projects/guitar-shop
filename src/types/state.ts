import { RootState } from '../store/root-reducer';
import { Guitars } from './guitar';

export type ProductsState = {
  guitarsLoading: boolean,
  guitarsError: boolean,
  guitars: Guitars,
}

export type FilterState = {
  sortType: null | string,
  sortOrder: null | string,
  minPrice:  null |string,
  maxPrice: null | string,
  guitarType: string[],
  numberOfString: string[],
  placeholderPriceMin? : null | number,
  placeholderPriceMax? : null | number,
}

export type State = RootState
