import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import { makeFakeGuitar, makeFakeStore } from '../../../../utils/mock';
import DeleteProduct from './delete-product';

const mockStore = configureMockStore([thunk]);
const history = createMemoryHistory();
const store = mockStore(makeFakeStore());

const onClose = jest.fn();

describe('Component: DeleteProduct', () => {
  it('should render correctly', () => {
    const fakeGuitar = makeFakeGuitar();
    render(
      <Provider store={store}>
        <Router history={history}>
          <DeleteProduct
            guitar={fakeGuitar}
            onClose={onClose}
          />
        </Router>
      </Provider>,
    );

    const title = screen.getByText('Удалить этот товар?');
    const deleteButton = screen.getByText('Удалить товар');
    const continueButton = screen.getByText('Продолжить покупки');
    const closeButton = screen.getByLabelText('Закрыть');


    expect(title).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
    expect(continueButton).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  });
});
