import { Link } from 'react-router-dom';
import { APPRoute, RatingClass } from '../../const';
import { Guitar } from '../../types/guitar';
import Rating from '../rating/rating';

type CardProps = {
  guitar: Guitar
}

function Card({guitar}: CardProps): JSX.Element {
  const {previewImg, name, price, id} = guitar;

  return (
    <div className="product-card">
      <img src={`../img/content/${previewImg.slice(4)}`} width="75" height="190" alt={name} />
      <div className="product-card__info">
        <Rating
          rating={guitar.rating}
          count={guitar.comments.length}
          className={RatingClass.Catalog}
          size={12}
        />
        <p className="product-card__title">{name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">
            Цена:
          </span>
          {`${price} ₽`}
        </p>
      </div>
      <div className="product-card__buttons">
        <Link className="button button--mini" to={`${APPRoute.Product}/${id}`}>Подробнее</Link>
        <a className="button button--red button--mini button--add-to-cart" href="/">Купить</a>
      </div>
    </div>
  );
}

export default Card;
