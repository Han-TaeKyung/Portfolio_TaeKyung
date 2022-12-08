$(function () {
    //서브로케이션
    $(window).resize(function(){ //리사이징
        if (window.matchMedia("(min-width: 1199px)").matches) {
            //로케이션
            var jbOffset = $( '.location' ).offset();
            $( window ).scroll( function() {
                if ( $( document ).scrollTop() >= jbOffset.top ) {
                    $( '.location' ).addClass( 'locationFixed' );
                    $( '.sub_container' ).addClass( 'pt_56' );
                }
                else {
                    $( '.location' ).removeClass( 'locationFixed' );
                    $( '.sub_container' ).removeClass( 'pt_56' );
                }
            });
        } else {
            //로케이션
            var jbOffset = $( '.location' ).offset();
            $( window ).scroll( function() {
                if ( $( document ).scrollTop() >= jbOffset.top ) {
                    $( '.location' ).removeClass( 'locationFixed' );
                    $( '.sub_container' ).removeClass( 'pt_56' );
                }
                else {
                    $( '.location' ).removeClass( 'locationFixed' );
                    $( '.sub_container' ).removeClass( 'pt_56' );
                }
            });
        }
    });
    if (window.matchMedia("(min-width: 1199px)").matches) {
        //로케이션
        var jbOffset = $( '.location' ).offset();
        $( window ).scroll( function() {
            if ( $( document ).scrollTop() >= jbOffset.top ) {
                $( '.location' ).addClass( 'locationFixed' );
                $( '.sub_container' ).addClass( 'pt_56' );
            }
            else {
                $( '.location' ).removeClass( 'locationFixed' );
                $( '.sub_container' ).removeClass( 'pt_56' );
            }
        });

    } else {
        //로케이션
        var jbOffset = $( '.location' ).offset();
        $( window ).scroll( function() {
            if ( $( document ).scrollTop() >= jbOffset.top ) {
                $( '.location' ).removeClass( 'locationFixed' );
                $( '.sub_container' ).removeClass( 'pt_56' );
            }
            else {
                $( '.location' ).removeClass( 'locationFixed' );
                $( '.sub_container' ).removeClass( 'pt_56' );
            }
        });
    }

    /*info_box*/
    $.fn.info_box = function(){
        var tar = $(this).closest('.info_box');
        var foldingChk = tar.hasClass('on');

        if (foldingChk){
            tar.removeClass('on');
            tar.find('dt > .btn_detail .action');
        } else {
            tar.addClass('on');
            tar.find('dt > .btn_detail .action');
        }
    };

    $('.info_box dt > .btn_detail').click(function(){
        $(this).info_box();
        return false;
    });

    $(".more_close").click(function () {
        $(".more_info").hide();
        $(".more_open").css("display", "block");
        $(".more_close").hide();
        return false;
    });


    $(".more_open").click(function () {
        $(".more_info").show();
        $(".more_open").hide();
        $(".more_close").css("display", "block");
        return false;
    });

    //팝업
    $("#time_popup").click(function () {
       $(".holiday_popup").show();
       $("#mask").show();
        return false;

    });
    $("#reserv_popup").click(function () {
        $(".reserv_popup").show();
        $("#mask").show();
        return false;
    });

    $("#cancel_btn").click(function () {
        $(".cancel_popup").show();
        return false;
    });

    $(".mypage_minfo").click(function () {
        $(".calender_popup").show();
        $("#mask").show();
        return false;
    });
    $("#area_btn").click(function () {
        $(".area_popup").show();
        $("#mask").show();
        return false;
    });
    $("#stateBtn").click(function () {
        $(".state_p").show();
        $("#mask").show();
        return false;
    });


    $("#school_btn").click(function () {
        $(".school_popup").show();
        return false;
    });
    $("#confim_btn").click(function () {
        $(".confim_popup").show();
        $("#mask").show();
        return false;
    });

    $(".popupClose").click(function () {
        $(".holiday_popup").hide();
        $(".reserv_popup").hide();
        $(".calender_popup").hide();
        $(".confim_popup").hide();
        $("#mask").hide();
        return false;
    });

    $(".popup_close").click(function () {
        $(".cancel_popup").hide();
        $(".school_popup").hide();
        return false;
    });



    //시설안내 슬라이드

    var center_slider = $('#center_slider').bxSlider({
        auto: false,
        speed: 700,
        //mode:'fade',
        //touchEnabled:navigator.maxTouchPoints > 0,
        controls: false,
        autoControls:false,
        pagerCustom: true,
        //minSlides: 6,
        maxSlides: 4,
        moveSlides: 1,
        slideWidth: 255,
        slideMargin: 20

    });

    $( '.slider_prev' ).on( 'click', function () {
        center_slider.goToPrevSlide();
        return false;
    });

    $( '.slider_next' ).on( 'click', function () {
        center_slider.goToNextSlide();
        return false;
    });

    //전체지역
    $(".area_btn").click(function () {
        $(".area_wrap .area_chk").toggleClass("area_block");
        return false;
    });

    //예약현황 팝업 탭
    $(".tab_btn01").click(function () {
        $(".popup_wrap > div").hide();
        $(".tab_popup01").show();
        $(".tab li").removeClass("tab_on");
        $(".tab_btn01").addClass("tab_on");
    });

    $(".tab_btn02").click(function () {
        $(".popup_wrap > div").hide();
        $(".tab_popup02").show();
        $(".tab li").removeClass("tab_on");
        $(".tab_btn02").addClass("tab_on");
    });

    //갤러리 게시판 상세
    var galler_slider = $('#galler_slider').bxSlider({
        auto: false,
        speed: 700,
        mode:'fade',
        touchEnabled:navigator.maxTouchPoints > 0,
        controls: false,
        autoControls:false,
        pagerCustom: true

    });

    $( '.gallery_prev' ).on( 'click', function () {
        galler_slider.goToPrevSlide();
        return false;
    });

    $( '.gallery_next' ).on( 'click', function () {
        galler_slider.goToNextSlide();
        return false;
    });

    //툴팁

    $(".tooltip > a").bind("click focus", function () {
        $(this).parent().toggleClass("tooltip_on");
    });


    $(".tooltip > a").bind("focusout", function () {
        $(this).parent().removeClass("tooltip_on");
    });


    //20200113 추가(이미지클릭시 레이어팝업)
    $(".center_i_img .imgPopup").click(function () {
        $(".imgPopup_con").show();
        $("#mask").show();
        return false;
    });

    $(".sliderPopup01").click(function () {
        $(".sliderPopup_con01").show();
        $("#mask").show();
        return false;
    });
    $(".imgPopup_close").click(function () {
        $(".imgPopup_con").hide();
        $(".sliderPopup_con").hide();
        $("#mask").hide();
        return false;
    });
    //20200113 추가(이미지클릭시 레이어팝업) END
});

$(document).ready(function(){
    var lastEvent = null;
    var slide  = ".faq_list_wrap > li > ul";
    var alink  = ".faq_list_wrap > li > a";

    function accordion(){
        if (this == lastEvent) return false;
        lastEvent = this;
        setTimeout(function() {lastEvent = null}, 200);

        if ($(this).attr('class') != 'faq_on') {
            $(slide).slideUp();
            $(this).next(slide).slideDown();
            $(alink).removeClass('faq_on');
            $(this).addClass('faq_on');
        } else if ($(this).next(slide).is(':hidden')) {
            $(slide).slideUp();
            $(this).next(slide).slideDown();

        } else {
            $(this).next(slide).slideUp();
            $(alink).removeClass('faq_on');
        }
    }

    $(alink).click(accordion).focus(accordion);
});

