import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import { makeFakeStore } from '../../utils/mock';
import ShopCart from './shop-cart';

const mockStore = configureMockStore([thunk]);
const history = createMemoryHistory();
const store = mockStore(makeFakeStore());

describe('Component: ShopCart', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <ShopCart/>
        </Router>
      </Provider>,
    );

    const carts = screen.getAllByText('Корзина');
    const promo = screen.getByText('Промокод на скидку');
    const payment = screen.getByText('К оплате:');

    expect(carts.length).toBe(2);
    expect(promo).toBeInTheDocument();
    expect(payment).toBeInTheDocument();
  });
});
