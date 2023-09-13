import './BurgerMenu.css';
import { Link, useLocation } from 'react-router-dom';
import akklogo from '../../images/akk-logo.svg';

function BurgerMenu({ isBurgerMenuOpen, onBurgerButton }) {

  const location = useLocation();

  return (
    <div className={`burger-menu ${isBurgerMenuOpen ? 'burger-menu_open' : ''}`} onClick={onBurgerButton}>
      <div className="burger-menu__container" onClick={(e) => e.stopPropagation()}>
        <nav className="burger-menu__nav-list">
          <div className="burger-menu__navigation">
            <Link to="/"
                  className={location.pathname === '/' ? 'link burger-menu__link burger-menu__link_active' : 'link burger-menu__link'}>
              Главная
            </Link>
            <Link to="/movies"
                  className={location.pathname === '/movies' ? 'link burger-menu__link burger-menu__link_active' : 'link burger-menu__link'}>
              Фильмы
            </Link>
            <Link to="/saved-movies"
                  className={location.pathname === '/saved-movies' ? 'link burger-menu__link burger-menu__link_active' : 'link burger-menu__link'}>
              Сохранённые фильмы
            </Link>
            <Link to="/profile" className="link burger-menu__link-account" >
              Аккаунт
              <img
                src={akklogo}
                className="burger-menu__link-logo"
                alt="логотип аккаунта"
              />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default BurgerMenu;
