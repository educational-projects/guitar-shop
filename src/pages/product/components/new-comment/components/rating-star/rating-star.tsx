import { ChangeEvent } from 'react';
import { RatingType } from '../../../../const';

type RatingStarProps = {
  number: string;
  value: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function RatingStar({number, value, onChange}:RatingStarProps): JSX.Element {
  return (
    <>
      <input
        className="visually-hidden"
        type="radio"
        id={`star-${number}`}
        name="rating"
        value={number}
        onChange={onChange}
        checked={number === value}
      />
      <label className="rate__label" htmlFor={`star-${number}`} title={RatingType[number]}></label>
    </>
  );
}

export default RatingStar;
