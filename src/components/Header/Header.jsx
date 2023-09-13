import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import BurgerButton from '../BurgerButton/BurgerButton';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useContext, useEffect, useState } from 'react';
import { DeviceContext } from '../../contexts/DeviceContext';
import { DEVICE_CONFIG } from '../../config/vars';

function Header() {
  const [ isBurgerMenuOpen, setBurgerMenuOpen ] = useState(false);
  const device = useContext(DeviceContext);

  useEffect(() => {
    if (device === DEVICE_CONFIG.desktop.name) {
      setBurgerMenuOpen(false);
    }
  }, [ device ]);

  function handleBurgerButton() {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    <>
      <BurgerMenu
        isBurgerMenuOpen={isBurgerMenuOpen}
        onBurgerButton={handleBurgerButton}
      />
      <header className="header">
        <Link to="/">
          <img className="link header__logo" src={logo} alt="логотип" />
        </Link>
        <Navigation />
        <BurgerButton
          onBurgerButton={handleBurgerButton}
          isBurgerMenuOpen={isBurgerMenuOpen} />
      </header>
    </>
  );
}


export default Header;
