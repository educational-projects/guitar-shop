import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import thunk from 'redux-thunk';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { makeFakeStore } from '../../../../utils/mock';
import { Router } from 'react-router-dom';
import NewComment from './new-comment';

const mockStore = configureMockStore([thunk]);
const history = createMemoryHistory();
const store = mockStore(makeFakeStore());

describe('Component: NewComment', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <NewComment/>
        </Router>
      </Provider>,
    );
    expect(screen.getByText('Ваше Имя')).toBeInTheDocument();
    expect(screen.getByText('Ваша Оценка')).toBeInTheDocument();
    expect(screen.getByText('Достоинства')).toBeInTheDocument();
    expect(screen.getByText('Недостатки')).toBeInTheDocument();
    expect(screen.getByText('Комментарий')).toBeInTheDocument();
  });

  it('should render handle user events correctly', () => {
    const FakeName = 'Дима';
    const FakeAdvantage = 'нету';
    const FakeDisadvantage = 'цена';
    const FakeComment = 'good';

    render(
      <Provider store={store}>
        <Router history={history}>
          <NewComment/>
        </Router>
      </Provider>);

    userEvent.type(screen.getByTestId('userName'), FakeName);
    userEvent.type(screen.getByTestId('advantage'), FakeAdvantage);
    userEvent.type(screen.getByTestId('disadvantage'), FakeDisadvantage);
    userEvent.type(screen.getByTestId('comment'), FakeComment);

    expect(screen.getByDisplayValue(FakeName)).toBeInTheDocument();
    expect(screen.getByDisplayValue(FakeAdvantage)).toBeInTheDocument();
    expect(screen.getByDisplayValue(FakeDisadvantage)).toBeInTheDocument();
    expect(screen.getByDisplayValue(FakeDisadvantage)).toBeInTheDocument();
  });
});
