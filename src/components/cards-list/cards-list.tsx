import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGuitarsAction } from '../../store/api-action';
import { getGuitars, getGuitarsLoading } from '../../store/products/selectors';
import Card from '../card/card';
import Loader from '../loader/loader';
import { useHistory, useLocation } from 'react-router-dom';
import { APIQuery, APPRoute } from '../../const';
import { getCurrentPage } from '../../store/pagination/selectors';
import EmptyList from './components/empty-list/empty-list';

const MAX_LIMIT = '9';

function CardsList(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const guitars = useSelector(getGuitars);
  const guitarsLoading = useSelector(getGuitarsLoading);
  const currentPage = useSelector(getCurrentPage);
  const { search } = useLocation();
  const urlParams = useMemo(() => new URLSearchParams(search), [search]);

  // Запрос на получение товаров
  useEffect(() => {
    urlParams.set(APIQuery.Page, currentPage.toString());
    urlParams.set(APIQuery.Limit, MAX_LIMIT);
    history.replace({
      pathname: APPRoute.Catalog,
      search: urlParams.toString(),
    });

    dispatch(fetchGuitarsAction(urlParams.toString()));
  }, [currentPage, dispatch, history, urlParams]);

  if (guitarsLoading) {
    return <Loader/>;
  }

  return (
    guitars.length ?
      <div className="cards catalog__cards">
        {
          guitars.map((guitar) => (
            <Card
              guitar={guitar}
              key={guitar.id}
            />
          ))
        }
      </div>
      :
      <EmptyList/>

  );
}

export default CardsList;
