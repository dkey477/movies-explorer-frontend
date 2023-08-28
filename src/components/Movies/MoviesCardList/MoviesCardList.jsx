import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';


function MoviesCardList() {

    const location = useLocation();

    const buttonMoreClassName = (location.pathname === '/movies') ? 
    ('movies-button') : ('movies-button movies-button_disable');



    return (
            <section className='movies-list'>
                <ul className='movies-list__box'>
                    <MoviesCard />
                </ul>
                <button className={`link ${buttonMoreClassName}`}>Ещё</button>
            </section>
    );
}

export default MoviesCardList;
