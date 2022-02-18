import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { APPRoute } from '../../const';
import { getCurrentProduct } from '../../store/cart/selectors';

function Cart(): JSX.Element {
  const currentProduct = useSelector(getCurrentProduct);

  return (
    <Link className="header__cart-link" to={APPRoute.ShopCart} aria-label="Корзина">
      <svg className="header__cart-icon" width="14" height="14" aria-hidden="true">
        <use xlinkHref="#icon-basket"></use>
      </svg>
      <span className="visually-hidden">
              Перейти в корзину
      </span>
      {currentProduct.length > 0 && (
        <span className="header__cart-count">
          {currentProduct.length}
        </span>
      )}
    </Link>
  );
}

export default Cart;
