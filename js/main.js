/* footer */
document.addEventListener("DOMContentLoaded", (event) => {
  const recaptcha = document.querySelector(".g-recaptcha");
  recaptcha.setAttribute("data-theme", "dark");
  //Стрелочный слайдер

  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;
  let slideInterval;
  function showSlide(index, direction) {
    const currentSlide = slides[currentIndex];
    const nextSlide = slides[index];

    if (direction === 'next') {
      currentSlide.classList.add('slideOutLeft');
      nextSlide.classList.add('slideInRight');
    } else {
      currentSlide.classList.add('slideOutRight');
      nextSlide.classList.add('slideInLeft');
    }

    setTimeout(() => {
      slides.forEach((slide) => {
        slide.classList.remove('active', 'slideOutLeft', 'slideOutRight', 'slideInLeft', 'slideInRight');
        slide.style.display = "none";
      });

      nextSlide.classList.add('active');
      nextSlide.style.display = "block";
    }, 500);

    currentIndex = index;

    const currentSlideNumber = (index + 1).toString().padStart(2, "0");
    document.querySelector(".ednum").textContent = currentSlideNumber;
  }

  function nextSlide() {
    const newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex, 'next');
  }

  function prevSlide() {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(newIndex, 'prev');
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
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

  slides[currentIndex].classList.add('active');
  slides[currentIndex].style.display = "block";
  startAutoSlide();



    //Широкий слайдер

const topWrapper = document.querySelector('.swiper-wrapper:first-child');
const bottomWrapper = document.querySelector('.swiper-wrapper:last-child');

function initTopSlider(wrapper) {
  const slides = Array.from(wrapper.querySelectorAll('.swiper-slide'));
  const slideWidth = slides[0].offsetWidth;

  wrapper.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    slides.forEach(slide => {
      wrapper.appendChild(slide.cloneNode(true));
    });
  }

  const totalWidth = slideWidth * slides.length;
  let position = 0;
  const speed = 0.5;

  function animate() {
    position -= speed;

    if (Math.abs(position) >= totalWidth) {
      position = 0;
    }

    wrapper.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  animate();
}

function initBottomSlider(wrapper) {
  const slides = Array.from(wrapper.querySelectorAll('.swiper-slide'));
  const slideWidth = slides[0].offsetWidth;

  wrapper.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    slides.forEach(slide => {
      wrapper.appendChild(slide.cloneNode(true));
    });
  }

  const totalWidth = slideWidth * slides.length;
  let position = -totalWidth;
  const speed = 0.5;

  function animate() {
    position += speed;

    if (position >= 0) {
      position = -totalWidth;
    }

    wrapper.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  animate();
}

if (topWrapper) initTopSlider(topWrapper);
if (bottomWrapper) initBottomSlider(bottomWrapper);





  const feedbackForm = document.getElementById('form');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');

  feedbackForm.addEventListener('submit', (e) => {
      e.preventDefault();



      successMessage.style.display = 'none';
      errorMessage.style.display = 'none';

      const formData = new FormData(feedbackForm);

      fetch('https://formcarry.com/s/m1h-mKEGfLX', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
          },
          body: formData
      })
      .then(response => {
          if (response.ok) {
              successMessage.style.display = 'block';
              errorMessage.style.display = 'none';
              feedbackForm.reset();
          } else {
              successMessage.style.display = 'none';
              errorMessage.style.display = 'block';
          }
      })
      .catch(error => {
          successMessage.style.display = 'none';
          errorMessage.style.display = 'block';
          console.error('Ошибка:', error);
      });
  });

  });
