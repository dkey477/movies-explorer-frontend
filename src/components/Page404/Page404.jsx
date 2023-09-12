import './Page404.css';
import { useNavigate } from 'react-router-dom';

function Page404() {
  const navigate = useNavigate();
  return (
    <main>
      <section className="page-not-found">
        <h1 className="page-not-found__title">404</h1>
        <p className="page-not-found__text">Страница не найдена</p>
        <button className="link page-not-found__button" onClick={() => navigate(-1)}>
          Назад
        </button>
      </section>
    </main>
  );
}

export default Page404;
