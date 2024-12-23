import FooterForm from "./FooterForm"
import line from "../img/Vector 3.png"
import facebook from "../img/facebook.svg"
import vk from "../img/vk.svg"
import telegram from "../img/telegram.svg"
import youtube from "../img/youtube.svg"
const Footer = () => {
  return (
    <footer id="contacts" className="footer">
      <div className="container2">
        <div className="footer__top flex">
          <div className="feedback">
            <h2 className="footer__title section__title">
              Оставить заявку на поддержку сайта
            </h2>
            <p className="footer__text text">
              Срочно нужна поддержка сайта? Ваша команда не&nbsp;успевает
              справиться самостоятельно или предыдущий подрядчик
              не&nbsp;справился с&nbsp;работой? Тогда вам точно к&nbsp;нам!
              Просто оставьте заявку и&nbsp;наш менеджер с&nbsp;вами свяжется!
            </p>
            <div className="phone flex">
              <svg
                className="footer__svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.366 7.682C7.30434 9.33048 8.66952 10.6957 10.318 11.634L11.202 10.396C11.3442 10.1969 11.5543 10.0569 11.7928 10.0023C12.0313 9.94779 12.2814 9.98254 12.496 10.1C13.9103 10.8729 15.4722 11.3378 17.079 11.464C17.3298 11.4839 17.5638 11.5975 17.7345 11.7823C17.9052 11.9671 18 12.2094 18 12.461V16.923C18.0001 17.1706 17.9083 17.4094 17.7424 17.5932C17.5765 17.777 17.3483 17.8927 17.102 17.918C16.572 17.973 16.038 18 15.5 18C6.94 18 0 11.06 0 2.5C0 1.962 0.027 1.428 0.082 0.898C0.107255 0.651697 0.222984 0.423521 0.40679 0.257634C0.590595 0.0917472 0.829406 -5.33578e-05 1.077 2.32673e-08H5.539C5.79056 -3.15185e-05 6.0329 0.0947515 6.21768 0.265451C6.40247 0.43615 6.51613 0.670224 6.536 0.921C6.66222 2.52779 7.12708 4.08968 7.9 5.504C8.01746 5.71856 8.05221 5.96874 7.99767 6.2072C7.94312 6.44565 7.80306 6.65584 7.604 6.798L6.366 7.682ZM3.844 7.025L5.744 5.668C5.20478 4.50409 4.83535 3.26884 4.647 2H2.01C2.004 2.166 2.001 2.333 2.001 2.5C2 9.956 8.044 16 15.5 16C15.667 16 15.834 15.997 16 15.99V13.353C14.7312 13.1646 13.4959 12.7952 12.332 12.256L10.975 14.156C10.4287 13.9437 9.89801 13.6931 9.387 13.406L9.329 13.373C7.36758 12.2567 5.74328 10.6324 4.627 8.671L4.594 8.613C4.30691 8.10199 4.05628 7.57134 3.844 7.025Z"
                  fill="white"
                />
              </svg>
              <a href="tel:88002222673" className="tele">
                8 800 222-26-73
              </a>
            </div>
            <div className="e-mail flex">
              <svg
                className="footer__svg"
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.50004 0H22.5C22.8095 0 23.1062 0.105357 23.325 0.292893C23.5438 0.48043 23.6667 0.734784 23.6667 1V17C23.6667 17.2652 23.5438 17.5196 23.325 17.7071C23.1062 17.8946 22.8095 18 22.5 18H1.50004C1.19062 18 0.893875 17.8946 0.675083 17.7071C0.45629 17.5196 0.333374 17.2652 0.333374 17V1C0.333374 0.734784 0.45629 0.48043 0.675083 0.292893C0.893875 0.105357 1.19062 0 1.50004 0ZM21.3334 4.238L12.084 11.338L2.66671 4.216V16H21.3334V4.238ZM3.26287 2L12.0712 8.662L20.7524 2H3.26287Z"
                  fill="white"
                />
              </svg>
              <a href="mailto:info@drupal-coder.ru" className="mail">
                info@drupal-coder.ru
              </a>
            </div>
          </div>

          <FooterForm />
        </div>
      </div>
      <img className="line" src={line} alt="" />
      <div className="container2">
        <div className="footer__bottom">
          <div className="socials">
            <a className="link" href="#" title="Facebook">
              <img src={facebook} style={{ height: "20px" }} />
            </a>
            <a className="link" href="#" title="Вконтакте">
              <img src={vk} style={{ height: "20px" }} />
            </a>
            <a className="link" href="#" title="Telegram">
              <img src={telegram} style={{ height: "20px" }} />
            </a>
            <a className="link" href="#" title="Youtube">
              <img src={youtube} style={{ height: "20px" }} />
            </a>
          </div>
          <p className="footer__ps text">
            Проект ООО &laquo;Инитлаб&raquo;, Краснодар, Россия.
          </p>
          <p className="footer__ps text">
            Drupal валяется зарегистрированной торговой маркой Dries Buytaert.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
