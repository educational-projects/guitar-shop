import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { makeFakeStore } from '../../utils/mock';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { changeGuitarType } from '../../store/action';
import TypeFilter from './type-filter';

const history = createMemoryHistory();
const mockStore = configureMockStore([thunk]);
const store = mockStore(makeFakeStore());

const typeGuitar = 'Электрогитары';

describe('Component: TypeFilter', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <TypeFilter/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Тип гитар')).toBeInTheDocument();
    expect(screen.getByText('Акустические гитары')).toBeInTheDocument();
    expect(screen.getByText('Электрогитары')).toBeInTheDocument();
    expect(screen.getByText('Укулеле')).toBeInTheDocument();
  });
  it('should render click', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <TypeFilter/>
        </Router>
      </Provider>,
    );

    expect(store.getActions()).toEqual([]);

    expect(screen.getByText(typeGuitar)).toBeInTheDocument();

    const input = screen.getByText(typeGuitar);

    userEvent.click(input);
    expect(store.getActions()).toEqual([
      changeGuitarType(['electric']),
    ]);
  });
});
