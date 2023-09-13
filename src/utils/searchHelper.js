import { LOCAL_STORAGE, SHORT_MOVIE_DURATION } from '../config/vars';

const regexForFormatString = /[«»!@#$%^&*()_\-—=+|:"№;?{}<>.,]/g;

// функция для форматирования строки
const formatString = (string) => {
  // обрезаем все лишние пробелы, приводим к одному регистру и заменяем все, что попадает под регулярку
  return string
    .trim()
    .toLowerCase()
    .replace(regexForFormatString, '');
};

export function sortMovies(movies, query) {
  if (query.isCheckedShortFilms) {
    // если отмечены короткие фильмы, то фильтруем сначала по коротким, а потом по названию и поисковому запросу
    return movies.filter(movie => movie.duration <= SHORT_MOVIE_DURATION)
      .filter(movie => formatString(movie.nameRU || movie.nameEN).includes(formatString(query.string)));
  } else {
    return movies.filter(movie => formatString(movie.nameRU || movie.nameEN).includes(formatString(query.string)));
  }
}


export function updateLocalStorage(query, movies) {
  localStorage.setItem(LOCAL_STORAGE.search, JSON.stringify({
    string: query.string,
    isCheckedShortFilms: query.isCheckedShortFilms,
    foundMovies: movies,
  }));
}
