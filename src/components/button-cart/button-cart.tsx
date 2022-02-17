import { Link } from 'react-router-dom';
import { APPRoute } from '../../const';
import { getScrollPage } from '../../utils/utils';

function ButtonCart(): JSX.Element {
  return (
    <Link
      className="button button--red-border button--mini button--in-cart"
      to={APPRoute.ShopCart}
      onClick={() => getScrollPage()}
    >
        В Корзине
    </Link>
  );
}

export default ButtonCart;
