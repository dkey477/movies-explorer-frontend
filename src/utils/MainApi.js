const BASE_URL = 'http://localhost:3000';
// const BASE_URL = "https://api.mestodkey47.nomoreparties.sbs"
const checkStatus = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ name, email, password }),
    }).then((res) => checkStatus(res));
};

export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
    }).then((res) => checkStatus(res));
};

export const checkToken = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    }).then((res) => checkStatus(res));
};

export const logout = () => {
    return fetch(`${BASE_URL}/signout`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    }).then((res) => checkStatus(res));
};

export const editUserInfo = ({ name, email }) => {
    return fetch(`${BASE_URL}/user/me`, {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ name, email }),
    }).then((res) => checkStatus(res));
};

export const saveMovie = ({
    country,
    director,
    duration,
    year,
    descripion,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
}) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            country,
            director,
            duration,
            year,
            descripion,
            image,
            trailerLink,
            thumbnail,
            movieId,
            nameRU,
            nameEN,
        }),
    }).then((res) => checkStatus(res));
};

export const deleteMovie = (movieId) => {
    return fetch(`${BASE_URL}/movies/${movieId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    }).then((res) => checkStatus(res));
};


export const getSaveMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    }).then((res) => checkStatus(res));
};

// export const getUserInfo = () => {
//     return fetch(`${BASE_URL}/users/me`, {
//         method: 'GET',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         credentials: 'include',
//     }).then((res) => checkStatus(res));
// };

