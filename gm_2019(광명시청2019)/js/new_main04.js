$(function() {
    var main_05_banner01 = $('#main_05_banner01').bxSlider({
        auto: true,
        speed: 700,
        mode: 'fade',
        controls: false,
        autoControls: true,
        pagerCustom: false
    });

    $('.main05_prev').on('click', function () {
        main_05_banner01.goToPrevSlide();
        return false;
    });


    $('.main05_next').on('click', function () {
        main_05_banner01.goToNextSlide();
        return false;
    });

    $('.main05_banner01 .bx-stop').click(function () {
        $('.bx-stop').hide();
        $('.bx-start').css('display', 'block');
    });
    $('.main05_banner01 .bx-start').click(function () {
        $('.bx-start').hide();
        $('.bx-stop').css('display', 'block');
    });


    //광명8경
    $('#slide-counter').prepend('<span class="current-index"></span>/');

    var main_05_banner02 = $('#main_05_banner02').bxSlider({
        auto: false,
        speed: 700,
        mode: 'fade',
        controls: false,
        autoControls: false,
        pagerCustom: true,
        onSliderLoad: function (currentIndex) {
            $('#slide-counter .current-index').text(currentIndex + 1);
        },
        onSlideBefore: function ($slideElement, oldIndex, newIndex) {
            $('#slide-counter .current-index').text(newIndex + 1);
        }
    });

    $('.main05_prev02').on('click', function () {
        main_05_banner02.goToPrevSlide();
        return false;
    });


    $('.main05_next02').on('click', function () {
        main_05_banner02.goToNextSlide();
        return false;
    });

    $('#slide-counter').append(main_05_banner02.getSlideCount());

});
