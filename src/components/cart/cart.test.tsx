import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';
import { APPRoute } from '../../const';
import Cart from './cart';


const history = createMemoryHistory();

describe('Component: Cart', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <Cart/>
      </Router>);

    expect(screen.getByLabelText(/Корзина/i)).toBeInTheDocument();
  });

  it('should redirect to cart user clicked to link', () => {
    history.push(APPRoute.Product);
    render(
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
      </Router>);

    expect(screen.getByText(/This is product page/i)).toBeInTheDocument();
    expect(screen.queryByText(/This is cart page/i)).not.toBeInTheDocument();

    userEvent.click(screen.getByLabelText('Корзина'));

    expect(screen.getByText(/This is cart page/i)).toBeInTheDocument();
  });
});
