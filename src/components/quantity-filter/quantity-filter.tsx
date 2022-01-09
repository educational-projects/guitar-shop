import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NumberOfStringType } from '../../const';
import { changeNumberOfString } from '../../store/action';
import { getNumberOfString } from '../../store/filter/selectors';

function QuantityFilter(): JSX.Element {
  const dispatch = useDispatch();
  const numberOfString = useSelector(getNumberOfString);

  const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name} = target;
    const selectedNumberOfString = [...numberOfString];
    const index = selectedNumberOfString.findIndex((stringType) => stringType === name);

    index === -1 ? selectedNumberOfString.push(name) : selectedNumberOfString.splice(index, 1);

    dispatch(changeNumberOfString(selectedNumberOfString));
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Количество струн</legend>
      {Object.values(NumberOfStringType).map(({label}) => {
        const isChecked = numberOfString.includes(`${label}-strings`);

        return (
          <div
            key={label}
            className="form-checkbox catalog-filter__block-item"
          >
            <input
              className="visually-hidden"
              type="checkbox" id={`${label}-strings`}
              name={`${label}-strings`}
              onChange={handleInputChange}
              checked={isChecked}
            />
            <label htmlFor={`${label}-strings`}>{label}</label>
          </div>
        );
      })}
    </fieldset>
  );
}

export default QuantityFilter;
