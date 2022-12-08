$(function () {
    var sub_banner = $('#sub_banner').bxSlider({
        //mode: 'fade',
        slideWidth: 241,
        minSlides: 4,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin:20,
        auto: false,
        autoHover: true,
        controls: false,
        autoControls:false,
        pagerCustom: false,
        speed: 1000,
        //	autoControlsCombine: 'true',
        touchEnabled:(navigator.maxTouchPoints > 0)
    });

    $( '.banner_prev' ).on( 'click', function () {
        sub_banner.goToPrevSlide();
        return false;
    } );


    $( '.banner_next' ).on( 'click', function () {
        sub_banner.goToNextSlide();
        return false;
    } );

    $('.banner_prev').on('keydown', function(e){
        if(e.which == 9 && !e.shiftKey ){ // 탭키이동시
            sub_banner.reloadSlider({
                auto: false,
                infiniteLoop : false,
                slideWidth: 241,
                minSlides: 4,
                maxSlides: 4,
                moveSlides: 1,
                slideMargin:20,
                autoHover: true,
                controls: false,
                autoControls:false,
                pagerCustom: false
            });
        }
    });
});
$(document).ready(function(){
    $('.smallImg').find('a').each(function(){
        $(this).on('click',function(){
            $('.smallImg').find('a').removeClass('on');

            var className = $(this).attr("id");
            $('#'+className).addClass('on');
        });
    });

    /* var domainValue = "https://www.paju.go.kr/WEB-INF/jsp/user/mediaPaju/BD_photoInPajuList.jsp";
     var showPicture = 5;
     if(domainValue.indexOf("m.paju.go.kr") > -1){
     var wide_size = $(window).width();
     if( wide_size <= '399'){
     showPicture = 3;
     }else if( wide_size <= '499'){
     showPicture = 4;
     }else if( wide_size <= '599'){
     showPicture = 5;
     }else if( wide_size <= '699'){
     showPicture = 6;
     }else{
     showPicture = 7;
     }
     }else if(domainValue.indexOf("mayor.paju.go.kr") > -1){
     showPicture = 6;
     } */

    $('.bx-slider-sub').bxSlider({
        mode: 'fade',
        speed: 100,
        autoControlsCombine: 'true'
    });

    /* $('.media-photo-slider2').slick({
     dots: true,
     arrows : true,
     infinite: true,
     easing : 'easeOutQuint',
     speed : 1500,
     variableWidth: true,
     autoplay : true,
     autoplaySpeed : 3500,
     slidesToShow: showPicture,
     slidesToScroll: 1
     }); */

    //앞으로
    $(".bx-next").click(function () {
        $(".bx-pager-link").each(function(i) {
            if( $(this).attr("class").indexOf("active") > -1){

                $('.smallImg').find('a').each(function(){
                    if($(this).attr("id") == "THUM_"+i){
                        $(this).addClass("on");
                        $(this).focus(); //스크롤 이동을 위해 포커스 이동하고
                        $(".bx-next").focus();//다시 원포커스로 이동.
                    }else{
                        $(this).removeClass('on');
                    }
                });
            }
        });
    });

    //뒤로
    $(".bx-prev").click(function () {
        $(".bx-pager-link").each(function(i) {
            if( $(this).attr("class").indexOf("active") > -1){

                $('.smallImg').find('a').each(function(){
                    if($(this).attr("id") == "THUM_"+i){
                        $(this).addClass("on");
                        $(this).focus(); //스크롤 이동을 위해 포커스 이동하고
                        $(".bx-prev").focus();//다시 원포커스로 이동.
                    }else{
                        $(this).removeClass('on');
                    }
                });
            }
        });
    });

});

var jsPhotoView = function(photoIdx, photoSrc, photoAlt) {
    if(photoSrc != "") {
        $(".bx-pager-link").each(function(i) {
            if(photoIdx == i){
                $(this).click();
            }
        });
    }
};

