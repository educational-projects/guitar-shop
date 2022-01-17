import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import SearchForm from './search-form';
import { makeFakeStore } from '../../utils/mock';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: SearchForm', () => {
  it('should render correctly', () => {
    render(
      <Provider store={mockStore(makeFakeStore)}>
        <Router history={history}>
          <SearchForm />
        </Router>
      </Provider>,
    );

    expect(screen.getByPlaceholderText(/Что вы ищите?/i)).toBeInTheDocument();
  });

  it('should call function when user enters search', () => {
    const text = 'curt';

    render(
      <Provider store={mockStore(makeFakeStore)}>
        <Router history={history}>
          <SearchForm/>
        </Router>
      </Provider>,
    );

    expect(screen.getByPlaceholderText(/Что вы ищите?/i)).toBeInTheDocument();

    userEvent.type(screen.getByPlaceholderText(/Что вы ищите?/i), text);

    expect(screen.getByDisplayValue(text)).toBeInTheDocument();

  });
});
