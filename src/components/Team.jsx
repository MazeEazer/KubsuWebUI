import member1 from "../img/IMG_2472_0.jpg"
import member2 from "../img/IMG_2539_0.jpg"
import member3 from "../img/IMG_2474_1.jpg"
import member4 from "../img/IMG_2522_0.jpg"
import member5 from "../img/IMG_9971_16.jpg"

const Team = () => {
  return (
    <section id="team" className="team">
      <div className="container">
        <h2 className="team__title section title">Команда</h2>
        <ul className="team__list list__reset flex">
          <li className="team__item">
            <img className="img__member" src={member1} alt="Фото" />
            <div className="name__member">Сергей Синица</div>
            <div className="post__member">
              Руководитель отдела веб-разработки, канд. техн. наук, заместитель
              директора
            </div>
          </li>
          <li className="team__item">
            <img className="img__member" src={member2} alt="Фото" />
            <div className="name__member">Роман Агабеков</div>
            <div className="post__member">
              Руководитель отдела DevOPS, директор
            </div>
          </li>
          <li className="team__item">
            <img className="img__member" src={member3} alt="Фото" />
            <div className="name__member">Алексей Синица</div>
            <div className="post__member">
              Руководитель отдела поддержки сайтов
            </div>
          </li>
          <li className="team__item">
            <img className="img__member" src={member4} alt="Фото" />
            <div className="name__member">Дарья Бочкарёва</div>
            <div className="post__member">
              Руководитель отдела продвижения, контекстной рекламы
              и&nbsp;контент-поддержки сайтов
            </div>
          </li>
          <li className="team__item">
            <img className="img__member" src={member5} alt="Фото" />
            <div className="name__member">Ирина Торкунова</div>
            <div className="post__member">
              Менеджер по&nbsp;работе с&nbsp;клиентами
            </div>
          </li>
        </ul>
        <div className="btn">
          <button className="team__btn btn__reset">ВСЯ КОМАНДА</button>
        </div>
      </div>
    </section>
  )
}

export default Team
