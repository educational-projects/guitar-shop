import { useSelector } from 'react-redux';
import Rating from '../../../../components/rating/rating';
import { RatingClass } from '../../../../const';
import { getGuitar } from '../../../../store/products/selectors';
import { GuitarTypeInRussian } from '../../const';
import Price from '../price/price';

function ProductInfo(): JSX.Element | null {
  const guitar = useSelector(getGuitar);

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
          <a className="button button--medium tabs__button" href="#characteristics">Характеристики</a>
          <a className="button button--black-border button--medium tabs__button" href="#description">Описание</a>
          <div className="tabs__content" id="characteristics">
            <table className="tabs__table">
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
            <p className="tabs__product-description hidden">{guitar.description}</p>
          </div>
        </div>
      </div>
      <Price price={guitar.price}/>
    </div>
  );
}

export default ProductInfo;
