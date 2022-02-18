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
    render(
      <Provider store={store}>
        <Router history={history}>
          <Product guitar={fakeGuitar}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(fakeGuitar.name)).toBeInTheDocument();
  });
});
