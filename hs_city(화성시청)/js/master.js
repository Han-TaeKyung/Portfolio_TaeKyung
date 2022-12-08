//상세검색
$(function () {
    $(".search_detail .search_detailBtn").click( function() {
        $(this).parent().toggleClass("search_d_on");
        return false;
    });
});

//gnb
$(function (){
    if (window.matchMedia("(min-width: 1200px)").matches) {
        $(".header_gnb > ul > .gnb").bind("mouseenter focusin", function() {
            $(this).addClass("on").siblings().removeClass("on");
            $(".mask").show();
        });

        $(".header_gnb > ul > .gnb ").bind("mouseleave focusout", function() {
            $(this).removeClass("on");
            $(".mask").hide();
        });
    };

    //gnb 모바일
    if (window.matchMedia("(max-width: 1199px)").matches) {
        $(".header_gnb > ul > .gnb").click( function() {
            $(this).addClass("on").siblings().removeClass("on");
        });

        $(".header_gnb > ul > .gnb ").bind("", function() {
            $(this).removeClass("on");
        });

    };

    $(".gnb_menu_con > ul > .gnb_3dep").click(function() {
        $(this).addClass("on_3dep").siblings().removeClass("on_3dep");
    });

     $(".gnb_menu_con > ul > .gnb_3dep").bind("mouseleave", function() {
         $(this).removeClass("on_3dep");
     });

    $(".m_gnb_btn").click(function () {
        $(".header_gnb").addClass("header_gnb_on");
        $(".mask").show();
    });
    $(".close_gnb").click(function () {
        $(".header_gnb").removeClass("header_gnb_on");
        $(".mask").hide();
    });
    //gnb 모바일 END

    $(".field .field_down").click(function () {
        $(".field_wrap").show();
        $(".main_container").css({'margin-top' : 140});
        $(".sub_container").css({'margin-top' : 112});
        $(".field_down").hide();
        $(".field_up").show();
    });

    $(".field .field_up").click(function () {
        $(".field_wrap").hide();
        $(".main_container").css({'margin-top' : 28});
        $(".sub_container").css({'margin-top' : 0});
        $(".field_down").show();
        $(".field_up").hide();
    });

    //푸터 직속기관, 패밀리사이트
    $(".fb_site > ul > li ").bind("mouseenter focusin", function() {
        $(this).addClass("fb_on").siblings().removeClass("fb_on");
    });

    $(".fb_site > ul > li ").bind("mouseleave focusout", function() {
        $(this).removeClass("fb_on");
    });

    //푸터 배너
    var fb_banner_slide = $('#fb_banner_slide').bxSlider({
        auto: true,
        speed: 700,
        //mode:'fade',
        touchEnabled:false,
        controls: false,
        autoControls:false,
        pager: false,
        moveSlides: 1,
        slideWidth: 206,
        //minSlides: 6,
        maxSlides: 3,
        slideMargin: 0
    });
    //20181114 추가
    $('.fb_btn_all').on('keydown', function(e){
        if(e.which == 9 && !e.shiftKey ){ // 탭키이동시
            fb_banner_slide.reloadSlider({
                auto: false,
                infiniteLoop : false,
                autoHover : false,
                pager:false,
                slideWidth: 'auto',
                slideMargin:0,
                moveSlides: 1,
                maxSlides: 3,
                controls: false
            });
        }
    });
    //20181114 추가 END

    $( '#fb_prev' ).on( 'click', function () {
        fb_banner_slide.goToPrevSlide();
        return false;
    } );

    $( '#fb_next').on( 'click', function () {
        fb_banner_slide.goToNextSlide();
        return false;
    } );

    $( '#fb_pause' ).on( 'click',function(){
        fb_banner_slide.stopAuto();
        return false;
    });

    $( '#fb_play' ).on( 'click',function(){
        fb_banner_slide.startAuto();
        return false;
    });

    $('#fb_play').click(function(){
        $('#fb_pause').show();
        $('#fb_play').hide();
    });
    $('#fb_pause').click(function(){
        $('#fb_pause').hide();
        $('#fb_play').show();
    });
});


$(function () {
    $(".sta_wrap > ul > .snb_menu").bind("mouseenter focusin", function() {
        $(this).addClass("snb_on").siblings().removeClass("snb_on");
    });

    $(".sta_wrap > ul > .snb_menu ").bind("mouseleave focusout", function() {
        $(this).removeClass("snb_on");
    });
});

//lnb
$(document).ready(function(){
    var lastEvent = null;
    var slide  = ".lnb_menu > ul > li > ul";
    var alink  = ".lnb_menu > ul > li > a";

    function accordion(){
        if (this == lastEvent) return false;
        lastEvent = this;
        setTimeout(function() {lastEvent = null}, 200);

        if ($(this).attr('class') != 'lnb_on') {
            $(slide).slideUp();
            $(this).next(slide).slideDown();
            $(alink).removeClass('lnb_on');
            $(this).addClass('lnb_on');
        } else if ($(this).next(slide).is(':hidden')) {
            $(slide).slideUp();
            $(this).next(slide).slideDown();

        } else {
            $(this).next(slide).slideUp();
            $(alink).removeClass('lnb_on');
        }
    }
    $(alink).click(accordion).focus(accordion);
    $('.lnb_menu > ul > li:last > a').addClass('stay');
});



$(function () {
    //로그인 탭
    $(".login_tab01").click(function () {
        $(".login_con02").hide();
        $(".login_con01").show();
        $(".login_tab02").removeClass("login_tabOn");
        $(".login_tab01").addClass("login_tabOn");
    }) ;
    $(".login_tab02").click(function () {
        $(".login_con01").hide();
        $(".login_con02").show();
        $(".login_tab01").removeClass("login_tabOn");
        $(".login_tab02").addClass("login_tabOn");
    }) ;

    //아이디중복확인
    $(".id_popupBtn").click(function () {
        $(".id_popup").show();
        $(".mask02").show();
    }) ;
    $(".popup_close").click(function () {
        $(".id_popup").hide();
        $(".mask02").hide();
    }) ;
});


$(function(){
    //메인비주얼
    $('#slide-counter').prepend('<span class="current-index"></span><img src="../img/main/num_line.png" alt="|">');

    var main_slider = $('#main_v_slide').bxSlider({
        auto: true,
        speed: 700,
        mode:'fade',
        controls: false,
        autoControls:false,
        pagerCustom: true,
        onSliderLoad: function (currentIndex){
            $('#slide-counter .current-index').text(currentIndex + 1);
        },
        onSlideBefore: function ($slideElement, oldIndex, newIndex){
            $('#slide-counter .current-index').text(newIndex + 1);
        }
    });

    $( '#main_v_prev' ).on( 'click', function () {
        main_slider.goToPrevSlide();
        return false;
    } );


    $( '#main_v_next' ).on( 'click', function () {
        main_slider.goToNextSlide();
        return false;
    } );

    //20181010 추가
    $( '#main_v_stop' ).on( 'click',function(){
        main_slider.stopAuto();
        return false;

    });

    $( '#main_v_play' ).on( 'click',function(){
        main_slider.startAuto();
        return false;
    });

    $('#main_v_play').click(function(){
        $('#main_v_stop').show();
        $('#main_v_play').hide();
    });
    $('#main_v_stop').click(function(){
        $('#main_v_stop').hide();
        $('#main_v_play').show().css("display","block");
    });

    //20181010 추가 END
    $('#slide-counter').append(main_slider.getSlideCount());


    //메인배너
    $('#banner-counter').prepend('<span class="current-index"></span><img src="../img/main/num_line.png" alt="|">');

    var banner_slider = $('#m_banner_box').bxSlider({
        auto: true,
        speed: 700,
        mode:'fade',
        controls: false,
        autoControls:false,
        pagerCustom: true,
        onSliderLoad: function (currentIndex){
            $('#banner-counter .current-index').text(currentIndex + 1);
        },
        onSlideBefore: function ($slideElement, oldIndex, newIndex){
            $('#banner-counter .current-index').text(newIndex + 1);
        }
    });

    $( '#banner_prev' ).on( 'click', function () {
        banner_slider.goToPrevSlide();
        return false;
    } );


    $( '#banner_next' ).on( 'click', function () {
        banner_slider.goToNextSlide();
        return false;
    } );

    //20181010 추가
    $( '#banner_stop' ).on( 'click',function(){
        banner_slider.stopAuto();
        return false;

    });

    $( '#banner_play' ).on( 'click',function(){
        banner_slider.startAuto();
        return false;
    });

    $('#banner_play').click(function(){
        $('#banner_stop').show();
        $('#banner_play').hide();
    });
    $('#banner_stop').click(function(){
        $('#banner_stop').hide();
        $('#banner_play').show().css("display","block");
    });

    //20181010 추가 END

    $('#banner-counter').append(banner_slider.getSlideCount());


    //구인정보
    var work_slide = $('#work_slide').bxSlider({
        auto: false,
        speed: 700,
        //mode:'fade',
        touchEnabled:false,
        controls: false,
        autoControls:false,
        pager: false,
        moveSlides: 1,
        slideWidth: 280,
        //minSlides: 6,
        maxSlides: 2,
        slideMargin: 20
    });

    $( '#work_prev' ).on( 'click', function () {
        work_slide.goToPrevSlide();
        return false;
    } );

    $( '#work_next').on( 'click', function () {
        work_slide.goToNextSlide();
        return false;
    } );


    //바로가기 모음
    var go_link_slide = $('#go_link_slide').bxSlider({
        auto: false,
        speed: 700,
        controls: false,
        autoControls:false,
        pagerCustom: true
    });


    // 20181114 추가
    $('.work_btn').on('keydown', function(e){
        if(e.which == 9 && !e.shiftKey ){ // 탭키이동시
            go_link_slide.reloadSlider({
                auto: false,
                infiniteLoop : false,
                autoHover : false,
                pager:false,
                controls: false
            });
        }
    });
    // 20181114 추가 END
    
    $( '#go_prev' ).on( 'click', function () {
        go_link_slide.goToPrevSlide();
        return false;
    } );


    $( '#go_next' ).on( 'click', function () {
        go_link_slide.goToNextSlide();
        return false;
    } );


});



//탭
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


