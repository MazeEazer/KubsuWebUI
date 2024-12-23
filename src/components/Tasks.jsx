import tasksbg from "../img/icon-bg.svg"
import taskimg1 from "../img/competency-20.svg"
import taskimg2 from "../img/competency-21.svg"
import taskimg3 from "../img/competency-22.svg"

const Tasks = () => {
  return (
    <section className="tasks">
      <div className="container2">
        <h2 className="tasks__title section__title">
          Наши профессиональные разработчики выполняют быстро любые задачи
        </h2>
        <ul className="tasks__list list__reset flex">
          <li className="task__item">
            <img className="task__bgimg" src={tasksbg} alt="" />
            <img className="task__img" src={taskimg1} alt="Картинка 1" />
            <h3 className="task__title section__title">от 1ч</h3>
            <p className="task__text text">
              Настройка события&nbsp;GA в&nbsp;интернет-магазине
            </p>
          </li>
          <li className="task__item">
            <img className="task__bgimg" src={tasksbg} alt="" />
            <img className="task__img" src={taskimg2} alt="Картинка 2" />
            <h3 className="task__title section__title">от 20ч</h3>
            <p className="task__text text">Разработка мобильной версии сайта</p>
          </li>
          <li className="task__item">
            <img className="task__bgimg" src={tasksbg} alt="" />
            <img className="task__img" src={taskimg3} alt="Картинка 3" />
            <h3 className="task__title section__title">от 8ч</h3>
            <p className="task__text text">Интеграция модуля оплаты</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Tasks
