import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { SortOrder, SortType } from '../../const';
import { changeSortOrder, changeSortType } from '../../store/action';
import { getSortOrder, getSortType } from '../../store/filter/selectors';

function Sorting(): JSX.Element {
  const dispatch = useDispatch();
  const sortType = useSelector(getSortType);
  const sortOrder = useSelector(getSortOrder);

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
            'catalog-sort__order-button--active' : sortOrder === type,
          });

          const tabIndex = sortOrder === type ? -1 : undefined;

          return (
            <button
              key={type}
              className={buttonClass}
              aria-label={label}
              tabIndex={tabIndex}
              onClick={() => {
                dispatch(changeSortOrder(type));

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
