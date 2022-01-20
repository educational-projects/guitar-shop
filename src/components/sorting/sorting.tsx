import cn from 'classnames';
import { useHistory, useLocation } from 'react-router-dom';
import { APIQuery, SortOrder, SortType } from '../../const';

function Sorting(): JSX.Element {
  const { search, pathname } = useLocation();
  const history = useHistory();

  const urlParams = new URLSearchParams(search);

  const sortType = urlParams.get(APIQuery.SortType);
  const sortOrder = urlParams.get(APIQuery.SortOrder);

  const handleChangeSortOrder = (type: string) => {
    if (!sortType) {
      urlParams.set(APIQuery.SortType, 'price');
    }

    urlParams.set(APIQuery.SortOrder, type);

    history.push({
      pathname: pathname,
      search: urlParams.toString(),
    });
  };

  const handleChangeSortType = (type: string) => {
    urlParams.set(APIQuery.SortType, type);
    history.push({
      pathname: pathname,
      search: urlParams.toString(),
    });
  };

  return (
    <div className="catalog-sort">
      <h2 className="catalog-sort__title">Сортировать:</h2>
      <div className="catalog-sort__type">
        {Object.values(SortType).map(( { type, label } ) => {
          const buttonClass = cn('catalog-sort__type-button', {
            'catalog-sort__type-button--active' : sortType === type,
          });

          const tabIndex = sortType === type ? -1 : undefined;

          return (
            <button
              key={type}
              className={buttonClass}
              aria-label={label}
              tabIndex={tabIndex}
              onClick={() => handleChangeSortType(type)}
            >
              {label}
            </button>
          );
        }) }
      </div>
      <div className="catalog-sort__order">
        {Object.entries(SortOrder).map(([direction, {type, label}]) => {
          const buttonClass = cn(`catalog-sort__order-button ${`catalog-sort__order-button--${direction.toLowerCase()}`}`, {
            'catalog-sort__order-button--active' : sortOrder === type,
          });

          const tabIndex = sortOrder === type ? -1 : undefined;

          return (
            <button
              key={type}
              className={buttonClass}
              aria-label={label}
              tabIndex={tabIndex}
              onClick={() => handleChangeSortOrder(type)}
            />
          );
        },
        )}
      </div>
    </div>
  );
}

export default Sorting;
