
const swiper = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
  effect: 'cube',
  cubeEffect: {
    slideShadows: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

