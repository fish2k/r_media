(function ($) {

    $(document).ready(function() {
        const tableSlider = new Swiper('.table-slider', {
            slidesPerView: 1,
    
            on: {
                init: function () {
                    console.log('ok');
                }
            }
        });

        // продолжаем писать JS туть
    });

})(jQuery)