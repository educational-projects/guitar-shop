import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';
import { APPRoute } from '../../const';
import NavMenu from './nav-menu';


const history = createMemoryHistory();

describe('Component: NavMenu', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <NavMenu/>
      </Router>);

    expect(screen.getByText(/Каталог/i)).toBeInTheDocument();
    expect(screen.getByText(/Где купить?/i)).toBeInTheDocument();
    expect(screen.getByText(/О компании/i)).toBeInTheDocument();
  });

  it('should redirect to catalog user clicked to link', () => {
    history.push(APPRoute.Main);
    render(
      <Router history={history}>
        <NavMenu/>
        <Switch>
          <Route exact path={APPRoute.Main}>
            <h1>This is main page</h1>
          </Route>
          <Route exact path={APPRoute.Catalog}>
            <h1>This is catalog page</h1>
          </Route>
        </Switch>
      </Router>);

    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
    expect(screen.queryByText(/This is catalog page/i)).not.toBeInTheDocument();

    userEvent.click(screen.getByText('Каталог'));

    expect(screen.getByText(/This is catalog page/i)).toBeInTheDocument();
  });
  it('should redirect to buy user clicked to link', () => {
    history.push(APPRoute.Product);
    render(
      <Router history={history}>
        <NavMenu/>
        <Switch>
          <Route exact path={APPRoute.Product}>
            <h1>This is product page</h1>
          </Route>
          <Route>
            <h1>This is where to buy page</h1>
          </Route>
        </Switch>
      </Router>);

    expect(screen.getByText(/This is product page/i)).toBeInTheDocument();
    expect(screen.queryByText(/This is where to buy page/i)).not.toBeInTheDocument();

    userEvent.click(screen.getByText('Где купить?'));

    expect(screen.getByText(/This is where to buy page/i)).toBeInTheDocument();
  });
  it('should redirect to info user clicked to link', () => {
    history.push(APPRoute.Product);
    render(
      <Router history={history}>
        <NavMenu/>
        <Switch>
          <Route exact path={APPRoute.Product}>
            <h1>This is product page</h1>
          </Route>
          <Route>
            <h1>This is where to info page</h1>
          </Route>
        </Switch>
      </Router>);

    expect(screen.getByText(/This is product page/i)).toBeInTheDocument();
    expect(screen.queryByText(/This is where to info page/i)).not.toBeInTheDocument();

    userEvent.click(screen.getByText('О компании'));

    expect(screen.getByText(/This is where to info page/i)).toBeInTheDocument();
  });
});
