import { useState } from "react"
import left from "../img/arrow-left.svg"
import right from "../img/arrow-right.svg"
import slides from "./slides"

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const formatSlideNumber = (number) => {
    return (number + 1).toString().padStart(2, "0")
  }

  return (
    <section className="reviews">
      <div className="border__backback">
        <div className="border__back">
          <div className="container2">
            <h2 className="reviews__title section__title">Отзывы</h2>
            <div className="slider__wrapper">
              <div className="slider-container">
                <div className="slider-main">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`slide ${
                        index === currentSlide ? "active" : ""
                      }`}
                    >
                      <div className="slider__img-wrapper">
                        <img
                          className="slider__img"
                          src={slide.image}
                          alt={`Slide ${slide.id}`}
                        />
                      </div>
                      <div className="slider__text text">{slide.text}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="slider-navigation">
                <div className="button_slide">
                  <button className="slider__prev" onClick={prevSlide}>
                    <img src={left} alt="arrow-left" />
                  </button>
                  <div className="counter">
                    <span className="ednum">
                      {formatSlideNumber(currentSlide)}
                    </span>
                    <span className="specnum">/</span>
                    <span className="totalnum">
                      {formatSlideNumber(slides.length - 1)}
                    </span>
                  </div>
                  <button className="slider__next" onClick={nextSlide}>
                    <img src={right} alt="arrow-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
