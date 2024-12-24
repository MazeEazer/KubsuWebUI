import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"
import img1 from "../img/Росатом.png"
import img2 from "../img/ВТБ.png"
import img3 from "../img/КУБГУ.png"
import img4 from "../img/Газпром.png"
const Workwithus = () => {
  const logos = [
    img1,
    img2,
    img3,
    img4,
    img1,
    img2,
    img3,
    img4,
    img1,
    img2,
    img3,
    img4,
  ]

  return (
    <section className="workWithUs">
      <div className="container2">
        <div className="inf">
          <h2 className="inf__title section__title">С&nbsp;нами работают</h2>
          <p className="inf__text text">
            Десятки компаний доверяют нам самое ценное, что у&nbsp;них есть
            в&nbsp;интернете&nbsp;&mdash; свои сайты. Мы&nbsp;делаем всё, чтобы
            наше сотрудничество было долгим.
          </p>
        </div>
      </div>
      <div className="overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView="auto"
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
        >
          {logos.map((img, index) => (
            <SwiperSlide key={index}>
              <div>
                <img src={img} alt={`Company logo ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView="auto"
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
        >
          {logos
            .slice()
            .reverse()
            .map((img, index) => (
              <SwiperSlide key={index}>
                <div>
                  <img src={img} alt={`Company logo ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Workwithus
