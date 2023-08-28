import './Header.css';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation/Navigation';
import BurgerButton from '../BurgerButton/BurgerButton';

function Header({isBurgerMenuOpen, onBurgerButton}) {
  return (
    <header className='header'>
      <Link to='/'>
      <img className='link header__logo' src={logo} alt='логотип' />
      </Link>
      <Navigation />
      <BurgerButton 
      onBurgerButton={onBurgerButton}
      isBurgerMenuOpen={isBurgerMenuOpen}/>
      {/* <nav className="header__navigate">
        <Link to='/signup' className="link header__link">Регистрация</Link>
        <Link to='/signin' className="link header__button">Войти</Link>
      </nav> */}
    </header>
  );
}


export default Header