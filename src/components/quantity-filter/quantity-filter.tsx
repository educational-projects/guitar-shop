import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GuitarType, NumberOfStringType } from '../../const';
import { changeNumberOfString, setCurrentPage } from '../../store/action';
import { getGuitarType, getNumberOfString } from '../../store/filter/selectors';

const getStringsFromType = (type: string): string[] => {
  switch (type) {
    case GuitarType.Acoustic.name:
      return ['6', '7', '12'];
    case GuitarType.Electric.name:
      return ['4', '6', '7'];
    case GuitarType.Ukulele.name:
      return ['4'];
    default:
      return [];
  }
};

function QuantityFilter(): JSX.Element {
  const dispatch = useDispatch();
  const numberOfString = useSelector(getNumberOfString);
  const guitarType = useSelector(getGuitarType);

  const activeString = guitarType.map((type) => getStringsFromType(type)).flat();

  const uniqueActiveString = [...new Set(activeString)];

  const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {value} = target;
    const selectedNumberOfString = [...numberOfString];
    const index = selectedNumberOfString.findIndex((stringType) => stringType === value);

    index === -1 ? selectedNumberOfString.push(value) : selectedNumberOfString.splice(index, 1);

    dispatch(setCurrentPage(1));
    dispatch(changeNumberOfString(selectedNumberOfString));
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Количество струн</legend>
      {Object.values(NumberOfStringType).map(({label}) => {
        const isChecked = numberOfString.includes(label);
        const isDisabled = uniqueActiveString.every((item) => item !== label) && Boolean(uniqueActiveString.length);

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
              value={label}
              checked={isChecked}
              disabled={isDisabled}
              data-testid={label}
            />
            <label htmlFor={`${label}-strings`}>{label}</label>
          </div>
        );
      })}
    </fieldset>
  );
}

export default QuantityFilter;
