import { Guitar, Guitars } from '../../types/guitar';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const getGuitarsLoading = (state: State): boolean => state[NameSpace.Products].guitarsLoading;
export const getGuitarsError = (state: State): boolean => state[NameSpace.Products].guitarsError;
export const getGuitars = (state: State): Guitars => state[NameSpace.Products].guitars;
export const getGuitarsSearch = (state: State): Guitars => state[NameSpace.Products].searchGuitars;
export const getTotalGuitars = (state: State): number => state[NameSpace.Products].totalGuitars;
export const getGuitarLoading = (state: State): boolean => state[NameSpace.Products].guitarLoading;
export const getGuitarError = (state: State): boolean => state[NameSpace.Products].guitarError;
export const getGuitar = (state: State): Guitar | null => state[NameSpace.Products].guitar;
