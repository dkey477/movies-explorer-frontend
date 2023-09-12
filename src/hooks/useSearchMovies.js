import { useEffect, useState } from 'react';
import { LOCAL_STORAGE } from '../config/vars';
import { sortMovies, updateLocalStorage } from '../utils/searchHelper';

export const useSearchMovies = ({
                                  movies, isMainPage, isSavedPage,
                                }) => {
  // массив отсортированных фильмов для рендера
  const [ sortedMovies, setSortedMovies ] = useState([]);
  // поисковые данные (строка поиска, чекбокс и удовлетворяющие фильмы, чтобы не сортировать их каждый раз)
  const [ searchQuery, setSearchQuery ] = useState({
    string: '',
    isCheckedShortFilms: false,
    foundMovies: [],
  });
  // стейт для прелоудера
  const [ isSearching, setSearching ] = useState(false);
  // поисковые ошибки
  const [ searchError, setSearchError ] = useState('');
  // стейт для пагинации
  const [ page, setPage ] = useState(0);

  useEffect(() => {
    // проверяем есть ли в Л.С. сохраненный запрос поиска и основная ли страница
    if (LOCAL_STORAGE.search in localStorage && isMainPage) {
      // парсим данные из Л.С.
      const searchHistory = JSON.parse(localStorage.getItem(LOCAL_STORAGE.search));
      // ставим запрос в соответствии с имеющейся историей
      setSearchQuery({
        string: searchHistory.string,
        isCheckedShortFilms: searchHistory.isCheckedShortFilms,
        foundMovies: searchHistory.foundMovies,
      });
      // записываем в массив, который рендерим, найденные фильмы
      setSortedMovies(searchHistory.foundMovies);
    } else if (!localStorage.getItem(LOCAL_STORAGE.search) && isMainPage) {
      // если ключа в Л.С. нет, запишем сообщение
      setSearchError('Введите ключевой запрос для поиска.');
    }
  }, [ isMainPage ]);

  useEffect(() => {
    if (isSavedPage) {
      // сбросим ошибки и обновим массив для рендера в соответствии с имеющимся поисковым запросом
      setSearchError('');
      const sortedSavedMovies = sortMovies(movies, searchQuery);
      setSortedMovies(sortedSavedMovies);

      // проверим массивы и пропишем ошибки
      if (sortedSavedMovies.length === 0) setSearchError('Ничего не найдено.');
      if (movies.length === 0) setSearchError('У вас пока еще нет избранных фильмов.');
    }
  }, [ isSavedPage, movies ]);

  const handlePage = () => {
    setPage((page) => page + 1);
  };

  const handleSubmit = (movieList, query) => {
    // включаем лоудер и сбрасываем ошибку
    setSearching(true);
    setSearchError('');
    // получаем отсортированный массив фильмов по актуальному запросу
    const newSortedMovies = sortMovies(movieList, query);
    // включаем задержку для имитации работы бэка
    setTimeout(() => {
      // если новый массив пуст, запишем ошибку
      if (newSortedMovies.length === 0) setSearchError('Ничего не найдено.');
      // если основная страница, сбросим страницу и обновим Л.С.
      if (isMainPage) {
        setPage(0);
        updateLocalStorage(query, newSortedMovies);
      }
      // записываем в стейт для рендера отсортированный массив и выключим лоудер
      setSortedMovies(newSortedMovies);
      setSearching(false);
    }, 300);
  };

  return {
    handleSubmit,
    page, handlePage,
    sortedMovies,
    searchQuery, setSearchQuery,
    isSearching,
    searchError,
  };
};
