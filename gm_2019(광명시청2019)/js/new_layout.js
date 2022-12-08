$(function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
        $(".header_gnb > div .gnb_wrap").bind("mouseenter focusin", function () {
            $(this).parent().addClass("gnb_on").siblings().removeClass("gnb_on");
        });

        $(".header_gnb ").bind("mouseleave focusout", function () {
            $(this).children().removeClass("gnb_on");
        });

        //20191007 gnb 작업 START
        $(".gnb_2dep .gnb_3dep").bind("click", function () {
            $(this).toggleClass("gnb_3dep_on").siblings().removeClass("gnb_3dep_on");
        });
        $(".gnb_2dep_1").bind("focusin", function () {
            $(".gnb_2dep_2 > li, .gnb_2dep_3 > li, .gnb_2dep_4 > li, .gnb_wrap_field .gnb_2dep > li").removeClass("gnb_3dep_on");
        });
        $(".gnb_2dep_2").bind("focusin", function () {
            $(".gnb_2dep_1 > li, .gnb_2dep_3 > li, .gnb_2dep_4 > li, .gnb_wrap_field .gnb_2dep > li").removeClass("gnb_3dep_on");
        });
        $(".gnb_2dep_3").bind("focusin", function () {
            $(".gnb_2dep_1 > li, .gnb_2dep_2 > li, .gnb_2dep_4 > li, .gnb_wrap_field .gnb_2dep > li").removeClass("gnb_3dep_on");
        });
        $(".gnb_2dep_4").bind("focusin", function () {
            $(".gnb_2dep_1 > li, .gnb_2dep_2 > li, .gnb_2dep_3 > li, .gnb_wrap_field .gnb_2dep > li").removeClass("gnb_3dep_on");
        });
        $(".gnb_wrap_field .gnb_2dep").bind("focusin", function () {
            $(".gnb_wrap_all .gnb_2dep > li").removeClass("gnb_3dep_on");
        });
        //20191007 gnb 작업 END

    } else {
        $(".m_gnb_open").click(function () {
            $(".header_top_menu, .m_gnb_top, .header_gnb").css("display", "block");
            $(".m_gnb_close").show();
            $(".m_gnb_open").hide();
        });
        $(".m_gnb_close").click(function () {
            $(".header_top_menu, .m_gnb_top, .header_gnb").css("display", "none");
            $(".m_gnb_close").hide();
            $(".m_gnb_open").show();
        });

        $(".m_searchBtn").click(function () {
            $(".h_search").toggleClass("m_search_block");

        });

        $(".header_gnb > div .gnb_wrap_all > li > a").click( function() {
            $(this).parent().addClass("m_on").siblings().removeClass("m_on");
        });

        $(".gnb_wrap_all .gnb_2dep .gnb_3dep > a").click( function() {
            $(this).parent().toggleClass("gnb_3dep_on").siblings().removeClass("gnb_3dep_on");
        });
        $(".gnb_wrap_all .gnb_4dep > a").click( function() {
            $(this).parent().toggleClass("gnb_4dep_on").siblings().removeClass("gnb_4dep_on");
        });

        $(".gnb_wrap_field .gnb_2dep > li > a").click( function() {
            $(this).parent().addClass("gnb_3dep_on02").siblings().removeClass("gnb_3dep_on02");
        });

        $(".gnb_wrap_field .gnb_3dep .gnb_4dep > a").click( function() {
            $(this).parent().toggleClass("gnb_4dep_on02").siblings().removeClass("gnb_4dep_on02");
        });
        $(".gnb_wrap_field .gnb_5dep > a").click( function() {
            $(this).parent().toggleClass("gnb_5dep_on").siblings().removeClass("gnb_5dep_on");
        });

        $(".m_gnbMenu").click(function () {
            $('.m_gnbMenu').addClass('m_gnb_fieldOn');
            $('.m_gnbField').removeClass('m_gnb_fieldOn');
            $('#gnb').show();
            $('.gnb_wrap_field').hide();
        });

        $(".m_gnbField").click(function () {
            $('.m_gnbField').addClass('m_gnb_fieldOn');
            $('.m_gnbMenu').removeClass('m_gnb_fieldOn');
            $('#gnb').hide();
            $('.gnb_wrap_field').show();
        });

    }
    $(".lg ").click(function () {
        $('.lg ul').toggleClass('lg_show');
    });


    //푸터
    var footerSlider = $('#footer_slider').bxSlider({
        auto: true,
        speed: 700,
        //mode:'fade',
        touchEnabled:false,
        controls: false,
        autoControls:false,
        pagerCustom: true,
        //minSlides: 6,
        maxSlides: 5,
        moveSlides: 1,
        slideWidth: 212,
        slideMargin: 30
    });

    $( '#footer_prev' ).on( 'click', function () {
        footerSlider.goToPrevSlide();
        return false;
    });

    $( '#footer_next' ).on( 'click', function () {
        footerSlider.goToNextSlide();
        return false;
    });

    $( '#footer_pause' ).on( 'click',function(){
        footerSlider.stopAuto();
        $('#footer_play').show();
        $('#footer_pause').hide();
        return false;
    });

    $( '#footer_play' ).on( 'click',function(){
        footerSlider.startAuto();
        $('#footer_play').hide();
        $('#footer_pause').show();
        return false;
    });

    $(".footer_link_wrap > li > a").click(function () {
        $(this).parent().toggleClass("footer_on").siblings().removeClass("footer_on");
        return false;
    });

    $('#footer_prev').on('keydown', function(e){
        if(e.which == 9 && !e.shiftKey ){ // 탭키이동시
            footerSlider.reloadSlider({
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

    //lnb  20190827 수정
    $(".lnb_1depth > a").bind("click", function () {
        $(this).parent().toggleClass("lnb_1dep_on").siblings().removeClass("lnb_1dep_on");
    });
    $(".lnb_2depth > a").bind("click", function () {
        $(this).parent().toggleClass("lnb_2dep_on").siblings().removeClass("lnb_2dep_on");
    });


});
