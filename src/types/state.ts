import { RootState } from '../store/root-reducer';
import { Guitars } from './guitar';

export type ProductsState = {
  guitarsLoading: boolean,
  guitarsError: boolean,
  guitars: Guitars,
  totalGuitars: number,
  searchGuitarsLoading: boolean,
  searchGuitarsError: boolean,
  searchGuitars: Guitars,
}

export type PaginationState = {
  currentPage: number,
}

export type FilterState = {
  placeholderPriceMin? : string | number | undefined,
  placeholderPriceMax? : string | number | undefined,
}

export type State = RootState
