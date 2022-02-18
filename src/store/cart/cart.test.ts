import { makeFakeGuitar } from '../../utils/mock';
import { addProductCart, removeProductCart } from '../action';
import { cart } from './cart';

const state = {
  currentProduct: [],
};

describe('Reducer: cart', () => {
  it('without additional parameters should return initial state', () => {
    expect(cart(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({...state});
  });

  it('should add the selected product to the storage, when calling', () => {
    const fakeGuitar = makeFakeGuitar();
    expect(cart(state, addProductCart(fakeGuitar)))
      .toEqual({
        ...state,
        currentProduct: [fakeGuitar, ...state.currentProduct],
      });
  });
  it('should delete the selected product to the storage, when calling', () => {
    const fakeIndex = 1;
    expect(cart(state, removeProductCart(fakeIndex)))
      .toEqual({
        ...state,
        currentProduct: [],
      });
  });
});
