import { configureMockStore } from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import thunk from 'redux-thunk';
import { createMemoryHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';
import { APPRoute } from '../../const';
import { makeFakeStore } from '../../utils/mock';
import Cart from './cart';
import { Provider } from 'react-redux';

const mockStore = configureMockStore([thunk]);
const history = createMemoryHistory();
const store = mockStore(makeFakeStore());

describe('Component: Cart', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Cart/>
        </Router>
      </Provider>,
    );

    expect(screen.getByLabelText(/Корзина/i)).toBeInTheDocument();
  });
  it('should redirect to cart user clicked to link', () => {
    history.push(APPRoute.Product);
    render(
      <Provider store={store}>
        <Router history={history}>
          <Cart/>
          <Switch>
            <Route exact path={APPRoute.Product}>
              <h1>This is product page</h1>
            </Route>
            <Route>
              <h1>This is cart page</h1>
            </Route>
          </Switch>
        </Router>,
      </Provider>,
    );

    expect(screen.getByText(/This is product page/i)).toBeInTheDocument();
    expect(screen.queryByText(/This is cart page/i)).not.toBeInTheDocument();

    userEvent.click(screen.getByLabelText('Корзина'));

    expect(screen.getByText(/This is cart page/i)).toBeInTheDocument();
  });
});
