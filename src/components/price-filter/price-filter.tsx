import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PriceType } from '../../const';
import { changePrice } from '../../store/action';
import { fetchPlaceholdersPriceAction } from '../../store/api-action';
import { getPlaceholderPriceMax, getPlaceholderPriceMin } from '../../store/filter/selectors';

type FieldProps = {
  placeholder: number | string | undefined,
  value: string | null | undefined,
}

type PriceState = {
  [key: string]: FieldProps
}

function PriceFilter(): JSX.Element {
  const dispatch = useDispatch();
  const placeholderMin = useSelector(getPlaceholderPriceMin);
  const placeholderMax = useSelector(getPlaceholderPriceMax);

  const [localPriceState, setLocalPriceState] = useState<PriceState>({
    minPrice: {
      placeholder: placeholderMin,
      value: '',
    },
    maxPrice: {
      placeholder: placeholderMax,
      value: '',
    },
  });

  useEffect(() => {
    const query = {
      _sort: 'price',
      _order: 'ask',
    };
    dispatch(fetchPlaceholdersPriceAction(query));
  }, [dispatch]);

  useEffect(() => {
    if (placeholderMin && placeholderMax) {
      setLocalPriceState({
        ...localPriceState,
        minPrice: {
          ...localPriceState.minPrice,
          placeholder: placeholderMin,
        },
        maxPrice: {
          ...localPriceState.maxPrice,
          placeholder: placeholderMax,
        },
      });
    }
  }, [placeholderMax, placeholderMin]);

  const handleChangePrice = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;

    setLocalPriceState({
      ...localPriceState,
      [name]: {
        ...localPriceState[name],
        value: value,
      },
    });
  };

  const handleBlurPrice = ({target}: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    let correctedPrice: string | null = value;

    if (Number(value) < Number(localPriceState.minPrice.placeholder) && name === 'minPrice') {
      correctedPrice = `${localPriceState.minPrice.placeholder}`;
    }

    if (Number(value) > Number(localPriceState.maxPrice.placeholder) && name === 'maxPrice') {
      correctedPrice = `${localPriceState.maxPrice.placeholder}`;
    }

    if (Number(value) < Number(localPriceState.minPrice.placeholder) && name === 'maxPrice') {
      correctedPrice = `${localPriceState.maxPrice.placeholder}`;
    }

    if (value === '0' || !value.length) {
      correctedPrice = null;
    }

    setLocalPriceState({
      ...localPriceState,
      [name]: {
        ...localPriceState[name],
        value: correctedPrice,
      },
    });

    dispatch(changePrice(name, correctedPrice));
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        {Object.entries(PriceType).map(([range, {label, name}]) => (
          <div className="form-input" key={range}>
            <label className="visually-hidden">{label}</label>
            <input
              type="number"
              placeholder={`${localPriceState[name].placeholder}`}
              id={`price${range}`}
              name={name}
              onChange={handleChangePrice}
              onBlur={handleBlurPrice}
              value={`${localPriceState[name].value}`}
            />
          </div>
        ))}
      </div>
    </fieldset>
  );
}

export default PriceFilter;
