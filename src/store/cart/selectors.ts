import { Guitar } from '../../types/guitar';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const getCurrentProduct = (state: State): Guitar[] => state[NameSpace.Cart].currentProduct;
