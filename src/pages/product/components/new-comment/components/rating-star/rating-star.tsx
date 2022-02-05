import { RatingType } from '../../../../const';

type RatingStarProps = {
  number: string
}

function RatingStar({number}:RatingStarProps): JSX.Element {
  return (
    <>
      <input className="visually-hidden" type="radio" id={`star-${number}`} name="rate" value={number}/>
      <label className="rate__label" htmlFor={`star-${number}`} title={RatingType[number]}></label>
    </>
  );
}

export default RatingStar;
