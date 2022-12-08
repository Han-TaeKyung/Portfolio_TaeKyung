$(function () {
    //카드배너
    $('#banner-counter').prepend('<span class="current-index"></span> / ');
    var banner = $('#banner').bxSlider({
        mode: 'fade',
        auto: true,
        autoHover: true,
        controls: false,
        autoControls:false,
        pagerCustom: true,
        speed: 1000,
//		autoControlsCombine: 'true',
        touchEnabled:(navigator.maxTouchPoints > 0),
        onSliderLoad: function (currentIndex){
            $('#banner-counter .current-index').text(currentIndex + 1);
        },
        onSlideBefore: function ($slideElement, oldIndex, newIndex){
            $('#banner-counter .current-index').text(newIndex + 1);
        }
    });

    $( '.banner_prev' ).on( 'click', function () {
        banner.goToPrevSlide();
        return false;
    } );


    $( '.banner_next' ).on( 'click', function () {
        banner.goToNextSlide();
        return false;
    } );

    $( '.banner_stop' ).on( 'click',function(){
        banner.stopAuto();
        return false;

    });

    $( '.banner_play' ).on( 'click',function(){
        banner.startAuto();
        return false;
    });

    $('.banner_play').click(function(){
        $('.banner_stop').show();
        $('.banner_play').hide();
    });
    $('.banner_stop').click(function(){
        $('.banner_stop').hide();
        $('.banner_play').show().css("display","block");
    });
    $('#banner-counter').append(banner.getSlideCount());


    $("#card_banner_btn").click(function () {
        $("#card_banner_popup").show();
        return false;
    });
    $(".btn-close-modal").click(function () {
        $("#card_banner_popup").hide();
        $('#card_banner_btn').focus();
        return false;
    });
});
//보도시보 탭
jQuery(function($){
    var tab = $('.tab_list');
    //tab.removeClass('js_off');
    tab.css('height', tab.find('>ul>li>ul:visible').height()+40);
    function onSelectTab(){
        var t = $(this);
        var myClass = t.parent('li').attr('class');
        t.parents('.tab_list:first').attr('class', 'tab_list '+myClass);
        tab.css('height', t.next('ul').height()+40);
    }
    tab.find('>ul>li>a').click(onSelectTab).focus(onSelectTab);
});
