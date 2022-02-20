import { makeFakeGuitar } from '../../utils/mock';
import { addProductCart, removeProductCart, sendCouponError, sendCouponSuccess } from '../action';
import { cart } from './cart';

const state = {
  currentProduct: [],
  discount: null,
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
        currentProduct: [{guitar: fakeGuitar, count: 1}, ...state.currentProduct],
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
  it('should set a discount after receiving a response', () => {
    const fakeDiscount = '35';
    expect(cart(state, sendCouponSuccess(fakeDiscount)))
      .toEqual({
        ...state,
        discount: fakeDiscount,
      });
  });
  it('should remove the discount, having received a refusal', () => {
    expect(cart(state, sendCouponError()))
      .toEqual({
        ...state,
        discount: null,
      });
  });
});
