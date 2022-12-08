$(function(){
    //gnb
    if (matchMedia("(min-width: 1200px)").matches) {
        $(".gnb_menu > li.gnb_1dep").bind("mouseenter focusin", function () { 
            $(this).addClass("gnb_on").siblings().removeClass("gnb_on");
            $(".gnb_2dep_bg").show();
            $(".header_wrap").addClass("bg_white")
        });
        $(".gnb_menu > li.gnb_1dep").bind("mouseleave", function () {
            $(this).removeClass("gnb_on");
            $(".gnb_2dep_bg").hide();
            $(".header_wrap").removeClass("bg_white")
        });
    } else {
        $(function () {
            $(".m_gnb_btn").click(function () {
                $(".mobile_gnb_open").show();
               $("#gnb").show();
                $('body').css({'position': 'fixed', 'width': '100%'});
                $('.header_wrap').css({'position': 'fixed'});
            });
            $(".gnb_close").click(function () {
               $(".mobile_gnb_open").hide();
               $("#gnb").hide();
               $('body').css({'position': 'inherit', 'width': '100%'});
               $('.header_wrap').css({'position': 'inherit'});
            });
        
            $(".gnb_3dep").bind("click", function () {
                $(this).toggleClass("gnb_3dep_on").siblings().removeClass("gnb_3dep_on");
            });

            $(".gnb_1dep ").bind("click", function () {
                $(this).addClass("m_gnb_on").siblings().removeClass("m_gnb_on");
            });
        });
      
    };
    $(".lg > li").click(function(){
        $(".lg_2dep").toggle();
    });
});