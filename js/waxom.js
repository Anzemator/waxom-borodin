$('.slider').slick({
	infinite: true,
	dots: true,
	dotsClass: "title__dots",
	nextArrow: '<span class="icon-right-arrow right-arrow"></span>',
	prevArrow: '<span class="icon-left-arrow left-arrow"></span>',

});
$('.cards__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  nextArrow: '<div class="nav-icon-right nav-icon-hover"><span class="icon-right-arrow nav-arrow"></span></div>',
  prevArrow: '<div class="nav-icon-left nav-icon-hover"><span class="icon-left-arrow nav-arrow"></span></div>',
   responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
      }
    },
   ]
});
$('.img-slider').slick({
	infinite: true,
	dots: true,
	dotsClass: "img__dots",
	arrows: false,
});