import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { makeFakeStore } from '../../utils/mock';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import QuantityFilter from './quantity-filter';
import { changeNumberOfString } from '../../store/action';

const history = createMemoryHistory();
const mockStore = configureMockStore([thunk]);
const store = mockStore(makeFakeStore());

const fourStrings = '4';

describe('Component: PriceFilter', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <QuantityFilter/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Количество струн')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
  });
  it('should render click', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <QuantityFilter/>
        </Router>
      </Provider>,
    );

    expect(store.getActions()).toEqual([]);

    expect(screen.getByText(fourStrings)).toBeInTheDocument();

    const input = screen.getByTestId(fourStrings);

    userEvent.click(input);
    expect(store.getActions()).toEqual([
      changeNumberOfString([fourStrings]),
    ]);
  });
});
