type RatingProps = {
  rating: number,
  className: string,
  size: number,
  count?: number,
}
const RATING_LENGTH = 5;

function Rating({rating, className, size, count}: RatingProps): JSX.Element {

  return (
    <div className={`rate ${className}`} aria-hidden="true">
      <span className="visually-hidden">Рейтинг:</span>
      {Array.from({length: Math.round(rating)}, (_, i) => (
        <svg key={`rating-${i}`} width={size} height={size} aria-hidden="true">
          <use xlinkHref="#icon-full-star"></use>
        </svg>
      ))}
      {Array.from({length: RATING_LENGTH - Math.round(rating)}, (_, i) => (
        <svg key={`rating-${i}-noFill`} width={size} height={size} aria-hidden="true">
          <use xlinkHref="#icon-star"></use>
        </svg>
      ))}
      {count && (
        <>
          <span className="rate__count">{count}</span>
          <span className="rate__message"></span>
        </>
      )}
    </div>
  );
}

export default Rating;
