var swiper = new Swiper(".swiper", {
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: "auto",
    loop: false,
    slidesPerView: 1.4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      thresholdDelta: 70
    },
    breakpoints: {
      768: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      900: {
        spaceBetween: 30,
        slidesPerView: 3
      },
      1124: {
        spaceBetween: 30,
        slidesPerView: 4
      },
      1400: {
        spaceBetween: 30,
        slidesPerView: 5
      }
    }
  });
  let btns = document.querySelectorAll(".btn-more");
  let slides = document.querySelectorAll(".swiper-slide");
  let close = document.querySelectorAll(".close");
  
  for (let i = 0; i < slides.length; i++) {
    btns[i].addEventListener("click", function () {
      slides[i].classList.add("active");
    });
  }
  
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function () {
      slides[i].classList.remove("active");
    });
  }
  