/* footer */
document.addEventListener("DOMContentLoaded", (event) => {
  const recaptcha = document.querySelector(".g-recaptcha");
  recaptcha.setAttribute("data-theme", "dark");

  //first slider

  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length; // Общее количество слайдов
  let currentIndex = 0;
  let slideInterval;

  // Функция для отображения текущего слайда
  function showSlide(index) {
    // Скрываем все слайды
    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    // Отображаем текущий слайд
    slides[index].style.display = "block";

    // Обновляем номер текущего слайда
    const currentSlideNumber = (index + 1).toString().padStart(2, "0");
    document.querySelector(".ednum").textContent = currentSlideNumber;
  }

  // Функция для перехода к следующему слайду
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Переход к следующему слайду, если достигнут конец
    showSlide(currentIndex);
  }

  // Функция для перехода к предыдущему слайду
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Переход к предыдущему слайду
    showSlide(currentIndex);
  }

  // Функция для запуска автоматической прокрутки слайдов
  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 3000); // Переход через 3 секунды
  }

  // Функция для остановки автоматической прокрутки
  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  // Обработчики событий для кнопок
  document.querySelector(".slider__next").addEventListener("click", () => {
    nextSlide();
    //stopAutoSlide(); // Останавливаем автопрокрутку при клике
    // startAutoSlide(); // И запускаем заново
  });

  document.querySelector(".slider__prev").addEventListener("click", () => {
    prevSlide();
    // stopAutoSlide(); // Останавливаем автопрокрутку при клике
    // startAutoSlide(); // И запускаем заново
  });

  // Запуск автопрокрутки при загрузке
  /// startAutoSlide();

  // Изначально показываем первый слайд
  showSlide(currentIndex);

  // Обработка адаптивности (при изменении размера окна)
  window.addEventListener("resize", () => {
    // Можете изменить параметры слайдера в зависимости от ширины экрана
    // Например, изменить скорость прокрутки или показываемое количество слайдов
  });
});
