import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { useContext } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import Preloader from './Preloader/Preloader';
import { MOVIES_API } from '../../utils/MoviesApi';
import { PopupContext } from '../../contexts/PopupContext';
import { useSearchMovies } from '../../hooks/useSearchMovies';
import { BEAT_URL } from '../../config/config';
import { MAIN_API } from '../../utils/MainApi';

function Movies() {
  const { movies, setMovies } = useContext(MoviesContext);
  const { setPopupData } = useContext(PopupContext);
  const {
    handleSubmit,
    page, handlePage,
    sortedMovies,
    searchQuery, setSearchQuery,
    isSearching,
    searchError,
  } = useSearchMovies({ movies: movies.mainMovies, isMainPage: true, isSavedPage: false });


  return (
    <>
      <Header />
      <main className="movies">
        <SearchForm
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSubmit}
          isMainPage={true}
          isSearching={isSearching}
        />
        {
          movies.isLoading || isSearching
            ? <Preloader />
            : <MoviesCardList
              movies={sortedMovies}
              savedMovies={movies.savedMovies}
              searchError={searchError}
              page={page}
              onChangePage={handlePage}
            />
        }
      </main>
      <Footer />
    </>
  );
}

export default Movies;
