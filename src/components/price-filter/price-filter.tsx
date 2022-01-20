import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { APIQuery, PriceType } from '../../const';
import { setCurrentPage } from '../../store/action';
import { fetchPlaceholdersPriceAction } from '../../store/api-action';
import { getPlaceholderPriceMax, getPlaceholderPriceMin } from '../../store/filter/selectors';

type FieldProps = {
  placeholder: number | string | undefined,
  value: string | number,
}

type PriceState = {
  [key: string]: FieldProps
}

function PriceFilter(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const { search, pathname } = useLocation();
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

  const urlParams = new URLSearchParams(search);
  const minPrice = urlParams.get(APIQuery.MinPrice) ? Number(urlParams.get(APIQuery.MinPrice)) : '';
  const maxPrice = urlParams.get(APIQuery.MaxPrice) ? Number(urlParams.get(APIQuery.MaxPrice)) : '';

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const { name, value, dataset } = target;
    let correctedPrice: string = value;

    if (Number(value) < Number(localPriceState.minPrice.placeholder) && name === 'minPrice') {
      correctedPrice = `${localPriceState.minPrice.placeholder}`;
      urlParams.set(APIQuery.MinPrice, correctedPrice);
      history.push({
        pathname: pathname,
        search: urlParams.toString(),
      });
    }

    if (Number(value) > Number(localPriceState.maxPrice.placeholder) && name === 'maxPrice') {
      correctedPrice = `${localPriceState.maxPrice.placeholder}`;
      urlParams.set(APIQuery.MaxPrice, correctedPrice);
      history.push({
        pathname: pathname,
        search: urlParams.toString(),
      });
    }

    if (Number(value) < Number(localPriceState.minPrice.placeholder) && name === 'maxPrice') {
      correctedPrice = `${localPriceState.maxPrice.placeholder}`;
      urlParams.set(APIQuery.MaxPrice, correctedPrice);
      history.push({
        pathname: pathname,
        search: urlParams.toString(),
      });
    }

    dispatch(setCurrentPage(1));

    if (value === '0' || !value.length) {
      urlParams.delete(dataset.name ? dataset.name : '');
      history.push({
        pathname: pathname,
        search: urlParams.toString(),
      });
      return;
    }

    setLocalPriceState({
      ...localPriceState,
      [name]: {
        ...localPriceState[name],
        value: correctedPrice,
      },
    });

    urlParams.set(dataset.name ? dataset.name : '', correctedPrice? correctedPrice : '');

    history.push({
      pathname: pathname,
      search: urlParams.toString(),
    });
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        {Object.entries(PriceType).map(([range, {label, name, query}]) => (
          <div className="form-input" key={range}>
            <label className="visually-hidden">{label}</label>
            <input
              type="number"
              placeholder={`${localPriceState[name].placeholder}`}
              id={`price${range}`}
              name={name}
              onChange={handleChangePrice}
              onBlur={handleBlurPrice}
              value={localPriceState[name].value}
              // value={`${localPriceState[name].value}`}
              data-testid={name}
              data-name={query}
            />
          </div>
        ))}
      </div>
    </fieldset>
  );
}

export default PriceFilter;
