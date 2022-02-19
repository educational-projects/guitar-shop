import { useSelector } from 'react-redux';
import { getCurrentProduct } from '../../../../store/cart/selectors';
import CartFooter from '../cart-footer/cart-footer';
import Product from '../product/product';

function ProductList(): JSX.Element {
  const currentProduct = useSelector(getCurrentProduct);

  return (
    <div className="cart">
      {currentProduct.map((product) => (
        <Product
          key={product.guitar.id}
          guitar={product.guitar}
          count={product.count}
        />
      ))}
      <CartFooter/>
    </div>
  );
}

export default ProductList;
