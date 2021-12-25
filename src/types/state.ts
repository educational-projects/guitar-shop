import { RootState } from '../store/root-reducer';
import { Guitars } from './guitar';

export type ProductsState = {
  guitarsLoading: boolean,
  guitarsError: boolean,
  guitars: Guitars,
}

export type AppState = {
  sortType: null | string,
  sortOrder: null | string,
}

export type State = RootState
