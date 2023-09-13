import { Outlet } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { MAIN_API } from '../../utils/MainApi';
import { useAuth } from '../../hooks/useAuth';

export const AppLayout = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { handleLogout } = useAuth();

  useEffect(() => {
    if (currentUser.isLoggedIn) {
      MAIN_API.getCurrentUserData()
        .then(({ user }) => {
          setCurrentUser((u) => ({ ...u, name: user.name, email: user.email }));
        })
        .catch((err) => {
          handleLogout();
          if (err === 'Авторизуйтесь') {
            setCurrentUser({ isLoggedIn: false });
            localStorage.clear();
          }
          console.error(err);
        });
    }
  }, [ currentUser.isLoggedIn ]);

  return (
    <Outlet />
  );
};
