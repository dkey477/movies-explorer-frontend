import './Page404.css';

function Page404() {
    return (
        <main>
        <section className='page-not-found'>
            <h1 className='page-not-found__title'>404</h1>
            <p className='page-not-found__text'>Страница не найдена</p>
            <a className='link page-not-found__button' href='/'>
                Назад
            </a>
        </section>
        </main>
    );
}

export default Page404;
