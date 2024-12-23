const Tariffs = () => {
  return (
    <section className="tariffs">
      <div className="fon">
        <div className="container2">
          <h2 className="tariffs__title section__title">Тарифы</h2>
          <div className="tariff__cards flex">
            <div className="card">
              <div className="card__header">
                <h3 className="tariff__title section__title">Стартовый</h3>
              </div>
              <ul className="card__list list__reset">
                <li className="card__item">
                  Консультации и&nbsp;работы по&nbsp;SEO
                </li>
                <li className="card__item">Услуги дизайнера</li>
                <li className="card__item">
                  Неиспользованные оплаченные часы переносятся на&nbsp;следующий
                  месяц
                </li>
                <li className="card__item">
                  Предоплата от&nbsp;6&nbsp;000 рублей в&nbsp;месяц
                </li>
              </ul>
              <button className="card__btn btn__reset">
                <a href="#contacts">СВЯЖИТЕСЬ С НАМИ!</a>
              </button>
            </div>
            <div className="card main-card">
              <div className="card__header">
                <h3 className="tariff__title section__title ">Бизнес</h3>
              </div>
              <ul className="card__list list__reset">
                <li className="card__item">
                  Консультации и&nbsp;работы по&nbsp;SEO
                </li>
                <li className="card__item">Услуги дизайнера</li>
                <li className="card__item">
                  Высокое время реакции&nbsp;&mdash; до&nbsp;2&nbsp;рабочих дней
                </li>
                <li className="card__item">
                  Неиспользованные оплаченные часы не&nbsp;переносятся
                </li>
                <li className="card__item">
                  Предоплата от&nbsp;30&nbsp;000 рублей в&nbsp;месяц
                </li>
              </ul>
              <button className="card__btn card__btn-alt btn__reset">
                <a href="#contacts" className="">
                  СВЯЖИТЕСЬ С НАМИ!
                </a>
              </button>
            </div>
            <div className="card">
              <div className="card__header">
                <h3 className="tariff__title section__title">VIP</h3>
              </div>
              <ul className="card__list list__reset">
                <li className="card__item">
                  Консультации и&nbsp;работы по&nbsp;SEO
                </li>
                <li className="card__item">Услуги дизайнера</li>
                <li className="card__item">
                  Максимальное время реакции&nbsp;&mdash; в&nbsp;день обращения
                </li>
                <li className="card__item">
                  Неиспользованные оплаченные часы не&nbsp;переносятся
                </li>
                <li className="card__item">
                  Предоплата от&nbsp;270&nbsp;000 рублей в&nbsp;месяц
                </li>
              </ul>
              <button className="card__btn btn__reset">
                <a href="#contacts" className="">
                  СВЯЖИТЕСЬ С НАМИ!
                </a>
              </button>
            </div>
          </div>
          <div className="tarriffs__ps">
            <p className="tariff__text text">
              Вам не&nbsp;подходят наши тарифы? Оставьте заявку и мы предложим
              вам индивидуальные условия!
            </p>
            <a href="#contacts" className="individ">
              ПОЛУЧИТЬ ИНДИВИДУАЛЬНЫЙ ТАРИФ
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tariffs
