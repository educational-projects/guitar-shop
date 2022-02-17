import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { makeFakeStore } from '../../../../utils/mock';
import { getFormatPrice } from '../../../../utils/utils';
import Price from './price';

const mockStore = configureMockStore([thunk]);
const history = createMemoryHistory();
const store = mockStore(makeFakeStore());

const onClick = jest.fn();

describe('Component: Price', () => {
  it('should render correctly', () => {
    const price = 17500;
    const formatPrice = getFormatPrice(price.toString());

    render(
      <Provider store={store}>
        <Router history={history}>
          <Price
            price={price}
            onClick={onClick}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Цена:')).toBeInTheDocument();
    expect(screen.getByText('Добавить в корзину')).toBeInTheDocument();
    expect(screen.getByText(`${formatPrice} ₽`)).toBeInTheDocument();
  });
});
