import { useSelector } from 'react-redux';
import { getGuitars } from '../../store/products/selectors';
import Card from '../card/card';

function CardsList(): JSX.Element {
  const guitars = useSelector(getGuitars);

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
