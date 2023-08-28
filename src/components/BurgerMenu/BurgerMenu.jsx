import './BurgerMenu.css';
import { Link, useLocation } from 'react-router-dom';
import akklogo from '../../images/akk-logo.svg';

function BurgerMenu({ isBurgerMenuOpen, onBurgerLink }) {

const location = useLocation()

    return (
        <div className={`burger-menu ${isBurgerMenuOpen ? 'burger-menu_open' : ''}`}>
            <div className='burger-menu__container'>
            <nav>
                <div className='burger-menu__navigation'>
                    <Link to='/' className={location.pathname === '/' ? 'link burger-menu__link burger-menu__link_active' : 'burger-menu__link'} onClick={onBurgerLink}>
                        Главная
                    </Link>
                    <Link to='/movies' className={location.pathname === '/movies' ? 'link burger-menu__link burger-menu__link_active' : 'burger-menu__link'} onClick={onBurgerLink}>
                        Фильмы
                    </Link>
                    <Link to='/saved-movies' className={location.pathname === '/saved-movies' ? 'link burger-menu__link burger-menu__link_active' : 'burger-menu__link'} onClick={onBurgerLink}>
                        Сохранённые фильмы
                    </Link>
                </div>

                <div className='burger-menu__account'>
                    <Link to='/profile' className='burger-menu__link-account' onClick={onBurgerLink}>
                        Аккаунт
                        <img
                            src={akklogo}
                            className='burger-menu__link-logo'
                            alt='логотип аккаунта'
                        />
                    </Link>
                </div>
            </nav>
            </div>
        </div>
    );
}

export default BurgerMenu;
