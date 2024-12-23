import bg from "../img/icon-bg.svg"
import img1 from "../img/competency-1.svg"
import img2 from "../img/competency-2.svg"
import img3 from "../img/competency-3.svg"
import img4 from "../img/competency-4.svg"
import img5 from "../img/competency-5.svg"
import img6 from "../img/competency-6.svg"
import img7 from "../img/competency-7.svg"
import img8 from "../img/competency-8.svg"

const Advantages = () => {
  return (
    <section id="advantages" className="advantages">
      <div className="container2">
        <h2 className="advantages__title section__title">
          13&nbsp;лет совершенствуем компетенции в&nbsp;Друпал поддержке!
        </h2>
        <p className="advantages__text text">
          Разрабатываем и&nbsp;оптимизируем модели, расширяем функциональность
          сайтов, обновляем дизайн
        </p>
        <ul className="advantages__list list__reset flex">
          <li className="advantages__item">
            <img className="advan__bgimg" src={bg} alt="" />
            <img className="advan__img" src={img1} alt="Картинка 1" />
            <p className="advan__text text">
              Добавление информации на&nbsp;сайт, создание новых разделов
            </p>
          </li>
          <li className="advantages__item">
            <img className="advan__bgimg" src={bg} alt="" />
            <img className="advan__img" src={img2} alt="Картинка 2" />
            <p className="advan__text text">
              Разработка и&nbsp;оптимизация модулей сайта
            </p>
          </li>
          <li className="advantages__item">
            <img className="advan__bgimg" src={bg} alt="" />
            <img className="advan__img" src={img3} alt="Картинка 3" />
            <p className="advan__text text">
              Интеграция с&nbsp;CRM, 1С, платежными системами, любыми
              веб-сервисами
            </p>
          </li>
          <li className="advantages__item">
            <img className="advan__bgimg" src={bg} alt="" />
            <img className="advan__img" src={img4} alt="Картинка 4" />
            <p className="advan__text text">
              Любые доработки функционала и&nbsp;дизайна
            </p>
          </li>
          <li className="advantages__item">
            <img className="advan__bgimg" src={bg} alt="" />
            <img className="advan__img" src={img5} alt="Картинка 5" />
            <p className="advan__text text">
              Аудит и&nbsp;мониторинг безопасности Drupal сайтов
            </p>
          </li>
          <li className="advantages__item">
            <img className="advan__bgimg" src={bg} alt="" />
            <img className="advan__img" src={img6} alt="Картинка 6" />
            <p className="advan__text text">
              Миграция, импорт контента и&nbsp;апгрейд Drupal
            </p>
          </li>
          <li className="advantages__item">
            <img className="advan__bgimg" src={bg} alt="" />
            <img className="advan__img" src={img7} alt="Картинка 7" />
            <p className="advan__text text">
              Оптимизация и&nbsp;ускорение Drupal сайтов
            </p>
          </li>
          <li className="advantages__item">
            <img className="advan__bgimg" src={bg} alt="" />
            <img className="advan__img" src={img8} alt="Картинка 8" />
            <p className="advan__text text">
              Веб-маркетинг, консультации и&nbsp;работы по&nbsp;SEO
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Advantages
