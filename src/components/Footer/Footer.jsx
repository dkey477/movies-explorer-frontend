import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__container">
        <p className="footer__copyright">©{year}</p>
        <nav className="footer__links">
          <a
            className="link footer__text"
            href="https://practicum.yandex.ru/profile/web/"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            className="link footer__text"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
