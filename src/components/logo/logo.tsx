import { Link } from 'react-router-dom';
import { APPRoute } from '../../const';

function Logo(): JSX.Element {
  return (
    <Link className="header__logo logo" to={APPRoute.Main}>
      <img className="logo__img" width="70" height="70" src="../img/svg/logo.svg" alt="Логотип"/>
    </Link>
  );
}

export default Logo;
