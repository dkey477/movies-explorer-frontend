import './AboutMe.css';
import foto from '../../../images/foto.png'


function AboutMe() {
    return (
        <section className='aboutme' id='student'>
            <h2 className='aboutme__header'>Студент</h2>
            <div className='aboutme__intro'>
            <img className='aboutme__foto' src={foto} alt='Личная фотография' />
            <h3 className='aboutme__name'>Виталий</h3>
            <p className='aboutme__prof'>Фронтенд-разработчик, 30 лет</p>
            <p className='aboutme__info'>
                Я родился и живу в Саратове, закончил факультет экономики СГУ. У
                меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
                бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
                Контур». После того, как прошёл курс по веб-разработке, начал
                заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a className='link aboutme__link' href='https://github.com/dkey477' target='_blank' rel='noreferrer'>
                Github
            </a>
            </div>
        </section>
    );
}

export default AboutMe;
