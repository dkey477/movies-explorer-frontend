import React, { useState } from 'react';
import './MoviesCard.css';
import cardmovie from '../../../images/card-movie.png';
import { useLocation } from 'react-router-dom';

function MoviesCard() {
    const location = useLocation();

    const [isSave, setSave] = useState(false);

    const buttonClassName =
        location.pathname === '/movies' && isSave
            ? 'movie-card__save movie-card__save_active'
            : location.pathname === '/movies'
            ? 'movie-card__save'
            : 'movie-card__save movie-card__save_delete';

    function handleButtonSave() {
        if (!isSave) setSave(true);
        else setSave(false);
    }

    return (
        <>
            <li className='movie-card'>
                <img
                    className='movie-card__screen'
                    src={cardmovie}
                    alt='наименование фильма'
                />
                <h2 className='movie-card__title'>33 слова о дизайне</h2>
                <p className='movie-card__time'>1ч 47м</p>
                <button
                    className={`link ${buttonClassName}`}
                    onClick={handleButtonSave}
                    type='button'
                ></button>
            </li>
            <li className='movie-card'>
                <img
                    className='movie-card__screen'
                    src={cardmovie}
                    alt='наименование фильма'
                />
                <h2 className='movie-card__title'>33 слова о дизайне</h2>
                <p className='movie-card__time'>1ч 47м</p>
                <button
                    className={`link ${buttonClassName}`}
                    onClick={handleButtonSave}
                    type='button'
                ></button>
            </li>
            <li className='movie-card'>
                <img
                    className='movie-card__screen'
                    src={cardmovie}
                    alt='наименование фильма'
                />
                <h2 className='movie-card__title'>33 слова о дизайне</h2>
                <p className='movie-card__time'>1ч 47м</p>
                <button
                    className={`link ${buttonClassName}`}
                    onClick={handleButtonSave}
                    type='button'
                ></button>
            </li>
            {/* <li className='movie-card'>
        <img className='movie-card__screen' src={cardmovie} alt="кадр из фильма" />
        <h2 className='movie-card__title'>33 слова о дизайне</h2>
        <p className='movie-card__time'>1ч 47м</p>
        <button className={`link ${buttonClassName}`} onClick={handleButtonSave} type='button'></button>
    </li>
    <li className='movie-card'>
        <img className='movie-card__screen' src={cardmovie} alt="кадр из фильма" />
        <h2 className='movie-card__title'>33 слова о дизайне</h2>
        <p className='movie-card__time'>1ч 47м</p>
        <button className={`link ${buttonClassName}`} onClick={handleButtonSave} type='button'></button>
    </li>
    <li className='movie-card'>
        <img className='movie-card__screen' src={cardmovie} alt="кадр из фильма" />
        <h2 className='movie-card__title'>33 слова о дизайне</h2>
        <p className='movie-card__time'>1ч 47м</p>
        <button className={`link ${buttonClassName}`} onClick={handleButtonSave} type='button'></button>
    </li>
    <li className='movie-card'>
        <img className='movie-card__screen' src={cardmovie} alt="кадр из фильма" />
        <h2 className='movie-card__title'>33 слова о дизайне</h2>
        <p className='movie-card__time'>1ч 47м</p>
        <button className={`link ${buttonClassName}`} onClick={handleButtonSave} type='button'></button>
    </li>
    <li className='movie-card'>
        <img className='movie-card__screen' src={cardmovie} alt="кадр из фильма" />
        <h2 className='movie-card__title'>33 слова о дизайне</h2>
        <p className='movie-card__time'>1ч 47м</p>
        <button className={`link ${buttonClassName}`} onClick={handleButtonSave} type='button'></button>
    </li>
    <li className='movie-card'>
        <img className='movie-card__screen' src={cardmovie} alt="кадр из фильма" />
        <h2 className='movie-card__title'>33 слова о дизайне</h2>
        <p className='movie-card__time'>1ч 47м</p>
        <button className={`link ${buttonClassName}`} onClick={handleButtonSave} type='button'></button>
    </li>
    <li className='movie-card'>
        <img className='movie-card__screen' src={cardmovie} alt="кадр из фильма" />
        <h2 className='movie-card__title'>33 слова о дизайне</h2>
        <p className='movie-card__time'>1ч 47м</p>
        <button className={`link ${buttonClassName}`} onClick={handleButtonSave} type='button'></button>
    </li>
    <li className='movie-card'>
        <img className='movie-card__screen' src={cardmovie} alt="кадр из фильма" />
        <h2 className='movie-card__title'>33 слова о дизайне</h2>
        <p className='movie-card__time'>1ч 47м</p>
        <button className={`link ${buttonClassName}`} onClick={handleButtonSave} type='button'></button>
    </li>
    <li className='movie-card'>
        <img className='movie-card__screen' src={cardmovie} alt="кадр из фильма" />
        <h2 className='movie-card__title'>33 слова о дизайне</h2>
        <p className='movie-card__time'>1ч 47м</p>
        <button className={`link ${buttonClassName}`} onClick={handleButtonSave} type='button'></button>
    </li> */}
        </>
    );
}

export default MoviesCard;
