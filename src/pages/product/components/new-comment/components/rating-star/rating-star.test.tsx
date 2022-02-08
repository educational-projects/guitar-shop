import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { makeFakeStore } from '../../../../../../utils/mock';
import RatingStar from './rating-star';

const mockStore = configureMockStore([thunk]);
const history = createMemoryHistory();
const store = mockStore(makeFakeStore());

const onStartChange = jest.fn();
describe('Component: RatingStar', () => {
  it('should render correctly', () => {
    const fakeNumber = '5';

    render(
      <Provider store={store}>
        <Router history={history}>
          <RatingStar number={fakeNumber} value={fakeNumber} onChange={onStartChange} />
        </Router>
      </Provider>);

    expect(screen.getByTestId(fakeNumber)).not.toBeNull();
    userEvent.click(screen.getByTestId(fakeNumber));
    expect(screen.getByTestId(fakeNumber)).toBeChecked();
  });

});
