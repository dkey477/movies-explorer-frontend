const BASE_URL = 'https://api.nomoreparties.co';
// const BASE_URL = "https://api.mestodkey47.nomoreparties.sbs"

const checkStatus = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};

export const getMovies = () => {
    return fetch(`${BASE_URL}/beatfilm-movies`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    }).then((res) => checkStatus(res));
} 