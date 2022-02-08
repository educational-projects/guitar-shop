import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import thunk from 'redux-thunk';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { makeFakeStore } from '../../../../utils/mock';
import SuccessReview from './success-review';
import { Router } from 'react-router-dom';
import * as Redux from 'react-redux';

const mockStore = configureMockStore([thunk]);
const history = createMemoryHistory();
const store = mockStore(makeFakeStore());

const dispatch = jest.fn();

describe('Component: SuccessReview', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <SuccessReview/>
        </Router>
      </Provider>,
    );
    expect(screen
      .getByText('Спасибо за ваш отзыв!')).toBeInTheDocument();
  });

  it('should handle close button correctly', () => {
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <Router history={history}>
          <SuccessReview/>
        </Router>
      </Provider>,
    );

    const closeButton = screen.getByTestId('success-close-button');

    userEvent.click(closeButton);

    expect(dispatch).toBeCalledTimes(2);
  });
});
