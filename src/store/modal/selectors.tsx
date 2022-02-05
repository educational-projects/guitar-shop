import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const getModalStatus = (state: State): boolean => state[NameSpace.Modal].openModal;
