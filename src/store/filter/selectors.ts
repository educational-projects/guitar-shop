import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const getPlaceholderPriceMin = (state: State): string | number | undefined => state[NameSpace.Filter].placeholderPriceMin;
export const getPlaceholderPriceMax = (state: State): string | number | undefined => state[NameSpace.Filter].placeholderPriceMax;
