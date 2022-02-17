import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Title from '../../components/title/title';
import { PageTitle } from '../../const';
import Breadcrumbs from './components/breadcrumbs/breadcrumbs';
import ProductList from './components/product-list/product-list';

function ShopCart(): JSX.Element {
  return (
    <div className="wrapper">
      <Header/>
      <main className="page-content">
        <div className="container">
          <Title title={PageTitle.ShopCart} />
          <Breadcrumbs/>
          <ProductList/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default ShopCart;
