import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';
import Logo from './logo';


const history = createMemoryHistory();

describe('Component: Logo', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <Logo/>
      </Router>);

    expect(screen.getByAltText(/Логотип/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should redirect to root url when user clicked to link', () => {
    history.push('/fake');
    render(
      <Router history={history}>
        <Switch>
          <Route exact path='/'>
            <h1>This is main page</h1>
          </Route>
          <Route>
            <Logo/>
          </Route>
        </Switch>
      </Router>);

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();

    userEvent.click(screen.getByRole('link'));
    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});
