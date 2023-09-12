import { MoviesContext } from '../../contexts/MoviesContext';
import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { MAIN_API } from '../../utils/MainApi';

export const MoviesProvider = ({ children }) => {
  const [ movies, setMovies ] = useState({
    mainMovies: [],
    savedMovies: [],
    isLoading: false,
  });
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    if (currentUser.isLoggedIn) {
      setMovies((m) => ({ ...m, isLoading: true }));
      MAIN_API.getAllMovies()
        .then((res) => {
          setMovies((m) => ({ ...m, savedMovies: res }));
        })
        .catch(console.error)
        .finally(() => {
          setMovies((m) => ({ ...m, isLoading: false }));
        });
    }
  }, [ currentUser.isLoggedIn ]);

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};
