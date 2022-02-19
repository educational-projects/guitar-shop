import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import { makeFakeGuitar, makeFakeStore } from '../../../../utils/mock';
import Product from './product';

const mockStore = configureMockStore([thunk]);
const history = createMemoryHistory();
const store = mockStore(makeFakeStore());

describe('Component: Product', () => {
  it('should render correctly', () => {
    const fakeGuitar = makeFakeGuitar();
    const fakeCount = 2;
    render(
      <Provider store={store}>
        <Router history={history}>
          <Product
            guitar={fakeGuitar}
            count={fakeCount}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(fakeGuitar.name)).toBeInTheDocument();
    expect(screen.getByDisplayValue(fakeCount)).toBeInTheDocument();
  });
});
