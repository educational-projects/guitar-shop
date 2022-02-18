import { useDispatch } from 'react-redux';
import { GuitarTypeInRussian } from '../../../../const';
import { removeProductCart } from '../../../../store/action';
import { Guitar } from '../../../../types/guitar';
import { getFormatPrice } from '../../../../utils/utils';

type DeleteProductProps = {
  guitar: Guitar;
  onClose: () => void;
}

function DeleteProduct({guitar, onClose}: DeleteProductProps): JSX.Element {
  const dispatch = useDispatch();
  const priceFormatted = getFormatPrice(guitar.price.toString());

  return (
    <>
      <h2 className="modal__header title title--medium title--red">Удалить этот товар?</h2>
      <div className="modal__info">
        <img
          className="modal__img"
          src={guitar.previewImg}
          width="67" height="137"
          alt={guitar.name}
        />
        <div className="modal__info-wrapper">
          <h3 className="modal__product-name title title--little title--uppercase">Гитара {guitar.name}</h3>
          <p className="modal__product-params modal__product-params--margin-11">Артикул: {guitar.vendorCode}</p>
          <p className="modal__product-params">{`${GuitarTypeInRussian[guitar.type]}, ${guitar.stringCount} струнная`}</p>
          <p className="modal__price-wrapper">
            <span className="modal__price">Цена:</span>
            <span className="modal__price">{priceFormatted} ₽</span>
          </p>
        </div>
      </div>
      <div className="modal__button-container">
        <button
          className="button button--small modal__button"
          onClick={() => dispatch(removeProductCart(guitar.id))}
        >
           Удалить товар
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

export default DeleteProduct;
