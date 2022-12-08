$(function(){
    var scrollBoxDiv=$("<div class='scroll_box'><button type='button'>↔ 좌,우로이동가능합니다.</button></div>");
	$('.scroll').append(scrollBoxDiv);
	$(".scroll_box button").on("touchstart",function(){
		$(this).parent(".scroll_box").hide();
	});
});


/* 참여현황보기 슬라이드 */
$(function () {
    var dash_slide = $('#dash_slide').bxSlider({
        auto: false,
        speed: 1000,
        //mode:'fade',
        controls: false,
        autoControls:false,
        pagerCustom: true,

    });
    $( '.prev01' ).on( 'click', function () {
        dash_slide.goToPrevSlide();
        return false;
    });

    $( '.next01' ).on( 'click', function () {
        dash_slide.goToNextSlide();
        return false;
    });

    var dash_slide02 = $('#dash_slide02').bxSlider({
        auto: false,
        speed: 1000,
        //mode:'fade',
        controls: false,
        autoControls:false,
        pagerCustom: true,

    });
    $( '.prev02' ).on( 'click', function () {
        dash_slide02.goToPrevSlide();
        return false;
    });

    $( '.next02' ).on( 'click', function () {
        dash_slide02.goToNextSlide();
        return false;
    });
});


$(function () {
    $(".chatSearch > a").click(function(){
        $(".chat_search").show();
        return false;
     });
    $(".chat_search_close").click(function(){
        $(".chat_search").hide();
        return false;
     });

    $(".chat_file_tab01").click(function(){
        $(".chat_file_tab li").removeClass("chat_file_tab_on");
        $(".chat_file_tab01").addClass("chat_file_tab_on");
        $(".file_wrap ul").hide();
        $(".file_images").show();
     });
    $(".chat_file_tab02").click(function(){
        $(".chat_file_tab li").removeClass("chat_file_tab_on");
        $(".chat_file_tab02").addClass("chat_file_tab_on");
        $(".file_wrap ul").hide();
        $(".file_files").show();
     });
    $(".chat_file_tab03").click(function(){
        $(".chat_file_tab li").removeClass("chat_file_tab_on");
        $(".chat_file_tab03").addClass("chat_file_tab_on");
        $(".file_wrap ul").hide();
        $(".file_link").show();
     });
    $(".chat_input_txt").bind("click", function() {
        $(this).parent().addClass("chat_input_on");
        $(".chat_content").addClass("chat_cont_height")
    });
    $(".chat_input_txt").bind("click", function() {
        $(this).parent().addClass("chat_input_on");
        $(".chat_cont_height02").addClass("chat_cont_height03")
    });
    $(".chat_input_txt").bind("focusout", function() {
        $(this).parent().removeClass("chat_input_on");
        $(".chat_content").removeClass("chat_cont_height")
        $(".chat_cont_height02").removeClass("chat_cont_height03")
    });
    $(".chat_reply_close").bind("click", function() {
        $(".chat_reply").hide();
        $(".chat_content").removeClass("chat_cont_height02")
        return false;
    });
    $(".chat_fileBtn").bind("click", function() {
        $(".chatFile").show();
        return false;
    });
    $(".chatFile_close").bind("click", function() {
        $(".chatFile").hide();
        return false;
    });

    $(".images_popup").click(function(){
        $(".file_images_popup").show();
        $(".mask").show();
     });
     $(".notice_more").click(function(){
        $(".notice_popup").show();
        $(".mask").show();
     });
    $(".popup_close").click(function(){
        $(".notice_popup").hide();
        $(".file_images_popup").hide();
        $(".mask").hide();
     });

     var chat = $(".chat_top").offset().top;
     $(window).scroll(function() {
           var window = $(this).scrollTop();
     
         if(chat <= window) {
           $(".chat_top").parent().addClass("fixed");


         } else {
           $(".chat_top").parent().removeClass("fixed");
         }
     });
   
    /* 관라자쪽에만 사용 S */
    $(".notice_reg").bind("click", function() {
        $(".chat_notice_req").show();
        $(".chat_content").addClass("chat_cont_height02");
        $(".notice_reg").addClass("notice_reg_on");
        return false;
    });
    $(".chat_notice_req_close").bind("click", function() {
        $(".notice_reg").removeClass("notice_reg_on");
        return false;
    });
   
    $(".part_menu_btn").bind("click", function() {
        $(this).parent().toggleClass("part_on");
    });
    $(".link_menu_btn").bind("click", function() {
        $(this).parent().toggleClass("link_on");
    });
    $(".chat_tab01").click(function(){
        $(".chat_tab li").removeClass("chat_tab_on");
        $(".chat_tab01").addClass("chat_tab_on");
        $(".chatFile_admin").hide();
        $(".participant_wrap").show();
        return false;
     });
     $(".chat_tab02").click(function(){
        $(".chat_tab li").removeClass("chat_tab_on");
        $(".chat_tab02").addClass("chat_tab_on");
        $(".chatFile_admin").show();
        $(".participant_wrap").hide();
        return false;
     });
    /* 관라자쪽에만 사용 E */

        
    /* 채팅창 답글 말줄임 S*/
    if ($(window).width() < 1399) {
        $(".message_reply_con").each(function(){
            var length = 33;

            $(this).each(function(){
                if($(this).text().length >= length){
                    $(this).text($(this).text().substr(0,length)+"...")
                }
            });
        });
    }
    if ($(window).width() < 450) {
        $(".message_reply_con").each(function(){
            var length = 24;

            $(this).each(function(){
                if($(this).text().length >= length){
                    $(this).text($(this).text().substr(0,length)+"...")
                }
            });
        });
    }
    if ($(window).width() < 380) {
        $(".message_reply_con").each(function(){
            var length = 20;

            $(this).each(function(){
                if($(this).text().length >= length){
                    $(this).text($(this).text().substr(0,length)+"...")
                }
            });
        });
    }
    if ($(window).width() < 330) {
        $(".message_reply_con").each(function(){
            var length = 18;

            $(this).each(function(){
                if($(this).text().length >= length){
                    $(this).text($(this).text().substr(0,length)+"...")
                }
            });
        });
    }
     /* 채팅창 답글 말줄임 E*/
});


$(function($){
    $(window).on("load",function(){
        
        $.mCustomScrollbar.defaults.scrollButtons.enable=true; //enable scrolling buttons by default
        $.mCustomScrollbar.defaults.axis="y"; //enable 2 axis scrollbars by default
        $("#content-d1").mCustomScrollbar({theme:"dark-3"});
        $("#content-d2").mCustomScrollbar({theme:"dark-3"});
        $("#content-d3").mCustomScrollbar({theme:"dark-3"});
        $("#content-d4").mCustomScrollbar({theme:"dark-3"}); //관라자쪽 참여자 스크롤
        $(".all-themes-switch a").click(function(e){
            e.preventDefault();
            var $this=$(this),
                rel=$this.attr("rel"),
                el=$(".content");
            switch(rel){
                case "toggle-content":
                    el.toggleClass("expanded-content");
                    break;
            }
        });
        
    });
})(jQuery);
