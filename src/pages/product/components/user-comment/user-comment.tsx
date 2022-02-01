import Rating from '../../../../components/rating/rating';
import { RatingClass } from '../../../../const';
import { Comment } from '../../../../types/guitar';

type UserCommentProps = {
  currentComment: Comment,
}

function UserComment({currentComment}: UserCommentProps): JSX.Element {
  const {advantage, comment, disadvantage, userName, rating} = currentComment;
  return (
    <div className="review">
      <div className="review__wrapper">
        <h4 className="review__title review__title--author title title--lesser">{userName}</h4><span className="review__date">12 декабря</span>
      </div>
      <Rating
        rating={rating}
        className={RatingClass.Comment}
        size={16}
      />
      <h4 className="review__title title title--lesser">Достоинства:</h4>
      <p className="review__value">{advantage}</p>
      <h4 className="review__title title title--lesser">Недостатки:</h4>
      <p className="review__value">{disadvantage}</p>
      <h4 className="review__title title title--lesser">Комментарий:</h4>
      <p className="review__value">{comment}</p>
    </div>
  );
}

export default UserComment;
