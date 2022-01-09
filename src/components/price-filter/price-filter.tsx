import { useState, useMemo, ChangeEvent, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getGuitars } from '../../store/products/selectors';
import { PriceType } from '../../const';
import { changePrice } from '../../store/action';

type FieldProps = {
  placeholder: string,
  value: string | null
}

type PriceState = {
  [key: string]: FieldProps
}

function PriceFilter(): JSX.Element {
  const dispatch = useDispatch();
  const guitars = useSelector(getGuitars, shallowEqual);
  const prices = useMemo(() => guitars.map((guitar) => guitar.price), [guitars]);

  const [localPriceState, setLocalPriceState] = useState<PriceState>({
    minPrice: {
      placeholder: '0',
      value: '',
    },
    maxPrice: {
      placeholder: '0',
      value: '',
    },
  });

  useEffect(() => {
    if (prices.length) {
      setLocalPriceState({
        ...localPriceState,
        minPrice: {
          ...localPriceState.minPrice,
          placeholder: Math.min(...prices).toString(),
        },
        maxPrice: {
          ...localPriceState.maxPrice,
          placeholder: Math.max(...prices).toString(),
        },
      });
    }
  }, [prices]);

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
      correctedPrice = localPriceState.minPrice.placeholder;
    }

    if (Number(value) > Number(localPriceState.maxPrice.placeholder) && name === 'maxPrice') {
      correctedPrice = localPriceState.maxPrice.placeholder;
    }

    if (Number(value) < Number(localPriceState.minPrice.placeholder) && name === 'maxPrice') {
      correctedPrice = localPriceState.maxPrice.placeholder;
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
              placeholder={localPriceState[name].placeholder}
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
