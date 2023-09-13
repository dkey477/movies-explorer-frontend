import { MAIN_API } from '../utils/MainApi';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { PopupContext } from '../contexts/PopupContext';
import { LOCAL_STORAGE } from '../config/vars';

export const useAuth = () => {
  const [ isLoading, setLoading ] = useState(false);
  const { setCurrentUser } = useContext(CurrentUserContext);
  const { setPopupData } = useContext(PopupContext);
  const navigate = useNavigate();

  const handlePopupStatus = (message, isError) => {
    setPopupData({
      isOpened: true,
      isError,
      message,
    });
  };

  const logoutAction = () => {
    localStorage.clear();
    setCurrentUser({ isLoggedIn: false });
    navigate('/', { replace: true });
  }

  const handleLogin = ({ email, password }) => {
    setLoading(true);
    MAIN_API
      .login({ email, password })
      .then(() => {
        localStorage.setItem(LOCAL_STORAGE.isLoggedIn, JSON.stringify({ isLoggedIn: true }));
        setCurrentUser((user) => ({ ...user, isLoggedIn: true }));
        navigate('/movies', { replace: true });
      })
      .catch(e => {
        handlePopupStatus(e, true);
        console.error(e);
      })
      .finally(() => setLoading(false));
  };

  const handleRegister = ({ name, email, password }) => {
    setLoading(true);
    MAIN_API
      .register({ name, email, password })
      .then(() => {
        handleLogin({ email, password });
        handlePopupStatus('Регистрация прошла успешно!', false);
      })
      .catch(e => {
        handlePopupStatus(e, true);
        console.error(e);
      })
      .finally(() => setLoading(false));
  };

  const handleLogout = () => {
    MAIN_API
      .logout()
      .then(() => {
        logoutAction();
      })
      .catch((e) => {
        console.error(e);
        logoutAction();
      });
  };

  return {
    isLoading,
    handleLogin,
    handleRegister,
    handleLogout,
  };
};
