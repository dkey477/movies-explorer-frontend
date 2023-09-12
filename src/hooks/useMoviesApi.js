import { useContext } from 'react';
import { MoviesContext } from '../contexts/MoviesContext';
import { MAIN_API } from '../utils/MainApi';
import { BEAT_URL } from '../config/config';
import { PopupContext } from '../contexts/PopupContext';
import { MOVIES_API } from '../utils/MoviesApi';

export const useMoviesApi = () => {
  const { movies, setMovies } = useContext(MoviesContext);
  const { setPopupData } = useContext(PopupContext);

  const fetchBeatMovies = async () => {
    // если массив с фильмами от бит-апи не пустой, то возвращаем сразу его
    if (movies.mainMovies.length !== 0) {
      return movies.mainMovies;
      // иначе отправляем запрос к битАпи и получаем фильмы
    } else {
      setMovies((m) => ({ ...m, isLoading: true }));
      try {
        const mainMovies = await MOVIES_API.getAllMovies();
        setMovies((movies) => ({ ...movies, mainMovies }));
        return mainMovies;
      } catch (e) {
        setPopupData({
          isOpened: true,
          isError: true,
          message: 'Произошла непредвиденная ошибка. Проверьте ваше интернет-соединение или попробуйте позже.'
        });
        console.error(e);
      } finally {
        setMovies((m) => ({ ...m, isLoading: false }));
      }
    }
  };

  const handleSaveMovie = (movie) => {
    MAIN_API.saveMovie({
      country: movie.country,
      director: movie.director,
      duration: movie.duration.toString(),
      year: movie.year,
      description: movie.description,
      image: BEAT_URL + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: BEAT_URL + movie.image.formats.thumbnail.url,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    })
      .then(({ data }) => setMovies((movies) => ({
        ...movies,
        savedMovies: [ ...movies.savedMovies, data ]
      })))
      .catch(err => {
        console.error(err);
        setPopupData({
          isError: true,
          isOpened: true,
          message: err,
        });
      });
  };

  const handleDeleteMovie = (id) => {
    MAIN_API.deleteMovieById(id)
      .then(() => setMovies((m) => ({
        ...m,
        savedMovies: m.savedMovies.filter((movie) => movie._id !== id)
      })))
      .catch((err) => {
        console.error(err);
        setPopupData({
          isError: true,
          isOpened: true,
          message: err,
        });
      });
  };

  return {
    fetchBeatMovies, handleSaveMovie, handleDeleteMovie,
  };
};
