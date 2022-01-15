import { PaginationState, State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const getCurrentPage = (state: State): number => state[NameSpace.Pagination].currentPage;
export const getPagination = (state: State): PaginationState => state[NameSpace.Pagination];
