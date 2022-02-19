import { RootState } from '../store/root-reducer';
import { Guitar, Guitars, GuitarsCart } from './guitar';

export type ProductsState = {
  guitarsLoading: boolean,
  guitarsError: boolean,
  guitars: Guitars,
  totalGuitars: number,
  searchGuitarsLoading: boolean,
  searchGuitarsError: boolean,
  searchGuitars: Guitars,
  guitarLoading: boolean,
  guitar: null | Guitar,
  guitarError: boolean,
  sendCommentLoading: boolean,
  commentPostStatus: boolean,
}

export type PaginationState = {
  currentPage: number,
}

export type FilterState = {
  placeholderPriceMin? : string | number | undefined,
  placeholderPriceMax? : string | number | undefined,
}

export type ModalState = {
  openModal: boolean,
}

export type CartState = {
  currentProduct: GuitarsCart,
}

export type State = RootState
