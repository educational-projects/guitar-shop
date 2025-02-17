import {render, screen} from '@testing-library/react';
import { Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import { makeFakeStore } from '../../utils/mock';
import CardsList from './cards-list';

const mockStore = configureMockStore([thunk]);
const history = createMemoryHistory();
const store = mockStore(makeFakeStore());

describe('Component: ButtonCart', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CardsList/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('По вашему запросу ничего не найдено')).toBeInTheDocument();
  });
});
