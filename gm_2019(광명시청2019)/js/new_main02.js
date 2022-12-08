$(function () {
    //제안하는 시민
    var tab_slider01 = $('#tab_slider01').bxSlider({
        auto: false,
        speed: 700,
        //mode:'fade',
        touchEnabled:navigator.maxTouchPoints > 0,
        controls: false,
        autoControls:false,
        pagerCustom: true,
        //minSlides: 6,
        maxSlides: 2,
        moveSlides: 1,
        slideWidth: 280,
        slideMargin: 16

    });

    $( '#tab_prev01' ).on( 'click', function () {
        tab_slider01.goToPrevSlide();
        return false;
    });

    $( '#tab_next01' ).on( 'click', function () {
        tab_slider01.goToNextSlide();
        return false;
    });

    $( '#tab_stop01' ).on( 'click',function(){
        tab_slider01.stopAuto();
        $('#tab_play01').css('display','block');
        $('#tab_stop01').hide();
        return false;
    });

    $( '#tab_play01' ).on( 'click',function(){
        tab_slider01.startAuto();
        $('#tab_play01').hide();
        $('#tab_stop01').show();
        return false;
    });

    //토론하는 시민
    var tab_slider02 = $('#tab_slider02').bxSlider({
        auto: false,
        speed: 700,
        //mode:'fade',
        touchEnabled:navigator.maxTouchPoints > 0,
        controls: false,
        autoControls:false,
        pagerCustom: true,
        //minSlides: 6,
        maxSlides: 2,
        moveSlides: 1,
        slideWidth: 280,
        slideMargin: 16

    });

    $( '#tab_prev02' ).on( 'click', function () {
        tab_slider02.goToPrevSlide();
        return false;
    });

    $( '#tab_next02' ).on( 'click', function () {
        tab_slider02.goToNextSlide();
        return false;
    });

    $( '#tab_stop02' ).on( 'click',function(){
        tab_slider02.stopAuto();
        $('#tab_play02').css('display','block');
        $('#tab_stop02').hide();
        return false;
    });

    $( '#tab_play02' ).on( 'click',function(){
        tab_slider02.startAuto();
        $('#tab_play02').hide();
        $('#tab_stop02').show();
        return false;
    });


    $(".tab_title01").click(function () {
        $("#tab_slider01").css('display','block');
        $(".tab_btn01").show();
        $("#tab_slider02").hide();
        $(".tab_btn02").hide();
        $(".tab_title01").addClass('tab_title_on');
        $(".tab_title02").removeClass('tab_title_on');
    });

    $(".tab_title02").click(function () {
        $("#tab_slider02").css('display','block');
        $(".tab_btn02").show();
        $("#tab_slider01").hide();
        $(".tab_btn01").hide();
        $(".tab_title02").addClass('tab_title_on');
        $(".tab_title01").removeClass('tab_title_on');
    });
});
