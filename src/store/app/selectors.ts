import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const getSortType = (state: State): null | string => state[NameSpace.App].sortType;
export const getSortOrder = (state: State): null | string => state[NameSpace.App].sortOrder;
