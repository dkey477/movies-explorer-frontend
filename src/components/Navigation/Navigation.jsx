import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import akklogo from '../../images/akk-logo.svg';

function Navigation() {
    const location = useLocation();

    return (
        <nav className='navigation'>
            {location.pathname === '/' ? (
                <ul className='navigation__container'>
                    <li className='navigation__link-block'>
                        <Link to='/signup' className='link navigation__link'>
                            Регистрация
                        </Link>
                        <Link to='/signin' className='link navigation__button'>
                            Войти
                        </Link>
                    </li>
                </ul>
            ) : (
                <ul className='navigation__container'>
                    <li className='navigation__link-block navigation__link-block_registred'>
                        <div className='navigation__films'>
                            <Link
                                to='/movies'
                                className='link navigation__link navigation__link_registred'
                            >
                                Фильмы
                            </Link>
                            <Link
                                to='/saved-movies'
                                className='link navigation__link navigation__link_registred'
                            >
                                Сохранённые фильмы
                            </Link>
                        </div>
                        <div className='navigation__films'>
                            <Link
                                to='/profile'
                                className='link navigation__link navigation__link_registred'
                            >
                                Аккаунт
                                <img
                                    src={akklogo}
                                    className='navigation__link-logo'
                                    alt='логотип аккаунта'
                                />
                            </Link>
                        </div>
                    </li>
                </ul>
            )}
        </nav>
    );
}

export default Navigation;
