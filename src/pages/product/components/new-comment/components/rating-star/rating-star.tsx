import { LegacyRef, forwardRef} from 'react';
import { RatingType } from '../../../../const';

type RatingStarProps = {
  number: string;
}

function RatingStar({number, ...props}:RatingStarProps, ref: LegacyRef<HTMLInputElement> | undefined): JSX.Element {
  return (
    <>
      <input
        ref={ref}
        className="visually-hidden"
        type="radio"
        id={`star-${number}`}
        value={number}
        data-testid={number}
        {...props}
      />
      <label className="rate__label" htmlFor={`star-${number}`} title={RatingType[number]}></label>
    </>
  );
}

export default forwardRef(RatingStar);
