import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendCouponAction } from '../../../../store/api-action';
import { getConcatString } from '../../utils';
import cn from 'classnames';
import { getDiscount } from '../../../../store/cart/selectors';

function CouponForm(): JSX.Element {
  const dispatch = useDispatch();
  const discount = useSelector(getDiscount);
  const [formState, setFormState] = useState('');
  const [couponSent, setCouponSent] = useState(false);

  const handleSubmitForm = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(sendCouponAction(formState, setCouponSent));
  };

  const handleChangeForm = ({target} :ChangeEvent<HTMLInputElement>) => {
    const {value} = target;
    setFormState(getConcatString(value));
  };

  const handleBlurForm = () => {
    if (!formState && !discount) {
      setCouponSent(false);
    }
  };

  const promoClass = cn ('form-input__message', {
    'form-input__message--success' : discount ,
    'form-input__message--error' : !discount ,
  });

  const promoText = discount ? 'Промокод принят' : 'неверный промокод';

  return (
    <div className="cart__coupon coupon">
      <h2 className="title title--little coupon__title">Промокод на скидку</h2>
      <p className="coupon__info">Введите свой промокод, если он у вас есть.</p>
      <form
        className="coupon__form"
        id="coupon-form"
        method="post"
        action="/"
        onSubmit={handleSubmitForm}
      >
        <div className="form-input coupon__input">
          <label className="visually-hidden">Промокод</label>
          <input
            type="text"
            placeholder="Введите промокод"
            id="coupon"
            name="coupon"
            onBlur={handleBlurForm}
            onChange={handleChangeForm}
            value={formState}
          />
          {couponSent && (
            <p className={promoClass}>{promoText}</p>
          )}
        </div>
        <button className="button button--big coupon__button">Применить</button>
      </form>
    </div>
  );
}

export default CouponForm;
