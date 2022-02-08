import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import * as Redux from 'react-redux';
import { createMemoryHistory } from 'history';
import Comments from './comments';
import { makeFakeComment, makeFakeStore } from '../../../../utils/mock';

const mockStore = configureMockStore([thunk]);
const history = createMemoryHistory();
const store = mockStore(makeFakeStore());
const dispatch = jest.fn();

describe('Component: Comments', () => {
  it('should render correctly', () => {
    const fakeComment = makeFakeComment();

    render(
      <Provider store={store}>
        <Router history={history}>
          <Comments comments={[fakeComment]} />
        </Router>
      </Provider>);

    expect(screen.getByText('Отзывы')).toBeInTheDocument();
    expect(screen.getByText('Наверх')).toBeInTheDocument();
    expect(screen.getByText('Оставить отзыв')).toBeInTheDocument();
  });
  it('should open pop-up', () => {
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    const fakeComment = makeFakeComment();

    render(
      <Provider store={store}>
        <Router history={history}>
          <Comments comments={[fakeComment]} />
        </Router>
      </Provider>);

    expect(screen.getByText('Оставить отзыв')).toBeInTheDocument();
    const NewCommentButton = screen.getByText('Оставить отзыв');

    userEvent.click(NewCommentButton);

    expect(dispatch).toBeCalledTimes(1);
  });

});
