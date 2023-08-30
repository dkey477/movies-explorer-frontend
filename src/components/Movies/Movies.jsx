import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Movies({ onBurgerButton, isBurgerMenuOpen, onBurgerLink }) {
    return (
        <>
            <BurgerMenu
                isBurgerMenuOpen={isBurgerMenuOpen}
                onBurgerLink={onBurgerLink}
            />

            <Header
                isBurgerMenuOpen={isBurgerMenuOpen}
                onBurgerButton={onBurgerButton}
            />
            <main className='movies'>
                <SearchForm />
                <form className='checkbox'>
                    <input
                        className='link checkbox__input'
                        type='checkbox'
                    ></input>
                    <span className='checkbox__text'>Короткометражки</span>
                </form>
                <MoviesCardList />
            </main>

            <Footer />
        </>
    );
}

export default Movies;
