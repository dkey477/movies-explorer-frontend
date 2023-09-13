import '../Movies/Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import { useContext } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import Preloader from '../Movies/Preloader/Preloader';
import { useSearchMovies } from '../../hooks/useSearchMovies';

function SavedMovies() {
  const { movies } = useContext(MoviesContext);
  const {
    handleSubmit,
    sortedMovies,
    searchQuery, setSearchQuery,
    isSearching,
    searchError,
  } = useSearchMovies({ movies: movies.savedMovies, isMainPage: false, isSavedPage: true });

  return (
    <>
      <Header />
      <main className="movies">
        <SearchForm
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSubmit}
          isMainPage={false}
          isSearching={isSearching}
        />
        {
          movies.isLoading || isSearching
            ? <Preloader />
            : <MoviesCardList
              movies={sortedMovies}
              savedMovies={movies.savedMovies}
              searchError={searchError}
            />
        }
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
