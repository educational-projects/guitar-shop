import PriceFilter from '../price-filter/price-filter';
import QuantityFilter from '../quantity-filter/quantity-filter';
import TypeFilter from '../type-filter/type-filter';

function Filter(): JSX.Element {
  return (
    <form className="catalog-filter">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
      <PriceFilter/>
      <TypeFilter/>
      <QuantityFilter/>
    </form>
  );
}

export default Filter;
