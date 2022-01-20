import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { APIQuery, GuitarType } from '../../const';
import { setCurrentPage } from '../../store/action';

function TypeFilter(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const { search, pathname } = useLocation();
  const urlParams = new URLSearchParams(search);

  const guitarType = urlParams.getAll(APIQuery.Type);

  const changeInputGuitarType = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name} = target;
    const selectedGuitarTypes = [...guitarType];
    const index = selectedGuitarTypes.findIndex((type) => name === type);

    index === -1 ? selectedGuitarTypes.push(name) : selectedGuitarTypes.splice(index, 1);

    dispatch(setCurrentPage(1));

    urlParams.delete(APIQuery.Type);

    selectedGuitarTypes.forEach((item) => urlParams.append(APIQuery.Type, item));
    history.push({
      pathname: pathname,
      search: urlParams.toString(),
    });
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Тип гитар</legend>
      {Object.values(GuitarType).map(({label, name}) => {
        const isChecked = guitarType.includes(name);

        return (
          <div
            key={name}
            className="form-checkbox catalog-filter__block-item"
          >
            <input
              className="visually-hidden"
              type="checkbox"
              id={name} name={name}
              checked={isChecked}
              onChange={changeInputGuitarType}
            />
            <label htmlFor={name}>{label}</label>
          </div>
        );
      })}
    </fieldset>
  );
}

export default TypeFilter;
