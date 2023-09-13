import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { BEAT_URL } from '../../../config/config';
import { useMoviesApi } from '../../../hooks/useMoviesApi';

function MoviesCard({ card, isSaved }) {
  const { pathname } = useLocation();
  const isMainPage = pathname === '/movies';
  const { handleSaveMovie, handleDeleteMovie } = useMoviesApi();

  const convertDuration = (duration) => `${Math.floor(duration / 60)}ч ${duration % 60}м`;

  return (
    <li className="movie-card">
      <img
        className="movie-card__screen"
        src={isMainPage ? BEAT_URL + card.image.url : card.image}
        alt={`Постер фильма ${card.nameRU}`}
        onClick={() => window.open(card.trailerLink, '_blank')}
      />
      <h2 className="movie-card__title">{card.nameRU}</h2>
      <p className="movie-card__time">{convertDuration(card.duration)}</p>
      {
        isMainPage && !isSaved &&
        <button
          className="link movie-card__save"
          type="button"
          onClick={() => handleSaveMovie(card)}
        />
      }
      {
        isMainPage && isSaved &&
        <button
          className="link movie-card__save movie-card__save_active"
          type="button"
          onClick={() => handleDeleteMovie(card._id)}
        />
      }
      {
        !isMainPage &&
        <button
          className="link movie-card__save movie-card__save_delete"
          type="button"
          onClick={() => handleDeleteMovie(card._id)}
        />
      }
    </li>
  );
}

export default MoviesCard;
