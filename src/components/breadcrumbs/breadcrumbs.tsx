import { Link } from 'react-router-dom';
import { APPRoute } from '../../const';

function Breadcrumbs(): JSX.Element {
  return (
    <ul className="breadcrumbs page-content__breadcrumbs">
      <li className="breadcrumbs__item">
        <Link className="link" to={APPRoute.Main}>
          Главная
        </Link>
      </li>
      <li className="breadcrumbs__item">
          Каталог
      </li>
    </ul>
  );
}

export default Breadcrumbs;
