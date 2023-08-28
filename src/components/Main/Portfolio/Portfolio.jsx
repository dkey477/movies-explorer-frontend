import './Portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__header'>Портфолио</h2>
            <ul className='portfolio__list'>
                <li className='portfolio__conteiner'>
                    <a className='link portfolio__link' href='https://github.com/dkey477/how-to-learn'>
                        Статичный сайт
                    </a>
                    <span className='portfolio__arrow'>↗</span>
                </li>
                <li className='portfolio__conteiner'>
                    <a className='link portfolio__link' href='https://github.com/dkey477/russian-travel'>
                        Адаптивный сайт
                    </a>
                    <span className='portfolio__arrow'>↗</span>
                </li>
                <li className='portfolio__conteiner'>
                    <a className='link portfolio__link' href='https://github.com/dkey477/mesto'>
                        Одностраничное приложение
                    </a>
                    <span className='portfolio__arrow'>↗</span>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;
