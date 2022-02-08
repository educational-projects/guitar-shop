import { useDispatch } from 'react-redux';
import { resetCommentPostStatus, setModalStatus } from '../../../../store/action';

function SuccessReview(): JSX.Element {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(setModalStatus(false));
    dispatch(resetCommentPostStatus());
  };

  return (
    <>
      <svg className="modal__icon" width="26" height="20" aria-hidden="true">
        <use xlinkHref="#icon-success"></use>
      </svg>
      <p className="modal__message">Спасибо за ваш отзыв!</p>
      <div className="modal__button-container modal__button-container--review">
        <button
          className="button button--small modal__button modal__button--review"
          data-testid="success-close-button"
          onClick={handleButtonClick}
        >
               К покупкам!
        </button>
      </div>
      <button
        className="modal__close-btn button-cross"
        type="button" aria-label="Закрыть"
        onClick={handleButtonClick}
      >
        <span className="button-cross__icon"></span>
        <span className="modal__close-btn-interactive-area"></span>
      </button>
    </>
  );
}

export default SuccessReview;
