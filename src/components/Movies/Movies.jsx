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
                <MoviesCardList />
            </main>

            <Footer />
        </>
    );
}

export default Movies;
