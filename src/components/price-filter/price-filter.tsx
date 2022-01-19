import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PriceType } from '../../const';
import { changePrice, setCurrentPage } from '../../store/action';
import { fetchPlaceholdersPriceAction } from '../../store/api-action';
import { getMaxPrice, getMinPrice, getPlaceholderPriceMax, getPlaceholderPriceMin } from '../../store/filter/selectors';

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
  const minPrice = useSelector(getMinPrice);
  const maxPrice = useSelector(getMaxPrice);

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

    if (minPrice || maxPrice) {
      setLocalPriceState({
        ...localPriceState,
        minPrice: {
          ...localPriceState.minPrice,
          value: minPrice,
          placeholder: placeholderMin,
        },
        maxPrice: {
          ...localPriceState.maxPrice,
          value: maxPrice,
          placeholder: placeholderMax,
        },
      });
    }
  }, [placeholderMax, placeholderMin, minPrice, maxPrice]);

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

    dispatch(setCurrentPage(1));
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
              data-testid={name}
            />
          </div>
        ))}
      </div>
    </fieldset>
  );
}

export default PriceFilter;
