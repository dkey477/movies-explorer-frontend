import './SearchForm.css';
import { useContext } from 'react';
import { MoviesContext } from '../../../contexts/MoviesContext';
import { useMoviesApi } from '../../../hooks/useMoviesApi';
import { PopupContext } from '../../../contexts/PopupContext';

function SearchForm({ searchQuery, setSearchQuery, onSearch, isMainPage, isSearching }) {
  const { movies } = useContext(MoviesContext);
  const { fetchBeatMovies } = useMoviesApi();
  const { setPopupData } = useContext(PopupContext);

  const handleChange = (evt) => {
    setSearchQuery((query) => ({ ...query, string: evt.target.value }));
  };

  const handleCheckboxChange = async (evt) => {
    // если пустая строка запроса, то покажем ошибку
    if (!searchQuery.string && isMainPage) {
      return setPopupData({
        isError: true,
        isOpened: true,
        message: 'Нельзя найти короткометражки без поискового запроса.'
      });
    }
    // поменяем состояние чекбокса
    setSearchQuery((query) => ({ ...query, isCheckedShortFilms: evt.target.checked }));
    // если основная страница, то запросим фильмы и отправим на сортировку
    if (isMainPage) {
      const moviesData = await fetchBeatMovies();
      // и передадим текущее состояние чекбокса, избегая бэтчинга
      onSearch(moviesData, { string: searchQuery.string, isCheckedShortFilms: evt.target.checked });
    } else {
      // иначе отправляем на сортировку сохраненные фильмы
      onSearch(movies.savedMovies, {
        string: searchQuery.string,
        isCheckedShortFilms: evt.target.checked
      });
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!isMainPage) {
      onSearch(movies.savedMovies, searchQuery);
    } else {
      if (!searchQuery.string) {
        return setPopupData({
          isError: true,
          isOpened: true,
          message: 'Пустая строка поиска.'
        });
      }

      const moviesData = await fetchBeatMovies();
      onSearch(moviesData, searchQuery);
    }
  };

  return (
    <section>
      <form className="search-form" noValidate onSubmit={handleSubmit}>
        <div className="search-form__conteiner">
          <input className="search-form__input" placeholder="Фильм" required
                 value={searchQuery.string ?? ''} onChange={handleChange} />
          <button className="link search-form__button" type="submit" disabled={isSearching}>
            Поиск
          </button>
        </div>
        <div className="checkbox">
          <input
            className="link checkbox__input"
            type="checkbox"
            checked={searchQuery.isCheckedShortFilms}
            onChange={handleCheckboxChange}
            disabled={isSearching}
          />
          <span className="checkbox__text">Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
