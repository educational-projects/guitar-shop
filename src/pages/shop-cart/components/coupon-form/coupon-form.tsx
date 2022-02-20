import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendCouponAction } from '../../../../store/api-action';
import { getConcatString } from '../../utils';

function CouponForm(): JSX.Element {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState('');

  const handleSubmitForm = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(sendCouponAction(formState));
  };

  const handleChangeForm = ({target} :ChangeEvent<HTMLInputElement>) => {
    const {value} = target;
    setFormState(getConcatString(value));
  };

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
            onChange={handleChangeForm}
            value={formState}
          />
          <p className="form-input__message form-input__message--success">Промокод принят</p>
        </div>
        <button className="button button--big coupon__button">Применить</button>
      </form>
    </div>
  );
}

export default CouponForm;
