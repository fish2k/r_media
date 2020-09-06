(function ($) {

  $(document).ready(function() {
    var body = $('body'),
        burger = $('.header-burger'),
        searchResponsive = $('.responsive-search')

    burger.click(function () {
      body.removeClass('state-search')
      body.toggleClass('state-nav')
    })

    searchResponsive.click(function () {
      body.removeClass('state-nav')
      body.toggleClass('state-search')

      $('.search-form-style').focus()
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