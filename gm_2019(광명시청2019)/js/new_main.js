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

    //광명알리미
    $('#slide-counter02').prepend('<span class="current-index02"></span>/');

    var nt_slide = $('#nt_slide').bxSlider({
        auto: true,
        speed: 700,
        mode: 'fade',
        controls: false,
        autoControls: false,
        pagerCustom: true,
        onSliderLoad: function (currentIndex) {
            $('#slide-counter02 .current-index02').text(currentIndex + 1);
        },
        onSlideBefore: function ($slideElement, oldIndex, newIndex) {
            $('#slide-counter02 .current-index02').text(newIndex + 1);
        }
    });

    $('#nt_prev').on('click', function () {
        nt_slide.goToPrevSlide();
        return false;
    });


    $('#nt_next').on('click', function () {
        nt_slide.goToNextSlide();
        return false;
    });

    $('#nt_stop').on('click', function () {
        nt_slide.stopAuto();
        return false;

    });

    $('#nt_play').on('click', function () {
        nt_slide.startAuto();
        return false;
    });

    $('#nt_play').click(function () {
        $('#nt_stop').show();
        $('#nt_play').hide();
    });
    $('#nt_stop').click(function () {
        $('#nt_stop').hide();
        $('#nt_play').show().css("display", "block");
    });

    $('#slide-counter02').append(nt_slide.getSlideCount());


    $('#nt_more').click(function () {
        $('.nt_banner_popup').show();
        $('.mask').show();
    });
    $('.popupClose').click(function () {
        $('.nt_banner_popup').hide();
        $('.mask').hide();
    });



    //광명알리미 모바일
    $('#m_slide-counter02').prepend('<span class="m_current-index02"></span>/');

    var m_nt_slide = $('#m_nt_slide').bxSlider({
        auto: true,
        speed: 700,
        mode: 'fade',
        controls: false,
        autoControls: false,
        pagerCustom: true,
        onSliderLoad: function (currentIndex) {
            $('#m_slide-counter02 .m_current-index02').text(currentIndex + 1);
        },
        onSlideBefore: function ($slideElement, oldIndex, newIndex) {
            $('#m_slide-counter02 .m_current-index02').text(newIndex + 1);
        }
    });

    $('#m_nt_prev').on('click', function () {
        m_nt_slide.goToPrevSlide();
        return false;
    });


    $('#m_nt_next').on('click', function () {
        m_nt_slide.goToNextSlide();
        return false;
    });

    $('#m_nt_stop').on('click', function () {
        m_nt_slide.stopAuto();
        return false;

    });

    $('#m_nt_play').on('click', function () {
        m_nt_slide.startAuto();
        return false;
    });

    $('#m_nt_play').click(function () {
        $('#m_nt_stop').show();
        $('#m_nt_play').hide();
    });
    $('#m_nt_stop').click(function () {
        $('#m_nt_stop').hide();
        $('#m_nt_play').show().css("display", "block");
    });

    $('#m_slide-counter02').append(m_nt_slide.getSlideCount());


    $('#m_nt_more').click(function () {
        $('.nt_banner_popup').show();
        $('.mask').show();
    });
    $('.popupClose').click(function () {
        $('.nt_banner_popup').hide();
        $('.mask').hide();
    });

    //오늘의 뉴스
    $('#slide-counter03').prepend('<span class="current-index03"></span>/');

    var news_slide = $('#news_slide').bxSlider({
        auto: true,
        speed: 700,
        mode: 'fade',
        controls: false,
        autoControls: false,
        pagerCustom: true,
        onSliderLoad: function (currentIndex) {
            $('#slide-counter03 .current-index03').text(currentIndex + 1);
        },
        onSlideBefore: function ($slideElement, oldIndex, newIndex) {
            $('#slide-counter03 .current-index03').text(newIndex + 1);
        }
    });

    $('#news_prev').on('click', function () {
        news_slide.goToPrevSlide();
        return false;
    });


    $('#news_next').on('click', function () {
        news_slide.goToNextSlide();
        return false;
    });

    $('#news_stop').on('click', function () {
        news_slide.stopAuto();
        return false;

    });

    $('#news_play').on('click', function () {
        news_slide.startAuto();
        return false;
    });

    $('#news_play').click(function () {
        $('#news_stop').show();
        $('#news_play').hide();
    });
    $('#news_stop').click(function () {
        $('#news_stop').hide();
        $('#news_play').show().css("display", "block");
    });

    $('#slide-counter03').append(news_slide.getSlideCount());


    $('#news_more').click(function () {
        $('.news_banner_popup').show();
        $('.mask').show();
    });
    $('.popupClose').click(function () {
        $('.news_banner_popup').hide();
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