import { useSelector } from 'react-redux';
import { getCurrentProduct, getDiscount } from '../../../../store/cart/selectors';
import { getFormatPrice } from '../../../../utils/utils';
import CouponForm from '../coupon-form/coupon-form';
import cn from 'classnames';

function CartFooter(): JSX.Element {
  const currentProduct = useSelector(getCurrentProduct);
  const discount = useSelector(getDiscount);

  const totalPrice = currentProduct.reduce((acc, product) => acc += product.guitar.price * product.count, 0);
  const discountReceived = discount ? totalPrice / 100 * Number(discount) : 0 ;

  const discountClass = cn ('cart__total-value',{
    'cart__total-value--bonus' : discountReceived > 0,
  });


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
          <span
            className={discountClass}
          >
            {discountReceived > 0 ? '-' : ''} {getFormatPrice(discountReceived.toString())} ₽
          </span>
        </p>
        <p className="cart__total-item">
          <span className="cart__total-value-name">К оплате:</span>
          <span className="cart__total-value cart__total-value--payment">{getFormatPrice((totalPrice - discountReceived).toString())} ₽</span>
        </p>
        <button className="button button--red button--big cart__order-button">Оформить заказ</button>
      </div>
    </div>
  );
}

export default CartFooter;
