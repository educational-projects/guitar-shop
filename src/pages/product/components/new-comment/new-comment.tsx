import { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalStatus } from '../../../../store/action';
import { sendCommentsAction } from '../../../../store/api-action';
import { getGuitar } from '../../../../store/products/selectors';
import { RatingType } from '../../const';
import RatingStar from './components/rating-star/rating-star';

function NewComment(): JSX.Element {
  const dispatch = useDispatch();
  const guitar = useSelector(getGuitar);

  const handleButtonClick = () => {
    dispatch(setModalStatus(false));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(sendCommentsAction());
  };

  return (
    <>
      <h2 className="modal__header modal__header--review title title--medium">Оставить отзыв</h2>
      <h3 className="modal__product-name title title--medium-20 title--uppercase">{guitar?.name}</h3>
      <form
        className="form-review"
        onSubmit={handleFormSubmit}
      >
        <div className="form-review__wrapper">
          <div className="form-review__name-wrapper">
            <label className="form-review__label form-review__label--required" htmlFor="user-name">Ваше Имя</label>
            <input className="form-review__input form-review__input--name" id="user-name" type="text" autoComplete="off" />
            <span className="form-review__warning">Заполните поле</span>
          </div>
          <div>
            <span className="form-review__label form-review__label--required">Ваша Оценка</span>
            <div className="rate rate--reverse">
              {Object.keys(RatingType).reverse().map((number) => (
                <RatingStar number={number} key={number}/>
              ))}
              <span className="rate__count"></span>
              <span className="rate__message">Поставьте оценку</span>
            </div>
          </div>
        </div>
        <label className="form-review__label" htmlFor="user-name">Достоинства</label>
        <input className="form-review__input" id="pros" type="text" autoComplete="off" />
        <label className="form-review__label" htmlFor="user-name">Недостатки</label>
        <input className="form-review__input" id="user-name" type="text" autoComplete="off" />
        <label className="form-review__label" htmlFor="user-name">Комментарий</label>
        <textarea className="form-review__input form-review__input--textarea" id="user-name" rows={10} autoComplete="off"></textarea>
        <button
          className="button button--medium-20 form-review__button"
          type="submit"
        >
          Отправить отзыв
        </button>
      </form>
      <button
        className="modal__close-btn button-cross"
        type="button"
        aria-label="Закрыть"
        onClick={handleButtonClick}
      >
        <span className="button-cross__icon"></span>
        <span className="modal__close-btn-interactive-area"></span>
      </button>
    </>
  );
}

export default NewComment;
