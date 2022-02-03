import { MouseEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Rating from '../../../../components/rating/rating';
import { RatingClass } from '../../../../const';
import { getGuitar } from '../../../../store/products/selectors';
import { DEFAULT_TAB, GuitarTypeInRussian, TabType } from '../../const';
import Price from '../price/price';

function ProductInfo(): JSX.Element | null {
  const guitar = useSelector(getGuitar);
  const [activeTab, setActiveTab] = useState<string>(DEFAULT_TAB);

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
  const characteristicTableClass = cn ('tabs__table', {
    'hidden' : activeTab !== TabType.Characteristic,
  });
  const descriptionTextClass = cn ('tabs__product-description', {
    'hidden' : activeTab !== TabType.Description,
  });


  if (!guitar) {
    return null;
  }

  return (
    <div className="product-container">
      <img className="product-container__img" src="../img/content/guitar-2.jpg" width="90" height="235" alt=""/>
      <div className="product-container__info-wrapper">
        <h2 className="product-container__title title title--big title--uppercase">{guitar.name}</h2>
        <Rating
          rating={guitar.rating}
          className={RatingClass.Product}
          size={14}
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
            <table className={characteristicTableClass}>
              <tbody>
                <tr className="tabs__table-row">
                  <td className="tabs__title">Артикул:</td>
                  <td className="tabs__value">{guitar.vendorCode}</td>
                </tr>
                <tr className="tabs__table-row">
                  <td className="tabs__title">Тип:</td>
                  <td className="tabs__value">{GuitarTypeInRussian[guitar.type]}</td>
                </tr>
                <tr className="tabs__table-row">
                  <td className="tabs__title">Количество струн:</td>
                  <td className="tabs__value">{`${guitar.stringCount} струнная`}</td>
                </tr>
              </tbody>
            </table>
            <p className={descriptionTextClass}>{guitar.description}</p>
          </div>
        </div>
      </div>
      <Price price={guitar.price}/>
    </div>
  );
}

export default ProductInfo;
