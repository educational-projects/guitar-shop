import { useDispatch } from 'react-redux';
import { GuitarTypeInRussian } from '../../../../const';
import { removeProductCart } from '../../../../store/action';
import { Guitar } from '../../../../types/guitar';
import { getFormatPrice } from '../../../../utils/utils';

type ProductProps = {
  guitar: Guitar,
}

function Product({guitar}: ProductProps): JSX.Element {
  const dispatch = useDispatch();
  const priceFormatted = getFormatPrice(guitar.price.toString());

  return (
    <div className="cart-item">
      <button
        className="cart-item__close-button button-cross"
        type="button"
        aria-label="Удалить"
        onClick={() => dispatch(removeProductCart(guitar.id))}
      >
        <span className="button-cross__icon"></span>
        <span className="cart-item__close-button-interactive-area"></span>
      </button>
      <div className="cart-item__image">
        <img
          src={guitar.previewImg}
          width="55" height="130"
          alt={`${GuitarTypeInRussian[guitar.type]} ${guitar.name}`}
        />
      </div>
      <div className="product-info cart-item__info">
        <p className="product-info__title">{guitar.name}</p>
        <p className="product-info__info">Артикул: {guitar.vendorCode}</p>
        <p className="product-info__info">{`${GuitarTypeInRussian[guitar.type]}, ${guitar.stringCount} струнная`}</p>
      </div>
      <div className="cart-item__price">{priceFormatted} ₽</div>
      <div className="quantity cart-item__quantity">
        <button className="quantity__button" aria-label="Уменьшить количество">
          <svg width="8" height="8" aria-hidden="true">
            <use xlinkHref="#icon-minus"></use>
          </svg>
        </button>
        <input className="quantity__input" type="number" placeholder="1" id="2-count" name="2-count" max="99" />
        <button className="quantity__button" aria-label="Увеличить количество">
          <svg width="8" height="8" aria-hidden="true">
            <use xlinkHref="#icon-plus"></use>
          </svg>
        </button>
      </div>
      <div className="cart-item__price-total">17 500 ₽</div>
    </div>
  );
}

export default Product;
