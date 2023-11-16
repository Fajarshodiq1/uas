//mobile nav
const mobileNav = document.querySelector(".mnav");
const closeBtn = document.querySelector(".mnav__close-btn");
const closeBtnIcn = document.querySelector(".mnav__close-btn-icon");

const navOpenedClass = "left-0";
const navClosedClass = "-left-[300px]";
const arrowLeftClass = "ri-arrow-left-s-line";
const arrowRightClass = "ri-arrow-right-s-line";

closeBtn.addEventListener("click", () => {
  if (mobileNav.classList.contains(navClosedClass)) {
    mobileNav.classList.remove(navClosedClass);
    mobileNav.classList.add(navOpenedClass);

    closeBtnIcn.classList.remove(arrowRightClasfgfs);
    closeBtnIcn.classList.add(arrowLeftClass);
  } else {
    mobileNav.classList.remove(navOpenedClass);
    mobileNav.classList.add(navClosedClass);

    closeBtnIcn.classList.remove(arrowLeftClass);
    closeBtnIcn.classList.add(arrowRightClass);
  }
});
// SWIPER
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slideChangeTransitionEnd: function () {
      const isFirstSlide = this.isBeginning;
      const isLastSlide = this.isEnd;

      // Disable swiping to the left on the first slide
      if (isFirstSlide) {
        this.allowSlidePrev = false;
      } else {
        this.allowSlidePrev = true;
      }

      // Disable swiping to the right on the last slide
      if (isLastSlide) {
        this.allowSlideNext = false;
      } else {
        this.allowSlideNext = true;
      }
    },
  },
});
// Create a ScrollReveal instance
const scrollReveal = new ScrollReveal();

// Configure the ScrollReveal instance
scrollReveal.reveal(".hero__text", {
  duration: 1000,
  distance: "50px",
  easing: "ease-in-out",
  origin: "bottom",
  interval: 500,
});
scrollReveal.reveal(".hero__img", {
  duration: 1000,
  distance: "50px",
  easing: "ease-in-out",
  origin: "bottom",
  interval: 500,
});
scrollReveal.reveal(".stats__item", {
  duration: 1000,
  distance: "50px",
  easing: "ease-in-out",
  origin: "bottom",
  interval: 500,
});
scrollReveal.reveal(".services__top", {
  duration: 1000,
  distance: "50px",
  easing: "ease-in-out",
  origin: "bottom",
  interval: 500,
});
