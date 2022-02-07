import { FormEvent, useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setModalStatus } from '../../../../store/action';
import { sendCommentsAction } from '../../../../store/api-action';
import { getGuitar } from '../../../../store/products/selectors';
import { RatingType } from '../../const';
import RatingStar from './components/rating-star/rating-star';

function NewComment(): JSX.Element {
  const dispatch = useDispatch();
  const guitar = useSelector(getGuitar);
  const {id} = useParams<{id: string}>();

  const [formState, setFormState] = useState<{ [key: string]: string }>({
    userName: '',
    advantage: '',
    disadvantage: '',
    comment: '',
    rating: '0',
    guitarId: id,
  });

  const handleChangeForm = ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleButtonClick = () => {
    dispatch(setModalStatus(false));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const data = {
      userName: formState.userName,
      advantage: formState.advantage,
      disadvantage: formState.disadvantage,
      comment: formState.comment,
      rating: Number(formState.rating),
      guitarId: Number(formState.guitarId),
    };
    dispatch(sendCommentsAction(data));
  };

  const disabled = !formState.userName || formState.rating === '0';

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
            <input
              className="form-review__input form-review__input--name"
              id="user-name"
              name='userName'
              type="text"
              value={formState.userName}
              autoComplete="off"
              onChange={handleChangeForm}
            />
            {formState.userName === '' && (
              <span className="form-review__warning">Заполните поле</span>
            )}
          </div>
          <div>
            <span className="form-review__label form-review__label--required">Ваша Оценка</span>
            <div className="rate rate--reverse">
              {Object.keys(RatingType).reverse().map((number) => (
                <RatingStar
                  number={number}
                  key={number}
                  value={formState.rating}
                  onChange={handleChangeForm}
                />
              ))}
              <span className="rate__count"></span>
              {formState.rating === '0' && (
                <span className="rate__message">Поставьте оценку</span>
              )}
            </div>
          </div>
        </div>
        <label className="form-review__label" htmlFor="user-name">Достоинства</label>
        <input
          className="form-review__input"
          id="pros" type="text"
          name="advantage"
          autoComplete="off"
          value={formState.advantage}
          onChange={handleChangeForm}
          required
        />
        <label className="form-review__label" htmlFor="user-name">Недостатки</label>
        <input
          className="form-review__input"
          id="user-name" type="text"
          name="disadvantage"
          autoComplete="off"
          value={formState.disadvantage}
          onChange={handleChangeForm}
          required
        />
        <label className="form-review__label" htmlFor="user-name">Комментарий</label>
        <textarea
          className="form-review__input form-review__input--textarea"
          name="comment"
          id="user-name"
          rows={10}
          autoComplete="off"
          value={formState.comment}
          onChange={handleChangeForm}
          required
        >
        </textarea>
        <button
          className="button button--medium-20 form-review__button"
          type="submit"
          disabled={disabled}
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
