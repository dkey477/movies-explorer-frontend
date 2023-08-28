import '../Movies/Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import BurgerMenu from '../BurgerMenu/BurgerMenu';


function SavedMovies({ onBurgerButton, isBurgerMenuOpen, onBurgerLink }) {
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
                <div className='checkbox'>
                    <input className='link checkbox__input' type='checkbox'></input>
                    <span className='checkbox__text'>Короткометражки</span>
                </div>
                <MoviesCardList />
            </main>

            <Footer />
        </>
    );
}

export default SavedMovies;
