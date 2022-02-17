import { useHistory } from 'react-router-dom';
import { APPRoute } from '../../../../const';
import { getScrollPage } from '../../../../utils/utils';

type AddSuccessProps = {
  onClose: () => void,
}

function AddSuccess({onClose}: AddSuccessProps): JSX.Element {
  const history = useHistory();
  return (
    <>
      <svg className="modal__icon" width="26" height="20" aria-hidden="true">
        <use xlinkHref="#icon-success"></use>
      </svg>
      <p className="modal__message">Товар успешно добавлен в корзину</p>
      <div className="modal__button-container modal__button-container--add">
        <button
          className="button button--small modal__button"
          onClick={() => {
            history.push(APPRoute.ShopCart);
            getScrollPage();
          }}
        >
           Перейти в корзину
        </button>
        <button
          className="button button--black-border button--small modal__button modal__button--right"
          onClick={() => onClose()}
        >
          Продолжить покупки
        </button>
      </div>
      <button
        className="modal__close-btn button-cross"
        type="button"
        aria-label="Закрыть"
        onClick={() => onClose()}
      >
        <span className="button-cross__icon"></span>
        <span className="modal__close-btn-interactive-area"></span>
      </button>
    </>
  );
}

export default AddSuccess;
