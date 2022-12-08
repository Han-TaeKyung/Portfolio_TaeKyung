$(function () {
    //gnb
    if (window.matchMedia("(min-width: 1025px)").matches) {
        $(".header_wrap > ul > li").bind("mouseenter focusin", function () {
            $(this).addClass("gnb_on").siblings().removeClass("gnb_on");
        });

        $(".header_wrap > ul > li").bind("mouseleave focusout", function () {
            $(this).removeClass("gnb_on");
        });

        $(".gnb_3dep").bind("mouseenter focusin", function () {
            $(this).addClass("gnb_3dep_on").siblings().removeClass("gnb_3dep_on");
        });

        $(".gnb_3dep").bind("mouseleave focusout", function () {
            $(this).removeClass("gnb_3dep_on");
        });

        //search 버튼
        $(".search_btn").click(function () {
            $(".search_box").show();
        });
    }else {
        $(".m_gnb").click(function () {
            $(".header_wrap").show();
            $("#header").css("position","fixed");
            $(".m_gnb").hide();
            $(".m_gnb_close").show();
            $(".m_search").hide();
            $(".m_searchBtn").show();
            $(".m_search_close").hide();
        });

        $(".m_gnb_close").click(function () {
            $(".header_wrap").hide();
            $("#header").css("position","inherit");
            $(".m_gnb").show();
            $(".m_gnb_close").hide();
        });
        $(".header_wrap > ul > li").bind("click", function () {
            $(this).addClass("m_gnb_on").siblings().removeClass("m_gnb_on");
        });
        $(".gnb_3dep").bind("click", function () {
            $(this).toggleClass("gnb_3dep_on").siblings().removeClass("gnb_3dep_on");
        });

        $(".m_searchBtn").click(function () {
           $(".m_search").show();
           $(".m_searchBtn").hide();
           $(".m_search_close").show();
            $(".header_wrap").hide();
            $("#header").css("position","inherit");
            $(".m_gnb").show();
            $(".m_gnb_close").hide();
        });
        $(".m_search_close").click(function () {
            $(".m_search").hide();
            $(".m_searchBtn").show();
            $(".m_search_close").hide();
        });
    };

    //footer
    var fb_slide = $('#fb_slide').bxSlider({
        auto: false,
        speed: 700,
        // mode:'vertical',
        controls: false,
        autoControls: false,
        pagerCustom: true,
        moveSlides: 1,
        slideWidth: 'auto',
        //minSlides: 3,
        maxSlides: 6

    });
    $('.fb_prev').on('keydown', function (e) {
        if (e.which == 9 && !e.shiftKey) { // 탭키이동시
            fb_slide.reloadSlider({
                auto: false,
                infiniteLoop: false,
                autoHover: false,
                pager: false,
                slideWidth: 'auto',
                slideMargin: 0,
                moveSlides: 1,
                maxSlides: 2,
                controls: false
            });
        }
    });


    $('.fb_prev').on('click', function () {
        fb_slide.goToPrevSlide();
        return false;
    });


    $('.fb_next').on('click', function () {
        fb_slide.goToNextSlide();
        return false;
    });
    $( '.fb_stop' ).on( 'click',function(){
        fb_slide.stopAuto();
        $('.fb_stop').hide();
        $('.fb_play').css('display','block');
        return false;
    });

    $( '.fb_play' ).on( 'click',function(){
        fb_slide.startAuto();
        $('.fb_play').hide();
        $('.fb_stop').css('display','block');
        return false;
    });


    $('.fs_next').click(function () {
        $('.footer_site').animate({right: '0'});
        $('.footer_site').addClass('fs_next_on');
        $('.footer_site').removeClass('fs_prev_on');
        $('.fs_prev').show();
        $('.fs_next').hide();
    });

    $('.fs_prev').click(function () {
        $('.footer_site').animate({left: '15px'});
        $('.footer_site').addClass('fs_prev_on');
        $('.footer_site').removeClass('fs_next_on');
        $('.fs_next').show();
        $('.fs_prev').hide();
    });

    //관련기관 배너모음 팝업
    $(".m_bannerBtn").click(function () {
        $(".m_banner").show();
        return false;
    });

    $(".m_banner_close").click(function () {
        $(".m_banner").hide();
        return false;
    });


});
