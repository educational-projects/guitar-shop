import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { APPRoute } from '../../../../const';
import { getGuitar } from '../../../../store/products/selectors';

function Breadcrumbs(): JSX.Element {
  const guitar = useSelector(getGuitar);
  return (
    <ul className="breadcrumbs page-content__breadcrumbs">
      <li className="breadcrumbs__item">
        <Link className="link" to={APPRoute.Main}>Главная</Link>
      </li>
      <li className="breadcrumbs__item">
        <Link className="link" to={APPRoute.Catalog}>Каталог</Link>
      </li>
      <li className="breadcrumbs__item">
        <Link className="link" to={APPRoute.Product}>{guitar?.name}</Link>
      </li>
    </ul>
  );
}

export default Breadcrumbs;
