import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__conteiner">
          <a className="link portfolio__link" href="https://github.com/dkey477/how-to-learn"
             target="_blank" rel="noreferrer">
            Статичный сайт <span className="link portfolio__arrow">↗</span>
          </a>
        </li>
        <li className="portfolio__conteiner">
          <a className="link portfolio__link" href="https://github.com/dkey477/russian-travel"
             target="_blank" rel="noreferrer">
            Адаптивный сайт <span className="link portfolio__arrow">↗</span>
          </a>
        </li>
        <li className="portfolio__conteiner">
          <a className="link portfolio__link" href="https://github.com/dkey477/mesto"
             target="_blank" rel="noreferrer">
            Одностраничное приложение <span className="link portfolio__arrow">↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
