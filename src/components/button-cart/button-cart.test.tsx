import {render, screen} from '@testing-library/react';
import {Route, Router, Switch} from 'react-router-dom';
import thunk from 'redux-thunk';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import { makeFakeStore } from '../../utils/mock';
import ButtonCart from './button-cart';
import userEvent from '@testing-library/user-event';

const mockStore = configureMockStore([thunk]);
const history = createMemoryHistory();
const store = mockStore(makeFakeStore());

describe('Component: ButtonCart', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <ButtonCart/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('В Корзине')).toBeInTheDocument();
  });
  it('should redirection for click', () => {
    history.push('/');
    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path='/'>
              <ButtonCart/>
            </Route>
            <Route>
              <h1>This is the shopping cart page</h1>
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    const cartLink = screen.getByText('В Корзине');

    expect(screen.queryByText(/This is the shopping cart page/i)).not.toBeInTheDocument();
    userEvent.click(cartLink);
    expect(screen.getByText(/This is the shopping cart page/i)).toBeInTheDocument();
  });
});
