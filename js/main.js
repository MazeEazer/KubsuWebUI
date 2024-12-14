/* footer */
document.addEventListener("DOMContentLoaded", (event) => {
  const recaptcha = document.querySelector(".g-recaptcha");
  recaptcha.setAttribute("data-theme", "dark");

  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    slides[index].style.display = "block";

    const currentSlideNumber = (index + 1).toString().padStart(2, "0");
    document.querySelector(".ednum").textContent = currentSlideNumber;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; 
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
    showSlide(currentIndex);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 3000);
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  document.querySelector(".slider__next").addEventListener("click", () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
  });

  document.querySelector(".slider__prev").addEventListener("click", () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
  });

  startAutoSlide();

  showSlide(currentIndex);
});
