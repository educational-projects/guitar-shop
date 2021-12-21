import { useState, ChangeEvent } from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { getGuitars } from '../../store/products/selectors';
import { Link } from 'react-router-dom';
import { APPRoute } from '../../const';

const initialState = {
  active: false,
  value: '',
};

function SearchForm(): JSX.Element {
  const guitars = useSelector(getGuitars);
  const [searchForm, setSearchForm] = useState(initialState);

  const selectList = guitars.filter((guitar) => guitar.name.toLowerCase().includes(searchForm.value.toLowerCase()));

  const handleChangeForm = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {value} = target;

    setSearchForm((prevState) => ({
      ...prevState,
      value: value,
    }));
  };

  const handleFocusForm = () => {
    setSearchForm((prevState) => ({
      ...prevState,
      active: true,
    }));
  };

  const SearchListClasses = cn('form-search__select-list', {
    'hidden' : !searchForm.value || !searchForm.active || !selectList.length,
  });

  return (
    <div className="form-search"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setSearchForm((prevState) => ({
            ...prevState,
            active: false,
          }));
        }
      }}
    >
      <form className="form-search__form">
        <button className="form-search__submit" type="submit">
          <svg className="form-search__icon" width="14" height="15" aria-hidden="true">
            <use xlinkHref="#icon-search"></use>
          </svg><span className="visually-hidden">Начать поиск</span>
        </button>
        <input
          className="form-search__input"
          id="search" type="text"
          autoComplete="off"
          placeholder="что вы ищите?"
          onChange={handleChangeForm}
          onFocus={handleFocusForm}
        />
        <label className="visually-hidden" htmlFor="search">Поиск</label>
      </form>
      <ul className={SearchListClasses} style={{zIndex: 1}}>
        {selectList.map((guitar) => (
          <li
            className="form-search__select-item"
            key={guitar.id}
            tabIndex={-1}
          >
            <Link
              className="form-search__select-item"
              to={`${APPRoute.Product}/${guitar.id}`}
              tabIndex={0}
            >
              {guitar.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchForm;
