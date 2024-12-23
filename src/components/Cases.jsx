import case1 from "../img/image 9.2.png"
import case2 from "../img/image 6.1.png"
const Cases = () => {
  return (
    <section className="cases">
      <div className="container2">
        <h2 id="blog" className="cases__title section__title">
          Последние кейсы
        </h2>
        <ul className="cases__list list__reset flex">
          <li className="case__item">
            <img className="case__img" src={case1} alt="картинка" />
            <div className="case__inf">
              <h4 className="case__title section__title">
                Настройка кэширования данных. Апгрейд сервера. Ускорение работы
                сайта в&nbsp;30&nbsp;раз!
              </h4>
              <span className="case__publ">04.05.2020</span>
              <p className="case__text text">
                Влияние скорости загрузки страниц сайта на&nbsp;отказы
                и&nbsp;конверсии. Кейс ускорения...
              </p>
            </div>
          </li>
          <li className="case__item case__item__more case__bgimg1">
            <h4 className="case__title section__title">
              Использование отчетов Ecommerce в&nbsp;Яндекс.Метрике
            </h4>
          </li>
          <li className="case__item case__item__bottom case__bgimg2">
            <div className="case__infbg">
              <h4 className="case__title section__title">
                Повышение конверсии страницы с&nbsp;формой заявки
                с&nbsp;применением AB-тестирования
              </h4>
              <span className="case__publ">24.01.2020</span>
            </div>
          </li>
          <li className="case__item case__item__bottom case__bgimg3">
            <div className="case__infbg">
              <h4 className="case__title section__title">
                Drupal&nbsp;7: ускорение времени генерации страниц
                интернет-магазина на&nbsp;32%
              </h4>
              <span className="case__publ">23.09.2019</span>
            </div>
          </li>
          <li className="case__item case__item__bottom">
            <img className="case__img" src={case2} alt="картинка" />
            <div className="case__inf">
              <h4 className="case__title section__title">
                Обмен товарами и&nbsp;заказами интернет-магазинов на&nbsp;Drupal
                7&nbsp;с 1C: Предприятие, МойСклад, Класс365
              </h4>
              <span className="case__publ">22.08.2019</span>
              <p className="case__text text">
                Опубликован <a href="#">релиз модуля...</a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Cases
