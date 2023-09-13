import { useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { LOCAL_STORAGE } from '../../config/vars';

export const CurrentUserProvider = ({ children }) => {
  const [ currentUser, setCurrentUser ] = useState({ isLoggedIn: !!(localStorage.getItem(LOCAL_STORAGE.isLoggedIn)) });

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
