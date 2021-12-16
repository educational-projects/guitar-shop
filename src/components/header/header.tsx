import Cart from '../cart/cart';
import Logo from '../logo/logo';
import NavMenu from '../nav-menu/nav-menu';
import SearchForm from '../search-form/search-form';

function Header(): JSX.Element {
  return (
    <header className="header" id="header">
      <div className="container header__wrapper">
        <Logo/>
        <NavMenu/>
        <SearchForm/>
        <Cart/>
      </div>
    </header>
  );
}

export default Header;
