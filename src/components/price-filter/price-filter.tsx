import { useState, useEffect, useMemo, ChangeEvent } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getGuitars } from '../../store/products/selectors';
import { PriceType } from '../../const';
import { fetchGuitarsAction } from '../../store/api-action';
import useDebounce from '../../hooks/use-debounce/use-debounce';

type FieldProps = {
  placeholder: string,
  value: string
}

type PriceState = {
  [key: string]: FieldProps
}

function PriceFilter(): JSX.Element {
  const dispatch = useDispatch();
  const guitars = useSelector(getGuitars, shallowEqual);
  const prices = useMemo(() => guitars.map((guitar) => guitar.price), [guitars]);

  const [priceState, setPriceState] = useState<PriceState>({
    Min: {
      placeholder: '0',
      value: '',
    },
    Max: {
      placeholder: '0',
      value: '',
    },
  });

  const debouncedPriceSet = useDebounce<PriceState>(priceState, 1000);

  useEffect(() => {
    if (prices.length) {
      setPriceState({
        Min: {
          placeholder: Math.min(...prices).toString(),
          value: debouncedPriceSet.Min.value,
        },
        Max: {
          placeholder: Math.max(...prices).toString(),
          value: debouncedPriceSet.Max.value,
        },
      });
    }
  }, [debouncedPriceSet.Max.value, debouncedPriceSet.Min.value, prices]);

  const handleChangePrice = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;

    setPriceState({
      ...priceState,
      [name]: {
        ...priceState[name],
        value: value,
      },
    });
  };

  useEffect(() => {
    if (debouncedPriceSet.Min.value || debouncedPriceSet.Max.value) {
      dispatch(fetchGuitarsAction({
        'price_gte': debouncedPriceSet.Min.value || debouncedPriceSet.Min.placeholder,
        'price_lte': debouncedPriceSet.Max.value || debouncedPriceSet.Max.placeholder,
      }));
    }
  }, [dispatch, debouncedPriceSet.Max.placeholder, debouncedPriceSet.Max.value, debouncedPriceSet.Min.value, debouncedPriceSet.Min.placeholder]);

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        {Object.entries(PriceType).map(([range, {label}]) => (
          <div className="form-input" key={range}>
            <label className="visually-hidden">{label}</label>
            <input
              type="number"
              placeholder={priceState[range].placeholder}
              id={`price${range}`}
              name={range}
              onChange={handleChangePrice}
              value={priceState[range].value}
            />
          </div>
        ))}
      </div>
    </fieldset>
  );
}

export default PriceFilter;
