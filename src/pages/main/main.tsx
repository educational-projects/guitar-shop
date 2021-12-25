import { useSelector } from 'react-redux';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import CardsList from '../../components/cards-list/cards-list';
import Filter from '../../components/filter/filter';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Pagination from '../../components/pagination/pagination';
import Sorting from '../../components/sorting/sorting';
import Title from '../../components/title/title';
import { getGuitarsError } from '../../store/products/selectors';
import FallbackError from '../fallback-error/fallback-error';

function Main(): JSX.Element {
  const guitarsError = useSelector(getGuitarsError);

  if (guitarsError) {
    return <FallbackError/>;
  }

  return (
    <div className="wrapper">
      <Header/>
      <main className="page-content">
        <div className="container">
          <Title title='Каталог гитар'/>
          <Breadcrumbs/>
          <div className="catalog">
            <Filter/>
            <Sorting/>
            <CardsList/>
            <Pagination/>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Main;
