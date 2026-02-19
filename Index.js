
AOS.init();

var swiper = new Swiper(".mySwiper", {
slidesPerView: 4,
spaceBetween: 20,
slidesPerGroup: 4,
loop: false,
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
breakpoints: {
  0: { slidesPerView: 1, slidesPerGroup: 1 },
  576: { slidesPerView: 2, slidesPerGroup: 2 },
  768: { slidesPerView: 3, slidesPerGroup: 3 },
  992: { slidesPerView: 4, slidesPerGroup: 4 }
}
});

