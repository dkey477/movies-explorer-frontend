const API_URL = {
  main: 'https://mestoback.nomoreparties.sbs',
  beat: 'https://api.nomoreparties.co/beatfilm-movies',
};

const BEAT_URL = 'https://api.nomoreparties.co';

const MOVIE_RENDER_CONFIG = {
  desktop: {
    initialCardCount: 12,
    showMore: 3,
  },
  tablet: {
    initialCardCount: 8,
    showMore: 2,
  },
  mobile: {
    initialCardCount: 5,
    showMore: 2,
  }
};

export {
  API_URL,
  MOVIE_RENDER_CONFIG,
  BEAT_URL,
};
