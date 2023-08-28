import './Page404.css';

function Page404() {
    return (
        <section className='page-not-found'>
            <h2 className='page-not-found__title'>404</h2>
            <p className='page-not-found__text'>Страница не найдена</p>
            <a className='link page-not-found__button' href='/'>
                Назад
            </a>
        </section>
    );
}

export default Page404;
