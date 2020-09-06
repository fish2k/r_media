(function ($) {

  $(document).ready(function() {
    var body = $('body'),
        burger = $('.header-burger'),
        search = $('.header-search')

    burger.click(function () {
      body.toggleClass('state-nav')
    })


    const tableSlider = new Swiper('.table-slider', {
      slidesPerView: 1,
  
      on: {
        init: function () {
          //console.log('ok');
        }
      },
      
      pagination: {
        el: '.table-nav-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="table-nav-item '+ className +'">' + (index + 1) + '</span>';
        }
      },

      navigation: {
        prevEl: '.table-nav-prev',
        nextEl: '.table-nav-next'
      }
    });

    // продолжаем писать JS туть
  });

})(jQuery)