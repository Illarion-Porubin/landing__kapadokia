$(function () {
  $('.fairy-tail__slider, .our-trip__slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
    autoplay: true, /*автоматическое перелистование*/
    fade: true, /*изменение анимации перелистования*/
    
    responsive: [
      {
        breakpoint: 601,
        settings: {
          arrows: false
        }
      },
    ]
  });
});

$(".menu,.our-trip__bode").on("click","a", function (event) /*обязательно указать класс родитель для хука*/ {
  //отменяем стандартную обработку нажатия по ссылке
  event.preventDefault(); /*отменяет стандартный переход по ссылке*/
  //забираем идентификатор бока с атрибута href
  var id  = $(this).attr('href'),
  //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
  //анимируем переход на расстояние - top за 1500 мс
  $('body,html').animate({scrollTop: top}, 1500);
});
