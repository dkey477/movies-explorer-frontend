import './AboutProject.css';

function AboutProject() {
  return (
    <section className="project" id="project">
      <h2 className="project__header">О проекте</h2>
      <ul className="project__table">
        <li>
          <h3 className="project__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="project__text">
            Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </p>
        </li>
        <li>
          <h3 className="project__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые
            нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="project__time">
        <p className="project__time-one">1 неделя</p>
        <p className="project__time-four">4 недели</p>
        <p className="project__time-lang">Back-end</p>
        <p className="project__time-lang">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
