import { API_URL } from '../config/config';

class MoviesApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
    this._endpoints = {
      movies: '/movies',
      signup: '/signup',
      signin: '/signin',
      signout: '/signout',
      users: '/users/me',
    };
    this._headers = {
      'Content-Type': 'application/json',
    };
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    return res.text().then((text) => {
      throw JSON.parse(text).message || JSON.parse(text).error;
    });
  }

  getAllMovies() {
    return fetch(this._baseUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(this._checkResponse);
  }
}

export const MOVIES_API = new MoviesApi(API_URL.beat);
