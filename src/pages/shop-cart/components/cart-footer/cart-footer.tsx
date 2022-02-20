import { useSelector } from 'react-redux';
import { getCurrentProduct } from '../../../../store/cart/selectors';
import { getFormatPrice } from '../../../../utils/utils';
import CouponForm from '../coupon-form/coupon-form';

function CartFooter(): JSX.Element {
  const currentProduct = useSelector(getCurrentProduct);
  const totalPrice = currentProduct.reduce((acc, product) => acc += product.guitar.price * product.count, 0);

  return (
    <div className="cart__footer">
      <CouponForm/>
      <div className="cart__total-info">
        <p className="cart__total-item">
          <span className="cart__total-value-name">Всего:</span>
          <span className="cart__total-value">{getFormatPrice(totalPrice.toString())} ₽</span>
        </p>
        <p className="cart__total-item">
          <span className="cart__total-value-name">Скидка:</span>
          <span className="cart__total-value cart__total-value--bonus">- 3000 ₽</span>
        </p>
        <p className="cart__total-item">
          <span className="cart__total-value-name">К оплате:</span>
          <span className="cart__total-value cart__total-value--payment">49 000 ₽</span>
        </p>
        <button className="button button--red button--big cart__order-button">Оформить заказ</button>
      </div>
    </div>
  );
}

export default CartFooter;
