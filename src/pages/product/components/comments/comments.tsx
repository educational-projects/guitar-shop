import { MouseEvent, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setModalStatus } from '../../../../store/action';
import { Comment } from '../../../../types/guitar';
import { getScrollPage } from '../../../../utils/utils';
import { getSortedUpDays } from '../../utils';
import UserComment from '../user-comment/user-comment';

type CommentsProps = {
  comments: Comment[],
}

const countStep = 3;

function Comments({comments}: CommentsProps): JSX.Element {
  const dispatch = useDispatch();

  const [commentCount, setCommentCount] = useState<number>(3);

  const sortedComments = useMemo(() => getSortedUpDays(comments), [comments]).slice(0, commentCount);

  const handleGoTopClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    getScrollPage(0);
  };

  const handleButtonClick = () => {
    setCommentCount((prevState) => prevState + countStep);
  };

  const handleNewCommentClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(setModalStatus(true));
  };

  return (
    <section className="reviews">
      <h3 className="reviews__title title title--bigger">Отзывы</h3>
      <Link
        className="button button--red-border button--big reviews__sumbit-button"
        to="#"
        onClick={handleNewCommentClick}
      >Оставить отзыв
      </Link>
      {sortedComments.map((comment) => (
        <UserComment
          key={comment.id}
          currentComment={comment}
        />
      ))}
      {comments.length > 3 && commentCount < comments.length && (
        <button
          className="button button--medium reviews__more-button"
          onClick={handleButtonClick}
        >Показать еще отзывы
        </button>
      )}
      <Link
        className="button button--up button--red-border button--big reviews__up-button"
        to="#"
        style={{zIndex: 10}}
        onClick={handleGoTopClick}
      >Наверх
      </Link>
    </section>
  );
}

export default Comments;
