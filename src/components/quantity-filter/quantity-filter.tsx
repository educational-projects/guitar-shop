import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { APIQuery, GuitarType, NumberOfStringType } from '../../const';
import { setCurrentPage } from '../../store/action';

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
  const history = useHistory();
  const { search, pathname } = useLocation();

  const urlParams = new URLSearchParams(search);
  const guitarType = urlParams.getAll(APIQuery.Type);
  const numberOfString = urlParams.getAll(APIQuery.StringCount);

  const activeString = guitarType.map((type) => getStringsFromType(type)).flat();
  const uniqueActiveString = [...new Set(activeString)];

  const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {value} = target;
    const selectedNumberOfString = [...numberOfString];
    const index = selectedNumberOfString.findIndex((stringType) => stringType === value);

    index === -1 ? selectedNumberOfString.push(value) : selectedNumberOfString.splice(index, 1);

    dispatch(setCurrentPage(1));

    urlParams.delete(APIQuery.StringCount);

    selectedNumberOfString.forEach((item) => urlParams.append(APIQuery.StringCount, item));

    history.push({
      pathname: pathname,
      search: urlParams.toString(),
    });
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
