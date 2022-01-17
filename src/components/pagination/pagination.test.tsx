import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import { makeFakeStore } from '../../utils/mock';
import Pagination from './pagination';
import * as Redux from 'react-redux';


const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: Pagination', () => {
  it('should render correctly', () => {
    render(
      <Provider store={mockStore(makeFakeStore)}>
        <Router history={history}>
          <Pagination/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/1/i)).toBeInTheDocument();
  });

  it('should be called the function when the user changes the page', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={mockStore(makeFakeStore)}>
        <Router history={history}>
          <Pagination/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/1/i)).toBeInTheDocument();

    userEvent.click(screen.getByText(/1/i));

    expect(dispatch).toBeCalledTimes(1);

  });
});
