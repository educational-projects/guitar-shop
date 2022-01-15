import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuType } from './const';
import cn from 'classnames';

function NavMenu(): JSX.Element {
  const [currentLink, setCurrentLink] = useState('');

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        {Object.values(MenuType).map(({title, link}) => {
          const linkClass = cn ('link main-nav__link', {
            'link--current' : currentLink === title,
          });

          return (
            <li key={title}>
              <Link
                className={linkClass}
                to={link}
                onClick={() => setCurrentLink(title)}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavMenu;
