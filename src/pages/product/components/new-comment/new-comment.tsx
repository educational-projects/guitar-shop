import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { setModalStatus } from '../../../../store/action';
import { sendCommentsAction } from '../../../../store/api-action';
import { getGuitar, getSendCommentLoading } from '../../../../store/products/selectors';
import { RatingType } from '../../const';
import RatingStar from './components/rating-star/rating-star';

enum FormField {
  UserName = 'userName',
  Advantage = 'advantage',
  Disadvantage = 'disadvantage',
  Comment = 'comment',
  Rating = 'rating',
  GuitarId = 'guitarId',
}

type FormData = {
  userName: string,
  advantage: string,
  disadvantage: string,
  comment: string,
  rating: number,
}

function NewComment(): JSX.Element {
  const dispatch = useDispatch();
  const guitar = useSelector(getGuitar);
  const sendCommentLoading = useSelector(getSendCommentLoading);
  const {id} = useParams<{id: string}>();

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm<FormData>();

  const handleButtonClick = () => {
    dispatch(setModalStatus(false));
  };

  const handleFormSubmit = (data: FormData) => {
    dispatch(sendCommentsAction({
      guitarId: Number(id),
      ...data,
      rating: Number(data.rating),
    }));
  };

  const disabled = sendCommentLoading;

  return (
    <>
      <h2 className="modal__header modal__header--review title title--medium">Оставить отзыв</h2>
      <h3 className="modal__product-name title title--medium-20 title--uppercase">{guitar?.name}</h3>
      <form
        className="form-review"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="form-review__wrapper">
          <div className="form-review__name-wrapper">
            <label className="form-review__label form-review__label--required" htmlFor="user-name">Ваше Имя</label>
            <input
              className="form-review__input form-review__input--name"
              id="user-name"
              type="text"
              autoComplete="off"
              {...register(FormField.UserName, {
                required: true,
              })}
              data-testid="userName"
            />
            {errors.userName && (
              <span className="form-review__warning">Заполните поле</span>
            )}
          </div>
          <div>
            <span className="form-review__label form-review__label--required">Ваша Оценка</span>
            <div
              className="rate rate--reverse"
              dir='rtl'
            >
              {Object.keys(RatingType).reverse().map((number) => (
                <RatingStar
                  number={number}
                  key={number}
                  {...register(FormField.Rating, {
                    required: true,
                  })}
                />
              ))}
              <span className="rate__count"></span>
              {errors.rating && (
                <span className="rate__message">Поставьте оценку</span>
              )}
            </div>
          </div>
        </div>
        <label className="form-review__label" htmlFor="user-name">Достоинства</label>
        <input
          className="form-review__input"
          id="pros" type="text"
          {...register(FormField.Advantage, {
            required: true,
          })}
          autoComplete="off"
          data-testid="advantage"
        />
        {errors.advantage && (
          <span className="form-review__warning">Заполните поле</span>
        )}
        <label className="form-review__label" htmlFor="user-name">Недостатки</label>
        <input
          className="form-review__input"
          id="user-name" type="text"
          {...register(FormField.Disadvantage, {
            required: true,
          })}
          autoComplete="off"
          data-testid="disadvantage"
        />
        {errors.disadvantage && (
          <span className="form-review__warning">Заполните поле</span>
        )}
        <label className="form-review__label" htmlFor="user-name">Комментарий</label>
        <textarea
          className="form-review__input form-review__input--textarea"
          {...register(FormField.Comment, {
            required: true,
          })}
          id="user-name"
          rows={10}
          autoComplete="off"
          data-testid="comment"
        >
        </textarea>
        {errors.comment && (
          <span className="form-review__warning">Заполните поле</span>
        )}
        <button
          className="button button--medium-20 form-review__button"
          type="submit"
          disabled={disabled}
          data-testid="submitt"
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
