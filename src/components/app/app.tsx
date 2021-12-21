import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { APPRoute } from '../../const';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Product from '../../pages/product/product';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={APPRoute.Main}>
          <Main/>
        </Route>
        <Route exact path={`${APPRoute.Product}/:id`}>
          <Product/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
