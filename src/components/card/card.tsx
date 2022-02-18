import { MouseEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { APPRoute, RatingClass } from '../../const';
import AddSuccess from '../add-success/add-success';
import AddToCart from '../add-to-cart/add-to-cart';
import { getCurrentProduct } from '../../store/cart/selectors';
import { Guitar } from '../../types/guitar';
import ButtonCart from '../button-cart/button-cart';
import ModalWrapper from '../modal/components/modal-wrapper/modal-wrapper';
import Modal from '../modal/modal';
import Rating from '../rating/rating';

type CardProps = {
  guitar: Guitar
}

function Card({guitar}: CardProps): JSX.Element {
  const [modalOpen, setModalOpen] = useState(false);
  const [productAddStatus, setProductAddStatus] = useState(false);
  const {previewImg, name, price, id} = guitar;
  const currentProduct = useSelector(getCurrentProduct);

  const addedProductIndex = currentProduct.findIndex((product) => product.id === guitar.id);

  const handleButtonCartClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    setModalOpen(true);
  };

  return (
    <>
      <div className="product-card">
        <img src={`/${previewImg}`} width="75" height="190" alt={name} />
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
          {
            addedProductIndex > -1
              ?
              <ButtonCart/>
              :
              (
                <Link
                  className="button button--red button--mini button--add-to-cart"
                  to='#'
                  onClick={handleButtonCartClick}
                >Купить
                </Link>
              )
          }
        </div>
      </div>
      {modalOpen && !productAddStatus && (
        <Modal>
          <ModalWrapper onClose={() => setModalOpen(false)}>
            <AddToCart
              guitar={guitar}
              onClose={() => setModalOpen(false)}
              onAdd={() => setProductAddStatus(true)}
            />
          </ModalWrapper>
        </Modal>
      )}
      {modalOpen && productAddStatus && (
        <Modal>
          <ModalWrapper
            className='modal--success'
            onClose={() => setModalOpen(false)}
          >
            <AddSuccess
              onClose={() => setModalOpen(false)}
            />
          </ModalWrapper>
        </Modal>
      )}
    </>
  );
}

export default Card;
