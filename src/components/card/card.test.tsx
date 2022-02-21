import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import { makeFakeGuitar, makeFakeStore } from '../../utils/mock';
import Card from './card';
import userEvent from '@testing-library/user-event';

const mockStore = configureMockStore([thunk]);
const history = createMemoryHistory();
const store = mockStore(makeFakeStore());

describe('Component: Card', () => {
  const card = makeFakeGuitar();
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Card guitar={card}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Купить')).toBeInTheDocument();
    expect(screen.getByText('Подробнее')).toBeInTheDocument();
  });
  it('should modal window is expected to open after clicking', () => {
    const handleButtonCartClick = jest.fn();
    render(
      <Provider store={store}>
        <Router history={history}>
          <Card guitar={card}/>
        </Router>
      </Provider>,
    );

    const buttonBuy = screen.getByText('Купить');
    buttonBuy.onclick = handleButtonCartClick;
    expect(buttonBuy).toBeInTheDocument();
    userEvent.click(buttonBuy);
    expect(handleButtonCartClick).toBeCalled();
    expect(screen.getByText('Добавить товар в корзину')).toBeInTheDocument();
  });
});
