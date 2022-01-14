import { useSelector } from 'react-redux';
import { getTotalGuitars } from '../../store/products/selectors';

const LIMIT_ON_PAGE = 9;

function Pagination(): JSX.Element {
  const totalGuitars = useSelector(getTotalGuitars);

  const totalPages = Math.ceil(totalGuitars / LIMIT_ON_PAGE);
  return (
    <div className="pagination page-content__pagination">
      <ul className="pagination__list">
        <li className="pagination__page pagination__page--active">
          <a className="link pagination__page-link" href="1">1</a>
        </li>
        <li className="pagination__page">
          <a className="link pagination__page-link" href="2">2</a>
        </li>
        <li className="pagination__page">
          <a className="link pagination__page-link" href="3">3</a>
        </li>
        <li className="pagination__page pagination__page--next" id="next">
          <a className="link pagination__page-link" href="2">Далее</a>
        </li>
      </ul>
    </div>
  );
}
// function Pagination(): JSX.Element {
//   return (
//     <div className="pagination page-content__pagination">
//       <ul className="pagination__list">
//         <li className="pagination__page pagination__page--active">
//           <a className="link pagination__page-link" href="1">1</a>
//         </li>
//         <li className="pagination__page">
//           <a className="link pagination__page-link" href="2">2</a>
//         </li>
//         <li className="pagination__page">
//           <a className="link pagination__page-link" href="3">3</a>
//         </li>
//         <li className="pagination__page pagination__page--next" id="next">
//           <a className="link pagination__page-link" href="2">Далее</a>
//         </li>
//       </ul>
//     </div>
//   );
// }

export default Pagination;
