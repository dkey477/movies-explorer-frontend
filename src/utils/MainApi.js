import { API_URL } from '../config/config';

class MainApi {
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

  _request(endpoint, options) {
    return fetch(this._baseUrl + endpoint, options)
      .then((res) => {
        if (res.ok) return res.json();
        return res.text().then((text) => {
          throw JSON.parse(text).message || JSON.parse(text).error;
        });
      });
  }

  getAllMovies() {
    return this._request(this._endpoints.movies, {
      headers: this._headers,
      credentials: 'include',
    });
  }

  saveMovie({ ...movie }) {
    return this._request(this._endpoints.movies, {
      headers: this._headers,
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify({ ...movie }),
    });
  }

  deleteMovieById(movieId) {
    return this._request(`${this._endpoints.movies}/${movieId}`, {
      headers: this._headers,
      credentials: 'include',
      method: 'DELETE',
    });
  }

  register({ name, email, password }) {
    return this._request(this._endpoints.signup, {
      headers: this._headers,
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
  }

  login({ email, password }) {
    return this._request(this._endpoints.signin, {
      headers: this._headers,
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  logout() {
    return this._request(this._endpoints.signout, {
      headers: this._headers,
      credentials: 'include'
    })
  }

  setCurrentUserData({ name, email }) {
    return this._request(this._endpoints.users, {
      headers: this._headers,
      credentials: 'include',
      method: 'PATCH',
      body: JSON.stringify({ name, email }),
    });
  }

  getCurrentUserData() {
    return this._request(this._endpoints.users, {
      headers: this._headers,
      credentials: 'include',
    });
  }
}

export const MAIN_API = new MainApi(API_URL.main);
