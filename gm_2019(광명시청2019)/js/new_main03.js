$(function() {
    //메인비주얼
    $('#slide-counter').prepend('<span class="current-index"></span>/');

    var main01_slide = $('#main01_slide').bxSlider({
        auto: true,
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

    $('.prev').on('click', function () {
        main01_slide.goToPrevSlide();
        return false;
    });


    $('.next').on('click', function () {
        main01_slide.goToNextSlide();
        return false;
    });

    $('.stop').on('click', function () {
        main01_slide.stopAuto();
        return false;

    });

    $('.play').on('click', function () {
        main01_slide.startAuto();
        return false;
    });

    $('.play').click(function () {
        $('.stop').show();
        $('.play').hide();
    });
    $('.stop').click(function () {
        $('.stop').hide();
        $('.play').show().css("display", "block");
    });

    $('#slide-counter').append(main01_slide.getSlideCount());


    $('.banner_all').click(function () {
        $('.all_banner').show();
        $('.mask').show();
    });
    $('.popupClose').click(function () {
        $('.popupBanner').hide();
        $('.mask').hide();
    });
});
//탭
jQuery(function($) {
    var tab = $('.tab_list');
    //tab.removeClass('js_off');
    tab.css('height', tab.find('>ul>li>ul:visible').height() + 40);
    function onSelectTab() {
        var t = $(this);
        var myClass = t.parent('li').attr('class');
        t.parents('.tab_list:first').attr('class', 'tab_list ' + myClass);
        tab.css('height', t.next('ul').height() + 40);
    }

    tab.find('>ul>li>a').click(onSelectTab).focus(onSelectTab);

});