import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { DeviceContext } from '../../../contexts/DeviceContext';
import { MOVIE_RENDER_CONFIG } from '../../../config/config';


function MoviesCardList({ page, onChangePage, movies, savedMovies, searchError }) {
  const { pathname } = useLocation();
  const device = useContext(DeviceContext);
  const isMainPage = pathname === '/movies';
  const [ toShow, setToShow ] = useState(12);
  const [ isShowButtonMore, setShowButtonMore ] = useState(true);

  useEffect(() => {
    // выставляем сколько показать карточек, опираясь на контекст девайса, конфиг рендера и страницу
    setToShow(MOVIE_RENDER_CONFIG[device].initialCardCount + MOVIE_RENDER_CONFIG[device].showMore * page);

    // показываем или скрываем кнопку "еще" в зависимости от того, сколько еще есть фильмов и сколько нужно показать
    movies.length > toShow
      ? setShowButtonMore(true)
      : setShowButtonMore(false);
  }, [ movies, toShow, page, device ]);

  const assignIdAndCheckSave = (movie) => {
    // переберем массив фильмов на каждом рендере
    return savedMovies.reduce((acc, item) => {
      // если айди фильма с бит апи равен тому, что у сохраненного фильма
      if (item.movieId === movie.id) {
        // то запишем айдишник для удобства удаления фильма и вернем тру для дальнейшего рендера
        movie._id = item._id;
        return true;
      }
      // иначе вернем false из аккумулятора
      return acc;
    }, false);
  };

  const renderMovies = (movies) => {
    // если основная страница, то рендерим слайсом и с пагинацией, иначе - весь массив фильмов
    return isMainPage
      ? movies.slice(0, toShow).map((movie) => {
        return (
          <MoviesCard key={movie.id} card={movie} isSaved={assignIdAndCheckSave(movie)} />
        );
      })
      : movies.map((movie) => <MoviesCard key={movie._id} card={movie} />);
  };

  return (
    <section className="movies-list">
      <h1 className="movies-list__search-error">{searchError}</h1>
      <ul className="movies-list__box">
        {renderMovies(movies)}
      </ul>
      {
        isShowButtonMore &&
        <button className={`link movies-button`} type="button" onClick={onChangePage}>Ещё</button>
      }
    </section>
  );
}

export default MoviesCardList;
