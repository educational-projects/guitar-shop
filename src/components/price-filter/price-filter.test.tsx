import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import { makeFakeStore } from '../../utils/mock';
import PriceFilter from './price-filter';
import userEvent from '@testing-library/user-event';

const mockStore = configureMockStore([thunk]);
const history = createMemoryHistory();
const store = mockStore(makeFakeStore());

describe('Component: PriceFilter', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <PriceFilter/>
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('minPrice')).toBeInTheDocument();
    expect(screen.getByTestId('maxPrice')).toBeInTheDocument();
  });
  it('should expected to change the state after entering in the field', () => {
    const fakeFn = jest.fn();
    const fakePrice = '1000';
    render(
      <Provider store={store}>
        <Router history={history}>
          <PriceFilter/>
        </Router>
      </Provider>,
    );

    const minPriceInput = screen.getByTestId('minPrice');
    minPriceInput.onchange = fakeFn();
    expect(minPriceInput).toBeInTheDocument();
    userEvent.type(minPriceInput, fakePrice);
    expect(fakeFn).toBeCalled();
    expect(minPriceInput).toHaveDisplayValue(fakePrice);
  });
});
