import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Page404 from '../Page404/Page404';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import * as api from '../../utils/MainApi';
import { useEffect, useState } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
    const navigate = useNavigate();

    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(true);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [currentUser, setCurrentUser] = useState(false);

    function handleLogin(email, password) {
        api.login(email, password)
            .then((res) => {
                if (res) {
                    setLoggedIn(true);
                    setSuccessMessage('Авторизация успешна');
                    navigate('/movies', { replace: true });
                }
            })
            .catch((err) => {
                setLoggedIn(false);
                if (err) {
                    console.log(err);
                    setErrorMessage('При авторизации произошла ошибка');
                }
                if (err.includes(401)) {
                    setErrorMessage('Неправильный логин или пароль');
                }
            });
    }

    function handleRegister(name, email, password) {
        api.register(name, email, password)
            .then((res) => {
                setSuccessMessage('Авторизация успешна');
                handleLogin(name, email, password);
            })
            .catch((err) => {
                if (err) {
                    console.log(err);
                    setErrorMessage('При реггистрации произошла ошибка');
                }
                if (err.includes(409)) {
                    setErrorMessage('Пользователь уже существует.');
                }
            });
    }

    function handleUpdateUser(name, email) {
        api.editUserInfo(name, email)
            .then((UserInfo) => {
                setCurrentUser(UserInfo);
            })
            .catch((err) => {
                if (err) {
                    console.log(err);
                }
                if (err.includes(409)) {
                    console.log(err);
                }
            });
    }



    function handleBurgerButton() {
        setBurgerMenuOpen(!isBurgerMenuOpen);
    }



    
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className='app'>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <>
                                <Header />
                                <Main />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path='/*'
                        element={
                            <>
                                <Page404 />
                            </>
                        }
                    />
                    <Route
                        path='/signup'
                        element={
                                <Register
                                loggedIn={loggedIn}
                                handleRegister={handleRegister}
                                errorMessage={errorMessage}
                                />
                        }
                    />
                    <Route
                        path='/signin'
                        element={
                            <>
                                <Login
                                    loggedIn={loggedIn}
                                    handleLogin={handleLogin}
                                    errorMessage={errorMessage}
                                />
                            </>
                        }
                    />
                    <Route
                        path='/profile'
                        element={
                            <>
                                <Profile
                                    onBurgerButton={handleBurgerButton}
                                    isBurgerMenuOpen={isBurgerMenuOpen}
                                    onBurgerLink={handleBurgerButton}
                                    onUpdate={handleUpdateUser}
                                />
                            </>
                        }
                    />
                    <Route
                        path='/movies'
                        element={
                            <>
                                <Movies
                                    onBurgerButton={handleBurgerButton}
                                    isBurgerMenuOpen={isBurgerMenuOpen}
                                    onBurgerLink={handleBurgerButton}
                                />
                            </>
                        }
                    />
                    <Route
                        path='/saved-movies'
                        element={
                            <>
                                <SavedMovies
                                    onBurgerButton={handleBurgerButton}
                                    isBurgerMenuOpen={isBurgerMenuOpen}
                                    onBurgerLink={handleBurgerButton}
                                />
                            </>
                        }
                    />
                </Routes>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
