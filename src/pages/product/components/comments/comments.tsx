import { Link } from 'react-router-dom';
import { Comment } from '../../../../types/guitar';
import UserComment from '../user-comment/user-comment';

type CommentsProps = {
  comments: Comment[],
}

function Comments({comments}: CommentsProps): JSX.Element {
  return (
    <section className="reviews">
      <h3 className="reviews__title title title--bigger">Отзывы</h3>
      <Link className="button button--red-border button--big reviews__sumbit-button" to="/">Оставить отзыв</Link>
      {comments.map((comment) => (
        <UserComment
          key={comment.id}
          currentComment={comment}
        />
      ))}
      <button className="button button--medium reviews__more-button">Показать еще отзывы</button><a className="button button--up button--red-border button--big reviews__up-button" href="#header">Наверх</a>
    </section>
  );
}

export default Comments;
