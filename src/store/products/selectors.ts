import { Guitars } from '../../types/guitar';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const getGuitarsLoading = (state: State): boolean => state[NameSpace.Products].guitarsLoading;
export const getGuitarsError = (state: State): boolean => state[NameSpace.Products].guitarsError;
export const getGuitars = (state: State): Guitars => state[NameSpace.Products].guitars;
export const getGuitarsSearch = (state: State): Guitars => state[NameSpace.Products].searchGuitars;
