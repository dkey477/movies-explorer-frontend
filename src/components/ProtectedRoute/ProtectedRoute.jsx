import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return currentUser.isLoggedIn
    ? <Outlet />
    : <Navigate to="/" replace />;
};
