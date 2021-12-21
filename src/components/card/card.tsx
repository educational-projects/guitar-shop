import { nanoid } from '@reduxjs/toolkit';
import { Guitar } from '../../types/guitar';

type CardProps = {
  guitar: Guitar
}

const RATING_LENGTH = 5;

function Card({guitar}: CardProps): JSX.Element {
  const {previewImg, name, price, rating, comments} = guitar;

  return (
    <div className="product-card">
      <img src={`img/content/${previewImg.slice(4)}`} width="75" height="190" alt={name} />
      <div className="product-card__info">
        <div className="rate product-card__rate" aria-hidden="true">
          <span className="visually-hidden">Рейтинг:</span>
          {new Array(Math.round(rating)).fill(null).map(() => (
            <svg key={nanoid()} width="12" height="11" aria-hidden="true">
              <use xlinkHref="#icon-full-star"></use>
            </svg>
          ))}
          {new Array(RATING_LENGTH - Math.round(rating)).fill(null).map(() => (
            <svg key={nanoid()} width="12" height="11" aria-hidden="true">
              <use xlinkHref="#icon-star"></use>
            </svg>
          ))}
          <span className="rate__count">{comments.length}</span>
          <span className="rate__message"></span>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">
            Цена:
          </span>
          {`${price} ₽`}
        </p>
      </div>
      <div className="product-card__buttons">
        <a className="button button--mini" href="/">Подробнее</a>
        <a className="button button--red button--mini button--add-to-cart" href="/">Купить</a>
      </div>
    </div>
  );
}

export default Card;
