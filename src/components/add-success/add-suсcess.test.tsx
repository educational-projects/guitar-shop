import {render, screen} from '@testing-library/react';
import {Route, Router, Switch} from 'react-router-dom';
import thunk from 'redux-thunk';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import { makeFakeStore } from '../../utils/mock';
import AddSuccess from './add-success';
import userEvent from '@testing-library/user-event';
import { APPRoute } from '../../const';

const mockStore = configureMockStore([thunk]);
const history = createMemoryHistory();
const store = mockStore(makeFakeStore());

const onClose = jest.fn();

describe('Component: AddSuccess', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <AddSuccess onClose={onClose}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Товар успешно добавлен в корзину')).toBeInTheDocument();
    expect(screen.getByText('Перейти в корзину')).toBeInTheDocument();
    expect(screen.getByText('Продолжить покупки')).toBeInTheDocument();
  });
  it('should close upon close button click', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <AddSuccess onClose={onClose}/>
        </Router>
      </Provider>,
    );

    const closeButton = screen.getByText('Продолжить покупки');
    userEvent.click(closeButton);
    expect(onClose).toBeCalled();
  });
  it('should redirect in cart button click', () => {
    history.push('/modal');

    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path={APPRoute.ShopCart}>
              <h1>Корзина</h1>
            </Route>
            <Route>
              <AddSuccess onClose={onClose}/>
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(/Корзина/i)).not.toBeInTheDocument();

    const closeButton = screen.getByText('Перейти в корзину');
    userEvent.click(closeButton);
    expect(screen.getByText(/Корзина/i)).toBeInTheDocument();
  });
});
