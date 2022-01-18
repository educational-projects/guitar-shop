import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import { makeFakeGuitar, makeFakeStore } from '../../utils/mock';
import Card from './card';

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
});
