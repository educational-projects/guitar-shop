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

function CardsList(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const guitars = useSelector(getGuitars);
  const guitarsLoading = useSelector(getGuitarsLoading);
  const filter = useSelector(getFilter);
  const parsed = queryString.parse(history.location.search.substring(1));

  const actualFilter = (() => ({
    sortType : filter.sortType || parsed._sort as string,
    sortOrder: filter.sortOrder || parsed._order as string,
    minPrice: filter.minPrice || parsed.price_gte as string,
    maxPrice: filter.maxPrice || parsed.price_lte as string,
  }))();


  const queryParams: Record<string, string> = (() => {
    const querys: Record<string, string> = {};

    querys['_embed'] = 'comments';

    if (actualFilter.sortType) {
      querys['_sort'] = actualFilter.sortType;
    }

    if (actualFilter.sortOrder) {
      querys['_order'] = actualFilter.sortOrder;
    }

    if (actualFilter.minPrice) {
      querys['price_gte'] = actualFilter.minPrice;
    }

    if (actualFilter.maxPrice) {
      querys['price_lte'] = actualFilter.maxPrice;
    }

    return querys;
  })();


  useEffect(() => {
    history.push({
      pathname: APPRoute.Main,
      search: queryString.stringify(queryParams),
    });

    dispatch(fetchGuitarsAction(queryParams, actualFilter));
  }, [actualFilter.sortType, actualFilter.sortOrder, actualFilter.minPrice, actualFilter.maxPrice, dispatch]);


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
