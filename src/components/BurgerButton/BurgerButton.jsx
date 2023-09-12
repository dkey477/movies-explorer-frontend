import './BurgerButton.css';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function BurgerButton({ onBurgerButton, isBurgerMenuOpen }) {
  const { currentUser } = useContext(CurrentUserContext);

  const buttonBurgerClassName =
    !currentUser.isLoggedIn
      ? ('button-burger button-burger_disable')
      : (isBurgerMenuOpen)
        ? ('button-burger button-burger_close')
        : ('button-burger');


  return (
    <button
      className={`link ${buttonBurgerClassName}`}
      type="button" onClick={onBurgerButton}
    />
  );
}

export default BurgerButton;
