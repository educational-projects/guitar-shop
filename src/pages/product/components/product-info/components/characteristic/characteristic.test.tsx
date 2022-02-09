import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import thunk from 'redux-thunk';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import Characteristic from './characteristic';
import { makeFakeGuitar, makeFakeStore } from '../../../../../../utils/mock';

const mockStore = configureMockStore([thunk]);
const history = createMemoryHistory();
const store = mockStore(makeFakeStore());

describe('Component: Characteristic', () => {
  it('should render correctly', () => {
    const fakeGuitar = makeFakeGuitar();
    render(
      <Provider store={store}>
        <Router history={history}>
          <Characteristic guitar={fakeGuitar}/>
        </Router>
      </Provider>,
    );
    expect(screen.getByText('Артикул:')).toBeInTheDocument();
    expect(screen.getByText('Тип:')).toBeInTheDocument();
    expect(screen.getByText('Количество струн:')).toBeInTheDocument();
  });
});
