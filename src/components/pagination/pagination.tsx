import cn from 'classnames';
import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { APPRoute } from '../../const';
import { setCurrentPage } from '../../store/action';
import { getCurrentPage } from '../../store/pagination/selectors';
import { getTotalGuitars } from '../../store/products/selectors';

const ButtonText = {
  Prev: 'Назад',
  Next: 'Далее',
} as const;
const LIMIT_ON_PAGE = 9;
const FIRST_PAGE = 1;
const PAGE_STEP = 1;

function Pagination(): JSX.Element {
  const dispatch = useDispatch();
  const totalGuitars = useSelector(getTotalGuitars);
  const currentPage = useSelector(getCurrentPage);

  const totalPages = Math.ceil(totalGuitars / LIMIT_ON_PAGE);
  const pageNumber = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumber.push(i);
  }

  const handleButtonClick = ({target} : MouseEvent<HTMLAnchorElement>) => {
    if (target instanceof HTMLElement) {
      const {dataset} = target;

      if (dataset.name === ButtonText.Next) {
        dispatch(setCurrentPage(currentPage + PAGE_STEP));
      }

      if (dataset.name === ButtonText.Prev) {
        dispatch(setCurrentPage(currentPage - PAGE_STEP));
      }
    }
  };

  return (
    <div className="pagination page-content__pagination">
      <ul className="pagination__list">
        {currentPage > FIRST_PAGE && (
          <li
            className="pagination__page pagination__page--prev"
            id="prev"
          >
            <Link
              data-name={ButtonText.Prev}
              className="link pagination__page-link"
              to={APPRoute.Catalog}
              onClick={handleButtonClick}
            >{ButtonText.Prev}
            </Link>
          </li>
        )}

        {pageNumber.slice(currentPage - 1, currentPage + 2).map((number) => {
          const liClasses = cn ('pagination__page', {
            'pagination__page--active' :  currentPage === number,
          });

          return (
            <li
              className={liClasses}
              key={number}
            >
              <Link
                className="link pagination__page-link"
                to={APPRoute.Catalog}
                onClick={() => dispatch(setCurrentPage(number))}
              >
                {number}
              </Link>
            </li>
          );
        })}

        {currentPage !== totalPages && (
          <li
            className="pagination__page pagination__page--next"
            id="next"
          >
            <Link
              data-name={ButtonText.Next}
              onClick={handleButtonClick}
              className="link pagination__page-link"
              to={APPRoute.Catalog}
            >
              {ButtonText.Next}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Pagination;
