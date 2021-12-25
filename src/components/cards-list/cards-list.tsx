import { useSelector } from 'react-redux';
import { getGuitars, getGuitarsLoading } from '../../store/products/selectors';
import Card from '../card/card';
import Loader from '../loader/loader';

function CardsList(): JSX.Element {
  const guitars = useSelector(getGuitars);
  const guitarsLoading = useSelector(getGuitarsLoading);

  if (guitarsLoading) {
    return <Loader/>;
  }

  return (
    <div className="cards catalog__cards">
      {guitars.map((guitar) => (
        <Card
          guitar={guitar}
          key={guitar.id}
        />
      ))}
    </div>
  );
}

export default CardsList;
