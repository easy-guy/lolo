var wow = new WOW({
  boxClass: "wow", // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
  animateClass: "animated", // класс для анимации элемента (по умолчанию, animated)
  offset: 0, // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
  mobile: false, // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
  live: true, // поддержка асинхронно загруженных элементов (по умолчанию, включена)
  callback: function(box) {
    // функция срабатывает каждый раз при старте анимации
    // аргумент box — элемент, для которого была запущена анимация
  },
  scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
});
wow.init();

$(document).ready(function() {
  $(".skills").waypoint(
    function() {
      $(".chart").each(function() {
        $(this).easyPieChart({
          barColor: function(percent) {
            return "hsl(" + Math.round(percent) * 1.2 + ", 100%, 45%)";
          },
          // The color of the track for the bar, false to disable rendering.
          trackColor: "transparent",
          // The color of the scale lines, false to disable rendering.
          scaleColor: false,
          // Defines how the ending of the bar line looks like. Possible values are: butt, round and square.
          lineCap: " butt ",
          // Width of the bar line in px.
          lineWidth: 10,
          // Size of the pie chart in px. It will always be a square.
          size: 140,
          // Time in milliseconds for a eased animation of the bar growing, or false to deactivate.
          animate: 2000,
          // Callback function that is called at the start of any animation (only if animate is not false).
          onStart: $.noop,
          // Callback function that is called at the end of any animation (only if animate is not false).
          onStop: $.noop
        });
      });
    },
    { offset: "80%" }
  );
});

$(document).ready(function() {
  $("#header").sticky({
    topSpacing: 0
  });
});

$(document)
  .ready(function() {
    var eqElement = ".section_3__abiluty_card, .carousel-item  ";
    equalheight(eqElement);
  })
  .resize(function() {
    equalheight(eqElement);
  });

jQuery(document).ready(function() {
  jQuery("a.scrollto").click(function() {
    elementClick = jQuery(this).attr("href");
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate(
      {
        scrollTop: destination
      },
      1000
    );
    return false;
  });
});

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<div></div>", "<div></div>"],
    autoplay: false,
    autoplayHoverPause: true,
    autoHeight: false,
    dots: false,
    smartSpeed: 500,
    autoplayTimeout: 3000,
    items: 1
  });
});

// window.addEventListener('scroll', function(e) {
// $(document).ready(function () {
//   var eqElement = ".section_3__abiluty_card, .carousel-item  "
//   equalheight(eqElement);
// }).resize(function () {
//   equalheight(eqElement);
// });

//   if( $(window).scrollTop() <= 100) {
//       $('.wow').removeClass('animated');
//       $('.wow').removeAttr('style');
//       new WOW().init();
//   }

// });
