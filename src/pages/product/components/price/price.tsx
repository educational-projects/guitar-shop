import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { getFormatPrice } from '../../../../utils/utils';

type PriceProps = {
  price: number,
  onClick: () => void,
}

function Price({price, onClick}: PriceProps): JSX.Element | null {
  const formattedPrice = getFormatPrice(price.toString());

  const handleLinkClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    onClick();
  };

  return (
    <div className="product-container__price-wrapper">
      <p className="product-container__price-info product-container__price-info--title">Цена:</p>
      <p className="product-container__price-info product-container__price-info--value">{`${formattedPrice} ₽`}</p>
      <Link
        className="button button--red button--big product-container__button"
        to={'/'}
        onClick={handleLinkClick}
      >
        Добавить в корзину
      </Link>
    </div>
  );
}

export default Price;
