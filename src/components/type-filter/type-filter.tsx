import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GuitarType } from '../../const';
import { changeGuitarType } from '../../store/action';
import { getGuitarType } from '../../store/filter/selectors';

function TypeFilter(): JSX.Element {
  const dispatch = useDispatch();
  const guitarType = useSelector(getGuitarType);

  const changeInputGuitarType = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name} = target;
    const selectedGuitarTypes = [...guitarType];
    const index = selectedGuitarTypes.findIndex((type) => name === type);

    index === -1 ? selectedGuitarTypes.push(name) : selectedGuitarTypes.splice(index, 1);

    dispatch(changeGuitarType(selectedGuitarTypes));
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
