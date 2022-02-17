import CartFooter from '../cart-footer/cart-footer';
import Product from '../product/product';

function ProductList(): JSX.Element {
  return (
    <div className="cart">
      <Product/>
      <Product/>
      <CartFooter/>
    </div>
  );
}

export default ProductList;
