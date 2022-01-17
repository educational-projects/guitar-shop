import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import { makeFakeStore } from '../../utils/mock';
import PriceFilter from './price-filter';
import { APPRoute } from '../../const';


const mockStore = configureMockStore([thunk]);
const history = createMemoryHistory();

describe('Component: PriceFilter', () => {
  it('should render correctly', () => {
    history.push(APPRoute.Catalog);
    render(
      <Provider store={mockStore(makeFakeStore)}>
        <Router history={history}>
          <PriceFilter/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Минимальная цена/i)).toBeInTheDocument();
    expect(screen.getByText(/Максимальная цена/i)).toBeInTheDocument();
  });
});
