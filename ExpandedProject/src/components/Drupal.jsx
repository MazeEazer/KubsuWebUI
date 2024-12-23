import laptop from "../img/laptop.png"
const Drupal = () => {
  return (
    <section className="drupal">
      <div className="back__img">
        <img className="content__img" src={laptop} alt="Laptop" />
        <div className="container2">
          <div className="content__text">
            <h2 className="drupal__title section__title">
              Экспертиза в&nbsp;Drupal, опыт 14&nbsp;лет!
            </h2>
            <ul className="drupal__list list__reset flex">
              <li className="drupal__item">
                <p className="drupal__text text">
                  Только системный подход&nbsp;&mdash; контроль версий,
                  резервирование и&nbsp;тестирование!
                </p>
              </li>
              <li className="drupal__item">
                <p className="drupal__text text">
                  Только Drupal сайты, не&nbsp;берем на&nbsp;поддержку сайты
                  на&nbsp;других CMS!
                </p>
              </li>
              <li className="drupal__item">
                <p className="drupal__text text">
                  Участвуем в&nbsp;разработке ядра Drupal и&nbsp;модулей
                  на&nbsp;Drupal.org, разрабатываем
                  <span className="special"> свои модули Drupal</span>
                </p>
              </li>
              <li className="drupal__item">
                <p className="drupal__text text">
                  Поддерживаем сайты на&nbsp;Drupal&nbsp;5, 6, 7&nbsp;и&nbsp;8
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Drupal
