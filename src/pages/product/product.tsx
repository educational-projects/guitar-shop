import { Link } from 'react-router-dom';
import { APPRoute } from '../../const';

function Product(): JSX.Element {
  return (
    <div style={{width: '400px', margin: '0 auto', textAlign: 'center'}}>
      <h1>Страница в разработке</h1>
      <p>Когда-нибудь сделаем</p>
      <Link style={{color: 'red'}} to={APPRoute.Main}>На главную</Link>
    </div>
  );
}

export default Product;
