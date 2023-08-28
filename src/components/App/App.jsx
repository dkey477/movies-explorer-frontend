import { Routes, Route } from 'react-router-dom';
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
import { useState } from 'react';
// import {CurrentUserContext} from '../../contexts/CurrentUserContext'

function App() {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

    function handleBurgerButton() {
        setBurgerMenuOpen(!isBurgerMenuOpen);
    }

    return (
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
                        <>
                            <Register />
                        </>
                    }
                />
                <Route
                    path='/signin'
                    element={
                        <>
                            <Login />
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
    );
}

export default App;
