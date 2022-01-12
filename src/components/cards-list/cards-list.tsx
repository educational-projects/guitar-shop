import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGuitarsAction } from '../../store/api-action';
import { getFilter } from '../../store/filter/selectors';
import { getGuitars, getGuitarsLoading } from '../../store/products/selectors';
import * as queryString from 'querystring';
import Card from '../card/card';
import Loader from '../loader/loader';
import { useHistory } from 'react-router-dom';
import { APPRoute } from '../../const';
import { setFilter } from '../../store/action';

function CardsList(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const guitars = useSelector(getGuitars);
  const guitarsLoading = useSelector(getGuitarsLoading);
  const filter = useSelector(getFilter);
  const parsed = queryString.parse(history.location.search.substring(1));

  const actualFilter = (() => ({
    sortType : parsed._sort ? parsed._sort as string : filter.sortType,
    sortOrder: parsed._order ? parsed._order as string : filter.sortOrder,
    minPrice: parsed.price_gte ? parsed.price_gte as string : filter.minPrice,
    maxPrice: parsed.price_lte ? parsed.price_lte as string : filter.maxPrice,
    guitarType: parsed.type ? new Array(parsed.type).flat() : filter.guitarType,
    numberOfString: parsed.stringCount ? new Array(parsed.stringCount).flat() : filter.numberOfString,
  }))();

  const queryParams: Record<string, string | string[]> = (() => {
    const querys: Record<string, string | string[]> = {};

    if (filter.sortType) {
      querys['_sort'] = filter.sortType as string;
    }

    if (filter.sortOrder) {
      querys['_order'] = filter.sortOrder as string;
    }

    if (filter.minPrice) {
      querys['price_gte'] = filter.minPrice as string;
    }

    if (filter.maxPrice) {
      querys['price_lte'] = filter.maxPrice as string;
    }

    if (filter.guitarType.length) {
      querys['type'] = filter.guitarType;
    }

    if (filter.numberOfString.length) {
      querys['stringCount'] = filter.numberOfString as string[];
    }

    return querys;
  })();

  // Первоначальная установка значений FILTER на основании url параметров
  useEffect(() => {
    dispatch(setFilter(actualFilter));
  }, []);

  // Запрос на получение товаров
  useEffect(() => {
    history.push({
      pathname: APPRoute.Main,
      search: queryString.stringify(queryParams),
    });

    dispatch(fetchGuitarsAction(queryParams));
  }, [filter.guitarType, filter.maxPrice, filter.minPrice, filter.numberOfString, filter.sortOrder, filter.sortType]);

  if (guitarsLoading) {
    return <Loader/>;
  }

  return (
    <div className="cards catalog__cards">
      {guitars.map((guitar) => (
        <Card
          guitar={guitar}
          key={guitar.id}
        />
      ))}
    </div>
  );
}

export default CardsList;
