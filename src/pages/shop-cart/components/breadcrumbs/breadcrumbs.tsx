import { Link } from 'react-router-dom';
import { APPRoute } from '../../../../const';

function Breadcrumbs(): JSX.Element {
  return (
    <ul className="breadcrumbs page-content__breadcrumbs page-content__breadcrumbs--on-cart-page">
      <li className="breadcrumbs__item">
        <Link className="link" to={APPRoute.Main}>Главная</Link>
      </li>
      <li className="breadcrumbs__item">
        <Link className="link" to={APPRoute.Catalog}>Каталог</Link>
      </li>
      <li className="breadcrumbs__item">
        Корзина
      </li>
    </ul>
  );
}

export default Breadcrumbs;
