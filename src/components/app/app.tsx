import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { APPRoute } from '../../const';
import ShopCart from '../../pages/shop-cart/shop-cart';
import Catalog from '../../pages/catalog/catalog';
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
        <Route exact path={APPRoute.Catalog}>
          <Catalog/>
        </Route>
        <Route exact path={`${APPRoute.Product}/:id`}>
          <Product/>
        </Route>
        <Route exact path={APPRoute.ShopCart}>
          <ShopCart/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
