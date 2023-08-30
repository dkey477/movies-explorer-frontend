import './BurgerButton.css';
import { useLocation } from 'react-router-dom';

function BurgerButton({onBurgerButton, isBurgerMenuOpen}) {
    const location = useLocation();

    const buttonBurgerClassName =
        location.pathname === '/'
            ? ('button-burger button-burger_disable')
            : (isBurgerMenuOpen)
            ? ('button-burger button-burger_close')
            : ('button-burger');
            

    return (
        <button
            className={`link ${buttonBurgerClassName}`}
            type='button' onClick={onBurgerButton}
        ></button>
    );
}

export default BurgerButton;
