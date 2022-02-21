import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import * as Redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import AddToCart from './add-to-cart';
import { makeFakeGuitar, makeFakeStore } from '../../utils/mock';
import userEvent from '@testing-library/user-event';

const mockStore = configureMockStore([thunk]);
const history = createMemoryHistory();
const store = mockStore(makeFakeStore());

const onClose = jest.fn();
const onAdd = jest.fn();

describe('Component: AddToCart', () => {
  it('should render correctly', () => {
    const fakeGuitar = makeFakeGuitar();
    render(
      <Provider store={store}>
        <Router history={history}>
          <AddToCart
            guitar={fakeGuitar}
            onClose={onClose}
            onAdd={onAdd}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Добавить товар в корзину')).toBeInTheDocument();
    expect(screen.getByText(`Гитара ${fakeGuitar.name}`)).toBeInTheDocument();
    expect(screen.getByText('Добавить в корзину')).toBeInTheDocument();
  });
  it('should close modal by close button click', () => {
    const fakeGuitar = makeFakeGuitar();
    render(
      <Provider store={store}>
        <Router history={history}>
          <AddToCart
            guitar={fakeGuitar}
            onClose={onClose}
            onAdd={onAdd}
          />
        </Router>
      </Provider>,
    );

    const closeButton = screen.getByLabelText('Закрыть');
    userEvent.click(closeButton);
    expect(onClose).toBeCalled();
  });
  it('should add the product to the cart by clicking on the button', () => {
    const fakeGuitar = makeFakeGuitar();
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);
    render(
      <Provider store={store}>
        <Router history={history}>
          <AddToCart
            guitar={fakeGuitar}
            onClose={onClose}
            onAdd={onAdd}
          />
        </Router>
      </Provider>,
    );

    const addButton = screen.getByText('Добавить в корзину');
    userEvent.click(addButton);
    expect(onAdd).toBeCalled();
    expect(dispatch).toBeCalled();
  });
});
