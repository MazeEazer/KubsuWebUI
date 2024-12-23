const FooterForm = () => {
  return (
    <form className="footer__form flex" method="POST" id="form" action="">
      <input
        className="input"
        type="text"
        name="ФИО"
        id="fio"
        placeholder="Ваше имя"
        required
      />
      <input
        className="input"
        type="tel"
        name="phone"
        id="tel"
        placeholder="Телефон"
        required
      />
      <input
        className="input"
        type="email"
        name="email"
        id="email"
        placeholder="E-mail"
        required
      />
      <textarea
        style={{ resize: "none" }}
        className="form__textarea"
        name="comment"
        id="comm"
        placeholder="Ваш комментарий"
      ></textarea>
      <label className="form__check">
        <input className="label__input" type="checkbox" required />
        Отправляя заявку, я&nbsp;даю согласие на
        <a href="#"> обработку своих персональных данных.*</a>
      </label>
      <div
        className="g-recaptcha"
        data-sitekey="6LfemJ4qAAAAALkKs3Cq4CaQtp4ks14o020KKNYP"
      ></div>
      <button className="footer__btn btn__reset" type="submit">
        СВЯЖИТЕСЬ С НАМИ
      </button>
      <div id="success-message" style={{ display: "none", color: "green" }}>
        Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.
      </div>
      <div id="error-message" style={{ display: "none", color: "red" }}>
        Произошла ошибка при отправке формы. Пожалуйста, попробуйте снова.
      </div>
    </form>
  )
}

export default FooterForm
