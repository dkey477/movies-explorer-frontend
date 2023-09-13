import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import akklogo from '../../images/akk-logo.svg';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Navigation() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <nav className="navigation">
      {!currentUser.isLoggedIn ? (
        <ul className="navigation__container">
          <li className="navigation__link-block">
            <Link to="/signup" className="link navigation__link">
              Регистрация
            </Link>
            <Link to="/signin" className="link navigation__button">
              Войти
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="navigation__container">
          <li className="navigation__link-block navigation__link-block_registred">
            <div className="navigation__films">
              <NavLink
                to="/movies"
                className={({ isActive }) => `link navigation__link navigation__link_registred ${isActive && 'navigation__link_active'}`}
              >
                Фильмы
              </NavLink>
              <NavLink
                to="/saved-movies"
                className={({ isActive }) => `link navigation__link navigation__link_registred ${isActive && 'navigation__link_active'}`}
              >
                Сохранённые фильмы
              </NavLink>
            </div>
            <div className="navigation__films">
              <NavLink
                to="/profile"
                className={({ isActive }) => `link navigation__link navigation__link_registred ${isActive && 'navigation__link_active'}`}
              >
                Аккаунт
                <img
                  src={akklogo}
                  className="navigation__link-logo"
                  alt="логотип аккаунта"
                />
              </NavLink>
            </div>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
