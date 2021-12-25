import {useEffect} from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { SortOrder, SortType } from '../../const';
import { changeSortOrder, changeSortType } from '../../store/action';
import { fetchGuitarsAction } from '../../store/api-action';
import { getSortOrder, getSortType } from '../../store/app/selectors';

function Sorting(): JSX.Element {
  const dispatch = useDispatch();
  const sortType = useSelector(getSortType);
  const sortOrder = useSelector(getSortOrder);

  useEffect(() => {
    dispatch(fetchGuitarsAction({
      _sort: sortType,
      _order: sortOrder,
    }));
  }, [sortType, sortOrder, dispatch]);

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
              onClick={() => dispatch(changeSortType(type)) }
            >
              {label}
            </button>
          );
        }) }
      </div>
      <div className="catalog-sort__order">
        {Object.entries(SortOrder).map(([direction, {type, label}]) => {
          const buttonClass = cn(`catalog-sort__order-button ${`catalog-sort__order-button--${direction.toLowerCase()}`}`, {
            'catalog-sort__order-button--active' : sortOrder === label,
          });

          const tabIndex = sortOrder === label ? -1 : undefined;

          return (
            <button
              key={type}
              className={buttonClass}
              aria-label={label}
              tabIndex={tabIndex}
              onClick={() => {
                dispatch(changeSortOrder(label));

                if (!sortType) {
                  dispatch(changeSortType('price'));
                }
              }}
            />
          );
        },
        )}
      </div>
    </div>
  );
}

export default Sorting;
