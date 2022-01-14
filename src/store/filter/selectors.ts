import { FilterState, State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const getSortType = (state: State): null | string => state[NameSpace.Filter].sortType;
export const getSortOrder = (state: State): null | string => state[NameSpace.Filter].sortOrder;
export const getMinPrice = (state: State): null |string => state[NameSpace.Filter].minPrice;
export const getMaxPrice = (state: State): null | string => state[NameSpace.Filter].maxPrice;
export const getGuitarType = (state: State): string[] => state[NameSpace.Filter].guitarType;
export const getNumberOfString = (state: State): string[] => state[NameSpace.Filter].numberOfString;
export const getFilter = (state: State): FilterState => state[NameSpace.Filter];
export const getPlaceholderPriceMin = (state: State): string | number | undefined => state[NameSpace.Filter].placeholderPriceMin;
export const getPlaceholderPriceMax = (state: State): string | number | undefined => state[NameSpace.Filter].placeholderPriceMax;
