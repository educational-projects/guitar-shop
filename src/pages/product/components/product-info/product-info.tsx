import { MouseEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Rating from '../../../../components/rating/rating';
import { RatingClass } from '../../../../const';
import { getGuitar } from '../../../../store/products/selectors';
import { DEFAULT_TAB, TabType } from '../../const';
import Price from '../price/price';
import Characteristic from './components/characteristic/characteristic';
import ModalWrapper from '../../../../components/modal/components/modal-wrapper/modal-wrapper';
import Modal from '../../../../components/modal/modal';
import AddToCart from '../../../../components/add-to-cart/add-to-cart';
import AddSuccess from '../../../../components/add-success/add-success';

function ProductInfo(): JSX.Element | null {
  const guitar = useSelector(getGuitar);
  const [activeTab, setActiveTab] = useState<string>(DEFAULT_TAB);
  const [modalOpen, setModalOpen] = useState(false);
  const [productAddStatus, setProductAddStatus] = useState(false);

  const handleChangeTabs = (evt: MouseEvent<HTMLAnchorElement>, tab: string) => {
    evt.preventDefault();
    setActiveTab(tab);
  };

  const characteristicLinkClass = cn ('button button--medium tabs__button', {
    'button--black-border' : activeTab !== TabType.Characteristic,
  });
  const descriptionLinkClass = cn ('button button--medium tabs__button', {
    'button--black-border' : activeTab !== TabType.Description,
  });

  if (!guitar) {
    return null;
  }

  return (
    <>
      <div className="product-container">
        <img className="product-container__img" src={`/${guitar.previewImg}`} width="90" height="235" alt=""/>
        <div className="product-container__info-wrapper">
          <h2 className="product-container__title title title--big title--uppercase">{guitar.name}</h2>
          <Rating
            rating={guitar.rating}
            className={RatingClass.Product}
            size={14}
            count={guitar.comments.length}
          />
          <div className="tabs">
            <Link
              className={characteristicLinkClass}
              to="#"
              onClick={(evt) => handleChangeTabs(evt, TabType.Characteristic)}
            >Характеристики
            </Link>
            <Link
              className={descriptionLinkClass}
              to="#"
              onClick={(evt) => handleChangeTabs(evt, TabType.Description)}
            >Описание
            </Link>
            <div className="tabs__content" id="characteristics">
              {
                activeTab === TabType.Characteristic
                  ? <Characteristic guitar={guitar}/>
                  : <p className="tabs__product-description">{guitar.description}</p>
              }
            </div>
          </div>
        </div>
        <Price
          price={guitar.price}
          onClick={() => setModalOpen(true)}
        />
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

export default ProductInfo;
